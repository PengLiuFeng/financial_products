import { Component, OnInit } from '@angular/core';
import { IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-daikuanhuankuanheyueguize',
  templateUrl: './daikuanhuankuanheyueguize.component.html',
  styleUrls: ['./daikuanhuankuanheyueguize.component.scss']
})

export class DaikuanhuankuanheyueguizeComponent implements OnInit{
  
  endDate:any;
  endDate1:any;
  radioModel=true;
  
  constructor() { }

  ngOnInit() {
  }
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

}
