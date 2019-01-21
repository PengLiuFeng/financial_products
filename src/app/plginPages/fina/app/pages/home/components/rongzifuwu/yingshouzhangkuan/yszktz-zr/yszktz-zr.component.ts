//应收账款转让通知——子页面
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-yszktz-zr',
  templateUrl: './yszktz-zr.component.html',
  styleUrls: ['./yszktz-zr.component.scss']
})
export class YszktzZrComponent implements OnInit {
  radioModel:any="zrtz";//传给头部组件,暂时用于判断切换按钮的选中状态
  constructor() { }
q:any;
exmail:boolean;
mail:boolean;
  zrtzs={
    traInfNo:"",  //转让通知书编号
    rcuNo:"",   //买方名
    cuName:"",  //客户名
    contOw:"", //保理公司
    signDate:"",  //合同签订日期
    contNo:"",  //合同编号
    capNm:"", //保理公司
   reacctna:"", //收款户名
   reacct:"", //收款账户
   reacctbk:"", //收款开户行
   comAddr:"",  //联系地址
   postCode:"", //邮编
   foreLicNo:"",  //业务联系人
   email:"" ,//电子邮箱
   traInfTime:""  //通知日期
  }
  signDate={
    year:"",
    month:"",
    day:""
  }
  traInfTime={
    year:"",
    month:"",
    day:""
  }
  tableData=[
   {buReceiNo:"0001", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endDate:"2019-01-01"},
   {buReceiNo:"0001", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endDate:"2019-01-01"},
   {buReceiNo:"0001", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endDate:"2019-01-01"},
   {buReceiNo:"0001", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endDate:"2019-01-01"},
   {buReceiNo:"0001", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endDate:"2019-01-01"},
   {buReceiNo:"0001", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endDate:"2019-01-01"},
   {buReceiNo:"0001", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endDate:"2019-01-01"}
  ]
  ngOnInit() {
  }


  pubStr={
    busYear:"",
    busMonth:"",
    busDay:"",
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
    }else if("busDay"==str){
      var oDate = new Date(this.signDate.year+'/'+this.signDate.month+'/1');
      var dayNum = this.get_month_date(oDate);
      if((/^(0[1-9]|[1-9]|[1-2][0-9]|3[0-1])$/.test(iVal))){
        if(parseInt(e.target.value) > dayNum){
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
    if(!this.exmail&&!this.mail){
       alert("请您先选择一种线下的转让通知")
      return;
    }
    
    var sign = new Date(this.signDate.year+"/"+this.signDate.month+"/"+this.signDate.day).getTime();
    this.zrtzs.signDate = String(sign);
    sign = new Date(this.traInfTime.year+"/"+this.traInfTime.month+"/"+this.traInfTime.day).getTime();
    this.zrtzs.traInfTime = String(sign);
  }
  danger_hid=true;

  dangerShow(){
    this.danger_hid=false;
    setTimeout(() => {
      this.danger_hid=true
    }, 3000);
  }
}
