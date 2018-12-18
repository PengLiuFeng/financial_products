import { Component, OnInit,ViewChildren, QueryList,ViewChild } from '@angular/core';
import { IMyOptions } from 'ng-uikit-pro-standard';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location} from '@angular/common';
@Component({
  selector: 'app-yszkhg',
  templateUrl: './yszkhg.component.html',
  styleUrls: ['./yszkhg.component.scss']
})


export class YszkhgComponent implements OnInit {
  isChildRouteLoaded = false;

  goback():void{
    this.location.back();
  }


  @ViewChildren('pages') pages: QueryList<any>;
  sfs:string;
  yszk={
    name:'',
    khhm:'',//客户号码
    ywlx:{
      vals:'',
      selects:
      [
        { value: '1', label: '有追索公开管理' },
        { value: '2', label: '无追索公开管理' },
      ]
    },
    htbh:'',    //合同编号
    htzt:{
      vals:'--全部--',
      selects:
      [
        { value: '1', label: '正常' },
        { value: '2', label: '异常' },
      ]
    }
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

 

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private location:Location
) { }

ngOnInit() {

  window['yszk']=this;
  if (this.tableData.length % this.itemsPerPage === 0) {
    this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage);
  } else {
    this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage + 1);
  }
  for (let i = 1; i <= this.numberOfPaginators; i++) {
    this.paginators.push(i);
  }
}
tableData = [
  { id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
  { id: 2, firstName: 'John', lastName: 'Doe', username: '@john' },
  { id: 3, firstName: 'Lessie', lastName: 'Moe', username: '@lessie' },
  { id: 4, firstName: 'Otton', lastName: 'Otto', username: '@otton' },
  { id: 5, firstName: 'Krauze', lastName: 'John', username: '@krauze' },
  { id: 6, firstName: 'Lex', lastName: 'Lucky', username: '@lex' },
  { id: 7, firstName: 'Allie', lastName: 'Bill', username: '@allie' },
  { id: 8, firstName: 'Anna', lastName: 'Frost', username: '@anna' },
  { id: 9, firstName: 'Bob', lastName: 'One', username: '@bob' },
  { id: 10, firstName: 'Carl', lastName: 'Johnson', username: '@cj' },
  { id: 11, firstName: 'Mia', lastName: 'Marx', username: '@mia' },
  { id: 12, firstName: 'Cia', lastName: 'Fbi', username: '@cia' },
  { id: 13, firstName: 'John', lastName: 'Doe', username: '@johny' },
  { id: 14, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
  { id: 14, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
  { id: 14, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
  { id: 14, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
  { id: 15, firstName: 'Lessie', lastName: 'Moe', username: '@lessie'}
];
activePage = 1;
  itemsPerPage = 6;//每页显示条数
  paginators: Array<any> = [];
  numberOfPaginators: number;
  lastVisibleIndex: number = this.itemsPerPage;
  firstVisibleIndex = 1;
changePage(event: any) {
  if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
    this.activePage = +event.target.text;
    this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
    this.lastVisibleIndex = this.activePage * this.itemsPerPage;
  }
}
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
  numberOfVisiblePaginators = 10;
  firstVisiblePaginator = 0;
lastVisiblePaginator = this.numberOfVisiblePaginators;

firstPage() {
  this.activePage = 1;
  this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
  this.lastVisibleIndex = this.activePage * this.itemsPerPage;
  this.firstVisiblePaginator = 0;
  this.lastVisiblePaginator = this.numberOfVisiblePaginators;
}

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
ngDoCheck() {
  this.route.children.length !== 0 ? this.isChildRouteLoaded = true : this.isChildRouteLoaded = false;
}

}
