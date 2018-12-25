import { Component, ViewChild, OnInit, Input, SimpleChanges } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../params.service'
@Component({
  selector: 'app-gaikuangxinxi',
  templateUrl: './gaikuangxinxi.component.html',
  styleUrls: ['./gaikuangxinxi.component.scss']
})
export class GaikuangxinxiComponent implements OnInit {

  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @Input() cuNo: any;
  @Input() personPage:any;

  ngOnChanges(changes: SimpleChanges): void {
    this.flag = true;
    this.btnFlag = true;
    this.Idisabled = false;
    this.reSetModel();
    if(this.personPage=='oldUser'){//查询修改
      this.reqData();
      this.flag = false;
      this. Idisabled = true;
    }else if(this.personPage=='newUser'){//新增
      this.flag = true;
      this. Idisabled = false;
    }
  }
  CUR_NO = []
  MAIN_BUS = []
  gkxx = {
    //文本框的mode
    regFund: "",
    factFund: "",
    assTot: "",
    saleTot: "",
    runRange: "",
    cuNo: "",
    //下拉菜单model
    curType: "",
    mainBus: ""
  }

  public myDatePickerOptions: IMyOptions = {};

  _http: any;
  isAjax = false;
  constructor(public params: ParamsService) {
    this._http = params._http;
  }
  reqDdListData() {
    this.isAjax = true;
    this._http.get('/fina/dict/dictListList?ids=CUR_NO,MAIN_BUS', (e) => {
      let it = null;
      //console.log(e)
      for (let i = 0; i < e.data.length; i++) {
        it = e.data[i];
        if (it.myid == 'CUR_NO') {
          this.CUR_NO = it.data;
        } else if (it.myid == 'MAIN_BUS') {
          this.MAIN_BUS = it.data;
        }
      }
      this.isAjax = false;
    }, () => {
      this.isAjax = false;
    })
  }

  ngOnInit() {
    this.reqDdListData();
  }
  reSetModel() {
    this.gkxx = {
      regFund: "",
      factFund: "",
      assTot: "",
      saleTot: "",
      runRange: "",
      cuNo: "",
      curType: "",
      mainBus: ""
    }
  }
  reqData(){
    this.isAjax=true;
      this._http.get('/fina/custom/generalDetail?cuNo='+this.cuNo,(e)=>{
        //console.log(e)
        if(e.data.data!=''&&e.data.data!=null){
          if(e.data.t){
            this.gkxx=e.data.data;
            this.gkxx.regFund = (parseInt(this.gkxx.regFund) / 10000).toString();
            this.gkxx.factFund = (parseInt(this.gkxx.factFund) / 10000).toString();
            this.gkxx.assTot = (parseInt(this.gkxx.assTot) / 10000).toString();
            this.gkxx.saleTot = (parseInt(this.gkxx.saleTot) / 10000).toString();
          }
        }
        
        this.isAjax=false;
      },()=>{
     this.isAjax=false;
     })
  }

  submitData() {
    if(this.isAjax){
      alert("占用")
      return;
    }
    this.isAjax = true;

      this.gkxx.cuNo = this.cuNo;//把接收到的数据赋值到当前页面对象

      var reqData = JSON.parse(JSON.stringify(this.gkxx));//复制对象

      /*计算指定数据 */
      reqData.regFund = (parseInt(this.gkxx.regFund) * 10000).toString();
      reqData.factFund = (parseInt(this.gkxx.factFund) * 10000).toString();
      reqData.assTot = (parseInt(this.gkxx.assTot) * 10000).toString();
      reqData.saleTot = (parseInt(this.gkxx.saleTot) * 10000).toString();
      
      var item:string = "";
      this._http.post('/fina/custom/generalInsert', reqData, (e) => {
        item = e.data.t;//是否成功标识
        //console.log(e)
        if (e.data.t) {//请求成功
          //this.dangerShow("保存成功");//弹窗
          this.Idisabled = true;//全局禁用
          this.flag = false;//切换按钮组为修改
        }
          this.dangerShow(e.data.msg);//弹窗
        
        this.isAjax = false;
      }, () => {/*出现错误 弹窗提示*/
        this.dangerShow("失败 请重试");
        this.isAjax = false;
      })

  }
  verify(e){
    var txt = e.target.value;

    if (!/^\d+(\.\d+)?$/.test(txt)){
      this.dangerShow('输入有误');
      e.target.value='';
    }
  }

  danger_hid = true;//弹窗状态标识
  alertTxt: string;//弹窗内容

  dangerShow(str) {//弹窗
    this.alertTxt=str;
    this.danger_hid = false;//显示
    setTimeout(() => {//三秒后隐藏
      this.danger_hid = true
    }, 3000);
  }

  flag = true;//按钮组选择
  btnFlag = true;//修改与保存按钮切换
  Idisabled = false;//全局禁用

  modification(){ //开始修改
    this.btnFlag = false;//切换为保存按钮
    this.Idisabled = false;
  }
  confirmModification(){//取消修改
    this.reqData();//数据回滚
    this.Idisabled = true;//全局禁用
    this.btnFlag = true;//切换回修改按钮
  }

  submitUp(){//保存修改
    //提交数据
    this.submitData();
    this.Idisabled = true;
    this.btnFlag = true;
  }
}
