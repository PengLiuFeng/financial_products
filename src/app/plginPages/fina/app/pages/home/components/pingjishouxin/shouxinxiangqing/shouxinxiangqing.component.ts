import { Component,Output, OnInit, ViewChild, Input,OnChanges,EventEmitter } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, turnState } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../params.service'
@Component({
  selector: 'app-shouxinxiangqing',
  templateUrl: './shouxinxiangqing.component.html',
  styleUrls: ['./shouxinxiangqing.component.scss']
})
export class ShouxinxiangqingComponent implements OnInit{
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @Input() dataObject:any;
  @Input() sxxqAllDate:any;
  @Output() dataObjectChange = new EventEmitter();
  isShow:boolean = false;

  button_text='月'
  CRE_RATIN=[]
  AUTH_STS=[]
  FINPRO_NO=[]
  AUTH_SPLIT_TYPT=[]
  TERM_TYPE=[]

  //文本框的model
    zhsx={
      authId:'',
      creRatin:'',
      authAmt:'',
      authBal:'',
      termMon:'',
      termType:'',
      authSts:'',
      begDate:'',
      endDate:'',
      recycle:'',
      brName:'',
      opName:'',
      opNo:'',
      txDate:'',
      upDate:'',

      cuNo:'',
      cuName:'',
      edsfdj:false,
    }
    flywsx={
      finproNo:'',
      authSplitType:'',
      sauthAmt:'',
      sauthBal:'',
      begDate:'',
      endDate:'',
      authAppNo:'',
    }

  zhu:string = "注 ：额度核准编号 + 金融产品号 + 分项授信额度类型 + 细分流水号";;//注释内容
  public show_fenlei:string='1';
  constructor(public params:ParamsService) {
    this._http=params._http;
   }

  _http:any;
  isAjax=false;
  reqDdListData(){
    this.isAjax=true;
      this._http.get('/fina/dict/dictListList?ids=CRE_RATIN,AUTH_STS,FINPRO_NO,AUTH_SPLIT_TYPT,TERM_TYPE',(e)=>{
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
          }else if(it.myid=='TERM_TYPE'){
            this.TERM_TYPE = it.data;
          }
        }
        this.isAjax=false;
      },()=>{
     this.isAjax=false;
     })
   }
   submitAllData(){
      for(var i = 0; i<this.TERM_TYPE.length;i++ ){
        if(this.TERM_TYPE[i].label=="月"){
          this.zhsx.termType = this.TERM_TYPE[i].value;
          break;
        }
      }
  // this.zhsx.termType = this.TERM_TYPE.value;
    this.zhsx.cuNo=this.dataObject['controlIndicators'].cuNo;
    this.zhsx.cuName=this.dataObject['controlIndicators'].cuName;
    this.zhsx.authId=this.dataObject['controlIndicators'].authId;
    this.flywsx.authAppNo=this.dataObject['controlIndicators'].authAppNo;
     let zhsx=JSON.parse(JSON.stringify(this.zhsx))
     let flywsx=JSON.parse(JSON.stringify(this.flywsx))
     let parjson={};
     zhsx.begDate = new Date(this.zhsx.begDate).getTime();
     zhsx.endDate = new Date(this.zhsx.endDate).getTime();
     flywsx.begDate = new Date(this.flywsx.begDate).getTime();
     flywsx.endDate = new Date(this.flywsx.endDate).getTime();
     zhsx.upDate = new Date(this.zhsx.upDate).getTime();
     zhsx.txDate = new Date(this.zhsx.txDate).getTime();
     parjson['mBody']=zhsx;
     parjson['isClassify']=this.show_fenlei=='1'?'是':'否';
     parjson['cData']=flywsx;
     console.log(parjson)
    var item = "";
    this.isAjax=true; 
        this._http.post('/fina/grade/detailInsert',parjson,(e)=>{
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
