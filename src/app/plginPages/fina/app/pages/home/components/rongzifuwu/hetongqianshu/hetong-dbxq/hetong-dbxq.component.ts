import { Component, OnInit } from '@angular/core';
import { IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-hetong-dbxq',
  templateUrl: './hetong-dbxq.component.html',
  styleUrls: ['./hetong-dbxq.component.scss']
})
export class HetongDbxqComponent implements OnInit {
  
  model:any;
  models:any;
  add:boolean=true;
  public myDatePickerOptions: IMyOptions = {
  dayLabels: {su: '日', mo: '一', tu: '二', we: '三', th: '四', fr: '五', sa: '六'},
  dayLabelsFull: {su: "周日", mo: "周一", tu: "周二", we: "周三", th: "周四", fr: "周五",
  sa: "周六"},
  monthLabels: { 1: '一月', 2: '二月', 3: '三月', 4: '四月', 5: '五月', 6: '六月', 7: '七月', 8: '八月', 9: '九月', 10:
  '十月', 11: "十一月", 12: '十二月' },
  monthLabelsFull: { 1: "一月", 2: "二月", 3: "三月", 4: "四月", 5: "五月", 6: "六月", 7: "七月", 8:
  "八月", 9: "九月", 10: "十月", 11: "十一月", 12: "十二月" },
  todayBtnTxt: "今天",
  clearBtnTxt: "清除",
  closeBtnTxt: "关闭",
  
  showTodayBtn: true,
  showClearDateBtn: true
};
personList: Array<any> = [
  { id: 1, name: '', age: 30, companyName: '', country: '', city: '', city0: '', city1: '', city2: '', city3: ''}
 ];
 datapersonList:Array<any>=[
  { id: 1, name: '', age: 30, companyName: '', country: '', city: '', city0: '', city1: '', city2: '', city3: ''},
  { id: 1, name: '', age: 30, companyName: '', country: '', city: '', city0: '', city1: '', city2: '', city3: ''},
  { id: 1, name: '', age: 30, companyName: '', country: '', city: '', city0: '', city1: '', city2: '', city3: ''},
  { id: 1, name: '', age: 30, companyName: '', country: '', city: '', city0: '', city1: '', city2: '', city3: ''},
  { id: 1, name: '', age: 30, companyName: '', country: '', city: '', city0: '', city1: '', city2: '', city3: ''},
  { id: 1, name: '', age: 30, companyName: '', country: '', city: '', city0: '', city1: '', city2: '', city3: ''},
  { id: 1, name: '', age: 30, companyName: '', country: '', city: '', city0: '', city1: '', city2: '', city3: ''},
 ];

 tablehead=[
    '序号','保证人客户号','保证人名称','保证人证件类型','保证人证件号码','担保金额','保证担保形式','保证方式','与借款人关系','保证人状态'
 ];
constructor() { }
xybl:any;
bzbl:any;
dybl:any;
zybl:any;

xyblbo:boolean=false;
bzblbo:boolean=false;
dyblbo:boolean=false;
zyblbo:boolean=false;

testarray:any;
ngOnInit() {
    this.testarray={
      grtContNo:'',
      vouAmt:'',
      endDate:'',
      // 以下是担保人信息
      cifNo:'',
      cifName:'',
      cerType:'',
      cerNo:'',
      guaranteeAmt:'',
      guarantyType:'',
      guaranteeType:'',
      relationLender:'',
      statusCode:'',
      //以下是抵押物信息
      coreGuarantyId:'',
      gageName:'',
      gageType:'',
      maxMortagageAmt:'',
      InOutSts:'',
      inputDate:'',
      inputBrId:'',
      //以下是质押物信息
    



    }
}
addperson(){
  if(this.datapersonList.length>0){
    const person=this.datapersonList[0];
    this.personList.push(person);
    this.datapersonList.splice(0,1);
  }
}
remove(id:any){
  this.datapersonList.push(this.personList[id]);
  this.personList.splice(id,1);
}
tijiao(){}
quxiao(){}
selectcheck(data : any,databo:any){
  
  if(data!=null){
      if(databo==this.bzblbo)
          this.bzblbo=true;
      else if(databo==this.xyblbo)
          this.xyblbo=true;
      else if(databo==this.dyblbo)
          this.dyblbo=true;
      else if(databo==this.zyblbo)
          this.zyblbo=true;
      
  }
  else{
     if(databo==this.bzblbo)
          this.bzblbo=false;
      else if(databo==this.xyblbo)
          this.xyblbo=false;
      else if(databo==this.dyblbo)
          this.dyblbo=false;
      else if(databo==this.zyblbo)
          this.zyblbo=false;
      
  }
      
}

}

