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
  @Input() randoms:any;
  @Input() controlIndicators:any;
  @Output() randomsChange = new EventEmitter();
  @Output() controlIndicatorsChange = new EventEmitter();
 
  ID_TYPE = []
  constructor(public params:ParamsService) {
    this._http=params._http;
   }
  xzsx={
  idType:"333",
  idNo:"444",
  cuName:""
  }
  cuNo=''
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
          if(item){
            console.log(e)
            console.log(e.data)
            this.xzsx.cuName = e.data.data.cuName;
            this.cuNo = e.data.data.cuNo;
            this.dataRes(this.randoms);
          }else{
            alert("校验失败")
          }
          this.isAjax=false;
        },()=>{
          this.isAjax=false;
     })
  }

  ngOnInit() {
    this.reqDdListData();
  }
  public myDatePickerOptions: IMyOptions = {};
  dataRes(randoms){
    this.controlIndicators.cuName = this.xzsx.cuName
    this.controlIndicators.cuNo = this.cuNo
    randoms=Math.random();
    this.newInfoDemoBasic.show()
  }
}
