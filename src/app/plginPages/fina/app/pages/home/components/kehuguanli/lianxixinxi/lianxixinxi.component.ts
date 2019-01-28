import { Component,ViewChild, OnInit,Input, SimpleChanges } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../params.service'

@Component({
  selector: 'app-lianxixinxi',
  templateUrl: './lianxixinxi.component.html',
  styleUrls: ['./lianxixinxi.component.scss']
})
export class LianxixinxiComponent implements OnInit {
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

  reqData(){
    this.isAjax=true;
      this._http.get('/fina/custom/contractDetail?cuNo='+this.cuNo,(e)=>{
        // console.log(e)
        this.lxxx=e.data;
        // if(e.data.data!=''&&e.data.data!=null){
        //   if(e.data.t){
        //     this.lxxx=e.data.data;
        //   } 
        // }
        this.isAjax=false;
      },()=>{
     this.isAjax=false;
     })
  }

  submitData() {
    if(this.isAjax){
      return;
    }
    this.isAjax = true;

      this.lxxx.cuNo = this.cuNo;//把接收到的数据赋值到当前页面对象
      var reqData = JSON.parse(JSON.stringify(this.lxxx));//复制对象
      var item:string = "";
      this._http.post('/fina/custom/contractInsert', reqData, (e) => {
        item = e.data.t;//是否成功标识
        //console.log(e)
        if (e.data.t) {//请求成功
         // this.dangerShow("保存成功");//弹窗
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

  reqDdListData() {
    this.isAjax = true;
    this._http.get('/fina/dict/dictListList?ids=AP_SEX,AP_ID_TYPE,AP_MATE_ID_TYPE', (e) => {
      let it = null;
      //console.log(e)
      for (let i = 0; i < e.data.length; i++) {
        it = e.data[i];
        if (it.myid == 'AP_SEX') {
          this.AP_SEX = it.data;
        } else if (it.myid == 'AP_ID_TYPE') {
          this.AP_ID_TYPE = it.data;
        }else if(it.myid == 'AP_MATE_ID_TYPE')
          this.AP_MATE_ID_TYPE = it.data;
      }
      this.isAjax = false;
    }, () => {
      this.isAjax = false;
    })
  }

  reSetModel() {
    this.lxxx = {
      cuNo:"",
      apPer:"",
      apIdNo:"",
      apHoldNo:"",
      apPhone:"",
      apAddr:"",
      apMate:"",
      apMateIdNo:"",
      commPer:"",
      commTel:"",
      foreLicNo:"",
      foreAcNo:"",
      postCode:"",
      cifTel:"",
      cifFax:"",
      comAddr:"",
      webUrl:"",
      email:"",
      apSex:"",
      apIdType:"",
      apMateIdType:""
    }
  }
lxxx={
  cuNo:"",
  apPer:"",
  apIdNo:"",
  apHoldNo:"",
  apPhone:"",
  apAddr:"",
  apMate:"",
  apMateIdNo:"",
  commPer:"",
  commTel:"",
  foreLicNo:"",
  foreAcNo:"",
  cifTel:"",
  postCode:"",
  cifFax:"",
  comAddr:"",
  webUrl:"",
  email:"",
  apSex:"",
  apIdType:"",
  apMateIdType:""
}
  /*model的准备 */

  AP_SEX=[]
  AP_ID_TYPE=[]
  AP_MATE_ID_TYPE=[]
  constructor(public params: ParamsService) {
    this._http = params._http;
  }
  _http: any;
  isAjax = false;
  ngOnInit() {
    this.reqDdListData();
  }

  public myDatePickerOptions: IMyOptions = {};

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
    window['reqData']= JSON.parse(JSON.stringify(this.lxxx));
  }
  confirmModification(){//取消修改
    let data=window['reqData'];
    for(let it in data){
      this.lxxx[it]=data[it];
    }
    //this.reqData();//数据回滚
    this.Idisabled = true;//全局禁用
    this.btnFlag = true;//切换回修改按钮
  }

  submitUp(){//保存修改
    this.submitData();//提交数据
    this.Idisabled = true;
    this.btnFlag = true;
  }
}
