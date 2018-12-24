import { Component,ViewChild, OnInit, Input } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-gaikuangxinxi',
  templateUrl: './gaikuangxinxi.component.html',
  styleUrls: ['./gaikuangxinxi.component.scss']
})
export class GaikuangxinxiComponent implements OnInit {

  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @Input() cuNo:any;
  CUR_NO=[
    {label:"币种",disabled:"disabled"},
    {label:"人民币",value:"rmb"},
    {label:"美元",value:"my"}
  ]
  
  MAIN_BUS=[
    {label:"主营业务",disabled:"disabled"}
  ]

  l
  gkxx={
    //文本框的mode
    regFund:"",
    factFund:"",
    assTot:"",
    saleTot:"",
    runRange:"",
    cuNo:"",
    //下拉菜单model
    curNo:"",
    mainBus:""
  }
  
  constructor() { }

  ngOnInit() {
  }

  public myDatePickerOptions: IMyOptions = {};

  // submitData(){
  //   var item = "";
  //   this.isAjax=true; 
  //       this._http.post('/fina/grade/detailInsert',parjson,(e)=>{
  //         item = e.data.t;
  //         console.log(e)
  //         if(e.data.t){
  //           this.closeWin();
  //         }
  //         this.isAjax=false;
  //       },()=>{
  //         this.isAjax=false;
  //    })
  //  }
}
