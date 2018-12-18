import { Component, OnInit,ViewChild } from '@angular/core';
import { IMyOptions, MDBDatePickerComponent } from 'ng-uikit-pro-standard';
import { Location} from '@angular/common';



@Component({
  selector: 'app-xinzengyingshouzhangkuanmingxi',
  templateUrl: './xinzengyingshouzhangkuanmingxi.component.html',
  styleUrls: ['./xinzengyingshouzhangkuanmingxi.component.scss']
})


export class XinzengyingshouzhangkuanmingxiComponent implements OnInit {

  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;

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
  constructor(
    private location:Location,
  ) { }
  ngOnInit() { 
      let today = new Date();
      let invalidDate = new Date();
      invalidDate.setDate(today.getDate() - 1);
  }
  editField: string;
  personList: Array<any> = [
    { id: 1, name: '', age: 30, companyName: '', country: '', city: '', city0: '', city1: '', city2: '', city3: ''}
   ];
  awaitingPersonList: Array<any> = [
    { id: 2, name: '', age: 30, companyName: '', country: '', city: '', city0: '', city1: '', city2: '', city3: ''},
    { id: 3, name: '', age: 30, companyName: '', country: '', city: '', city0: '', city1: '', city2: '', city3: ''},
    { id: 4, name: '', age: 30, companyName: '', country: '', city: '', city0: '', city1: '', city2: '', city3: ''},
    { id: 5, name: '', age: 30, companyName: '', country: '', city: '', city0: '', city1: '', city2: '', city3: ''},
    { id: 6, name: '', age: 30, companyName: '', country: '', city: '', city0: '', city1: '', city2: '', city3: ''},
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  goback():void{
    this.location.back();
  }
  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
