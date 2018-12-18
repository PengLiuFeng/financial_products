import { Component,ViewChild,ViewChildren,QueryList, OnInit } from '@angular/core';
import { IMyOptions } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-wodehetong',
  templateUrl: './wodehetong.component.html',
  styleUrls: ['./wodehetong.component.scss']
})
export class WodehetongComponent implements OnInit {
    model:any;
    optionsSelect:any;
    models:any;
    testarray:any;
    bo:boolean=false;
    add:boolean=true;
    @ViewChildren('pages') pages: QueryList<any>;
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
  table_head=[
    '序号','备案编号','备案文件名','文件描述','签署日期','标的ID','授信协议编号','合同编号',
    '资产方','操作',
  ];
  table_body=[
    {id: 1, beianhao:'D5FS6A1G',beianwenjianming:'文本文件',wenjianmiaoshu:'这是一个测试文件',qsdate:'2017-5-6',biaoID:'4568412',sxbh:'5S487SD',htbh:'SDF4541',zcf:'东方正大'},
    {id: 2, beianhao:'D5FS6A1G',beianwenjianming:'文本文件',wenjianmiaoshu:'这是一个测试文件',qsdate:'2017-5-6',biaoID:'4568412',sxbh:'5S487SD',htbh:'SDF4541',zcf:'东方正大'},
    {id: 3, beianhao:'D5FS6A1G',beianwenjianming:'文本文件',wenjianmiaoshu:'这是一个测试文件',qsdate:'2017-5-6',biaoID:'4568412',sxbh:'5S487SD',htbh:'SDF4541',zcf:'东方正大'},
    {id: 4, beianhao:'D5FS6A1G',beianwenjianming:'文本文件',wenjianmiaoshu:'这是一个测试文件',qsdate:'2017-5-6',biaoID:'4568412',sxbh:'5S487SD',htbh:'SDF4541',zcf:'东方正大'},
    {id: 5, beianhao:'D5FS6A1G',beianwenjianming:'文本文件',wenjianmiaoshu:'这是一个测试文件',qsdate:'2017-5-6',biaoID:'4568412',sxbh:'5S487SD',htbh:'SDF4541',zcf:'东方正大'},
    {id: 6, beianhao:'D5FS6A1G',beianwenjianming:'文本文件',wenjianmiaoshu:'这是一个测试文件',qsdate:'2017-5-6',biaoID:'4568412',sxbh:'5S487SD',htbh:'SDF4541',zcf:'东方正大'},
    {id: 7, beianhao:'D5FS6A1G',beianwenjianming:'文本文件',wenjianmiaoshu:'这是一个测试文件',qsdate:'2017-5-6',biaoID:'4568412',sxbh:'5S487SD',htbh:'SDF4541',zcf:'东方正大'},
    {id: 8, beianhao:'D5FS6A1G',beianwenjianming:'文本文件',wenjianmiaoshu:'这是一个测试文件',qsdate:'2017-5-6',biaoID:'4568412',sxbh:'5S487SD',htbh:'SDF4541',zcf:'东方正大'},
    {id: 9, beianhao:'D5FS6A1G',beianwenjianming:'文本文件',wenjianmiaoshu:'这是一个测试文件',qsdate:'2017-5-6',biaoID:'4568412',sxbh:'5S487SD',htbh:'SDF4541',zcf:'东方正大'},
    {id: 10, beianhao:'D5FS6A1G',beianwenjianming:'文本文件',wenjianmiaoshu:'这是一个测试文件',qsdate:'2017-5-6',biaoID:'4568412',sxbh:'5S487SD',htbh:'SDF4541',zcf:'东方正大'},
    {id: 11, beianhao:'D5FS6A1G',beianwenjianming:'文本文件',wenjianmiaoshu:'这是一个测试文件',qsdate:'2017-5-6',biaoID:'4568412',sxbh:'5S487SD',htbh:'SDF4541',zcf:'东方正大'},
    {id: 12, beianhao:'D5FS6A1G',beianwenjianming:'文本文件',wenjianmiaoshu:'这是一个测试文件',qsdate:'2017-5-6',biaoID:'4568412',sxbh:'5S487SD',htbh:'SDF4541',zcf:'东方正大'},
  ];
  constructor() { }

  ngOnInit() {
    if (this.table_body.length % this.itemsPerPage === 0) {
      this.numberOfPaginators = Math.floor(this.table_body.length / this.itemsPerPage);
    } else {
      this.numberOfPaginators = Math.floor(this.table_body.length / this.itemsPerPage + 1);
    }
    for (let i = 1; i <= this.numberOfPaginators; i++) {
      this.paginators.push(i);
    }
    this.testarray={
      authAppNo:'',
      contNo:'',
      biaoID:'',
      zicanfang:'',
    }
  }
  activePage = 1;
  itemsPerPage = 4;//每页显示条数
  paginators: Array<any> = [];
  numberOfPaginators: number;//总页数
  lastVisibleIndex: number = this.itemsPerPage;
  firstVisibleIndex = 1;
  numberOfVisiblePaginators = 10;//显示页数
  firstVisiblePaginator = 0;
lastVisiblePaginator = this.numberOfVisiblePaginators;
  /**
   * 点击页码
   */
changePage(event: any) {
  if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
    this.activePage = +event.target.text;
    this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
    this.lastVisibleIndex = this.activePage * this.itemsPerPage;
  }
}
/**
   * 下一页
   */
nextPage() {
  if (this.pages.last.nativeElement.classList.contains('active')) {
    if ((this.numberOfPaginators - this.numberOfVisiblePaginators) >= this.lastVisiblePaginator) {
      this.firstVisiblePaginator += this.numberOfVisiblePaginators;
    this.lastVisiblePaginator += this.numberOfVisiblePaginators;
    } else {
      this.firstVisiblePaginator += this.numberOfVisiblePaginators;
    this.lastVisiblePaginator = this.numberOfPaginators;
    }
  }

  this.activePage += 1;
  this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
  this.lastVisibleIndex = this.activePage * this.itemsPerPage;
}
/**
   * 上一页
   */
previousPage() {
  if (this.pages.first.nativeElement.classList.contains('active')) {
    if ((this.lastVisiblePaginator - this.firstVisiblePaginator) === this.numberOfVisiblePaginators)  {
      this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
      this.lastVisiblePaginator -= this.numberOfVisiblePaginators;
    } else {
      this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
      this.lastVisiblePaginator -= (this.numberOfPaginators % this.numberOfVisiblePaginators);
    }
  }

  this.activePage -= 1;
  this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
  this.lastVisibleIndex = this.activePage * this.itemsPerPage;
}
  
/**
   * 点击首页
   */
firstPage() {
  this.activePage = 1;
  this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
  this.lastVisibleIndex = this.activePage * this.itemsPerPage;
  this.firstVisiblePaginator = 0;
  this.lastVisiblePaginator = this.numberOfVisiblePaginators;
}
/**
   * 点击尾页
   */
lastPage() {
  this.activePage = this.numberOfPaginators;
  this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
  this.lastVisibleIndex = this.activePage * this.itemsPerPage;

  if (this.numberOfPaginators % this.numberOfVisiblePaginators === 0) {
    this.firstVisiblePaginator = this.numberOfPaginators - this.numberOfVisiblePaginators;
    this.lastVisiblePaginator = this.numberOfPaginators;
  } else {
    this.lastVisiblePaginator = this.numberOfPaginators;
    this.firstVisiblePaginator = this.lastVisiblePaginator - (this.numberOfPaginators % this.numberOfVisiblePaginators);
  }
}
pageTable=[];
    allcheck(){
      if(this.bo==false)
          this.bo=true;
      else
          this.bo=false;
    }
}
