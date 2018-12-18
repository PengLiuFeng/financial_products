import { Component,ViewChild,ViewChildren,QueryList, OnInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, TabHeadingDirective } from 'ng-uikit-pro-standard';
//融资申请
@Component({
  selector: 'app-rongzishenqing',
  templateUrl: './rongzishenqing.component.html',
  styleUrls: ['./rongzishenqing.component.scss']
})
export class RongzishenqingComponent implements OnInit {
  @ViewChildren('pages') pages: QueryList<any>;
  model: any;
  modell: any;
  check:boolean=false;
  testarray: any;
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
  type_optionsSelect=[
    {value:"1",label:'身份证'},
    {value:"2",label:'统一社会信用代码'},
  ];
  table_head=[
      '序号','checklabel','客户名称','业务类型','授信核准编号','融资申请金额','融资申请日期','融资到期日期','期限类型','融资期限'
      ,'申请状态','操作',
  ];
  table_body=[
    { id:1, CIF_NAME:'peter',BUS_TYPE:'有追索公开保理',AUTH_ID:'Pldste456',AU_AMT:'600,000,000',BEG_DATE:'2018-11-5',END_DATE:'2019-5-5',NUM_TYPE:'月',TERM:'6',AU_STA:'申请中'},
    { id:2, CIF_NAME:'peter',BUS_TYPE:'有追索公开保理',AUTH_ID:'Pldste457',AU_AMT:'600,000,000',BEG_DATE:'2018-11-5',END_DATE:'2019-5-5',NUM_TYPE:'月',TERM:'6',AU_STA:'申请中'},
    { id:3, CIF_NAME:'peter',BUS_TYPE:'有追索公开保理',AUTH_ID:'Pldste458',AU_AMT:'600,000,000',BEG_DATE:'2018-11-5',END_DATE:'2019-5-5',NUM_TYPE:'月',TERM:'6',AU_STA:'申请中'},
    { id:4, CIF_NAME:'peter',BUS_TYPE:'有追索公开保理',AUTH_ID:'Pldste459',AU_AMT:'600,000,000',BEG_DATE:'2018-11-5',END_DATE:'2019-5-5',NUM_TYPE:'月',TERM:'6',AU_STA:'申请中'},
    { id:5, CIF_NAME:'peter',BUS_TYPE:'有追索公开保理',AUTH_ID:'Pldste435',AU_AMT:'600,000,000',BEG_DATE:'2018-11-5',END_DATE:'2019-5-5',NUM_TYPE:'月',TERM:'6',AU_STA:'申请中'},
    { id:6, CIF_NAME:'peter',BUS_TYPE:'有追索公开保理',AUTH_ID:'Pldste425',AU_AMT:'600,000,000',BEG_DATE:'2018-11-5',END_DATE:'2019-5-5',NUM_TYPE:'月',TERM:'6',AU_STA:'申请中'},
    { id:7, CIF_NAME:'peter',BUS_TYPE:'有追索公开保理',AUTH_ID:'Pldste427',AU_AMT:'600,000,000',BEG_DATE:'2018-11-5',END_DATE:'2019-5-5',NUM_TYPE:'月',TERM:'6',AU_STA:'申请中'},
  ]
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
      idType:[],
      idNo:'',
      cifName:'',
      finproNo:[],
      busType:[],
      suSta:[],
      begDate:'',
      endDate:'',
    }
  }
 search():void {
    
  }
  allCheck() : void{
     if(this.check==false)
      this.check=true;
      else 
      this.check=false;
  }
  title=[
    "融资管理",
    "融资申请"
  ]
  shenqingxiangqing(date:any):void{
      
  }
 
}
