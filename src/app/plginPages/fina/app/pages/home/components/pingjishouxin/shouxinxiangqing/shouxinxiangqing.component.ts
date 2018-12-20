import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, turnState } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../params.service'
@Component({
  selector: 'app-shouxinxiangqing',
  templateUrl: './shouxinxiangqing.component.html',
  styleUrls: ['./shouxinxiangqing.component.scss']
})
export class ShouxinxiangqingComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @Input() dataObject:any;
  @Input() sxxqAllDate:any;
  isShow:boolean = false;
  CRE_RATIN=[]
  AUTH_STS=[]
  FINPRO_NO=[ ]
  AUTH_SPLIT_TYPT=[]

  //文本框的model
    zhsx={
      authId:'',
      creRatin:'',
      authAmt:'',
      authBal:'',
      termMon:'',
      authSts:'',
      begDate:'',//综合授信额度起始日期
      endDate:'',//综合授信额度终止日期
      recycle:false,
      edsfdj:false,//额度是否冻结(暂时使用)
      brNo:'',
      brName:'', 
      opName:'', 
      upOpName:'',
      txDate:'',//登记时间
      upDate:''//修改时间
    }
    flywsx={
      authSplitTypt:'',
      finproNo:'',
      authBal:'',
      authAmt:'',
      begDate:'',//分项授信起始日期
      endDate:'',//分项授信终止日期
      authAppNo:'',
    }

  zhu:string = "注 ：额度核准编号 + 金融产品号 + 分项授信额度类型 + 细分流水号";;//注释内容
  public show_fenlei:string;
  constructor(public params:ParamsService) {
    this._http=params._http;
   }

  _http:any;
  isAjax=false;
  reqDdListData(){
    this.isAjax=true;
      this._http.get('/fina/dict/dictListList?ids=CRE_RATIN,AUTH_STS,FINPRO_NO,AUTH_SPLIT_TYPT',(e)=>{
        let it=null;
        for(let i=0;i<e.data.length;i++){
          it=e.data[i];
          if(it.myid=='CRE_RATIN'){
            this.CRE_RATIN=it.data;
          }else if(it.myid=='AUTH_STS'){
            this.AUTH_STS=it.data;
          }else if(it.myid=='FINPRO_NO'){
            this.FINPRO_NO=it.data;
          }else if(it.myid=='AUTH_SPLIT_TYPT'){
            this.AUTH_SPLIT_TYPT=it.data;
          }
        }
        this.isAjax=false;
      },()=>{
     this.isAjax=false;
     })
   }
   submitAllData(){
     let zhsx=JSON.parse(JSON.stringify(this.zhsx))
     let flywsx=JSON.parse(JSON.stringify(this.flywsx))
     let parjson={};
     zhsx.begDate = new Date(this.zhsx.begDate).getTime().toString();
     zhsx.endDate = new Date(this.zhsx.endDate).getTime().toString();
     flywsx.begDate = new Date(this.zhsx.begDate).getTime().toString();
     flywsx.endDate = new Date(this.zhsx.endDate).getTime().toString();
     zhsx.upDate = new Date(this.zhsx.upDate).getTime().toString();
     zhsx.txDate = new Date(this.zhsx.txDate).getTime().toString();
     parjson['mBody']=zhsx;
     parjson['isClassify']=this.show_fenlei=='0'?'否':'是';
     parjson['cData']=flywsx;
     console.log(parjson)
    var item = "";
    this.isAjax=true; 
        this._http.post('/fina/grade/idvalidate',parjson,(e)=>{
          item = e.data.t;
    console.log(e)
          this.isAjax=false;
        },()=>{
          this.isAjax=false;
     })
   }
  public myDatePickerOptions: IMyOptions = this.params.mdb_es;


  ngOnInit() {
    this.reqDdListData();
  }

}
