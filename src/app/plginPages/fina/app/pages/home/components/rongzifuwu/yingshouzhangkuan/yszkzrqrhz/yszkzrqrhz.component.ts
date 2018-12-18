import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yszkzrqrhz',
  templateUrl: './yszkzrqrhz.component.html',
  styleUrls: ['./yszkzrqrhz.component.scss']
})
export class YszkzrqrhzComponent implements OnInit {

  radioModel:any="qrhz";//传给头部组件,判断切换按钮的选中状态

  qrhz={
    cuName:"",  //客户名
    traInfTime:"",  //通知日期
    traInfNo:"",  //转让通知书编号
    contOw:"" //保理公司
  }

  traInfTime={
    year:"",
    month:"",
    day:""
  }

  constructor() { }

  ngOnInit() {
  }


  pubStr={
    traInfYear:"",
    traInfMonth:"",
    traInfDay:""
  }
  
  verificationNumber(e,pub){

    if(/^\d+$/.test(e.target.value )){
      this.pubStr[pub] = e.target.value;
    }else{
      if(e.target.value.length>0){
        e.target.value = this.pubStr[pub];
      }
    }
  }


  verification(e,str){
    var iVal = e.target.value;
    if("year"==str){
      if(!(/^[1-9]\d{3}$/.test(iVal))){
        e.target.value="";
        this.dangerShow();
      }
    }else if("month"==str){
      if(!(/^(0[1-9]|[1-9]|1[0-2])$/.test(iVal))){
        e.target.value="";
        this.dangerShow();
      }
    }else if("traInfDay"==str){
      var oDate = new Date(this.traInfTime.year+'/'+this.traInfTime.month+'/1');
      var dayNum = this.get_month_date(oDate);
      if((/^(0[1-9]|[1-9]|[1-2][0-9]|3[0-1])$/.test(iVal))){

        if(parseInt(e.target.value)> dayNum){
          e.target.value="";
          this.dangerShow();
        }
      }else{
        e.target.value="";
        this.dangerShow();
      }
    }
  }

   get_month_date(oDate){
      oDate.setMonth(oDate.getMonth());
      oDate.setMonth(oDate.getMonth() + 1);
      oDate.setDate(1);
      oDate.setMonth(oDate.getMonth());
      oDate.setDate(0);
      return oDate.getDate();
    }

  timestamp(){

    var sign = new Date(this.traInfTime.year+"/"+this.traInfTime.month+"/"+this.traInfTime.day).getTime();
    this.qrhz.traInfTime = String(sign);
  }
  danger_hid=true;

  dangerShow(){
    this.danger_hid=false;
    setTimeout(() => {
      this.danger_hid=true
    }, 3000);
  }

}
