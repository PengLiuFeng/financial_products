import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions,ModalDirective } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../params.service'
@Component({
  selector: 'app-xinzengshouxin',
  templateUrl: './xinzengshouxin.component.html',
  styleUrls: ['./xinzengshouxin.component.scss']
})
export class XinzengshouxinComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;

  @Input() newInfoDemoBasic:ModalDirective;
  @Input() newDemoBasic:ModalDirective;
  @Input() controlIndicators:any;
  @Output() controlIndicatorsChange = new EventEmitter();
 
  ID_TYPE = []
  constructor(public params:ParamsService) {
    this._http=params._http;
   }
  xzsx={
  idType:"",
  idNo:"",
  cuName:""
  }
  cuNo=''
  authId='';
  authAppNo='';
  reSetModel(){
    this.xzsx={
      idType:"",
      idNo:"",
      cuName:""
    }
  }
  _http:any;
  isAjax=false;
  reqDdListData(){
    this.isAjax=true;
      this._http.get('/fina/dict/dictListList?ids=ID_TYPE',(e)=>{
        let it=null;
        for(let i=0;i<e.data.length;i++){
          it=e.data[i];
          if(it.myid=='ID_TYPE'){
            this.ID_TYPE=it.data;
          }
        }
        this.isAjax=false;
      },()=>{
     this.isAjax=false;
     })
   }
   submitAJump(){
    var item = "";
    this.isAjax=true;
        this._http.post('/fina/grade/idvalidate',this.xzsx,(e)=>{
          item = e.data.t;
          console.log(e)
          if(item){
            // console.log(e)
            // console.log(e.data)
            this.xzsx.cuName = e.data.data.cuName;
            this.cuNo = e.data.data.cuNo;
            this.authId = e.data.data.authId;
            this.authAppNo = e.data.data.authAppNo;
            this.dataRes();
          }
          this.dangerShow(e.data.msg);
          this.isAjax=false;
        },()=>{
          this.isAjax=false;
     })
  }

  ngOnInit() {
    this.reqDdListData();
  }
  public myDatePickerOptions: IMyOptions = {};
  dataRes(){
    this.controlIndicators.cuName = this.xzsx.cuName;
    this.controlIndicators.cuNo = this.cuNo;
    this.controlIndicators.authId = this.authId;
    this.controlIndicators.authAppNo = this.authAppNo;
    this.newInfoDemoBasic.show();
  }
  danger_hid=true;
  alertTxt='';
  dangerShow(str){
    this.alertTxt = str;
    this.danger_hid=false;
    setTimeout(() => {
      this.danger_hid=true
    }, 3000);
  }
}
