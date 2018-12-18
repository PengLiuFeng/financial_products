import { Component,ViewChild,ViewChildren,QueryList, OnInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, TabHeadingDirective } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-yujinglishi',
  templateUrl: './yujinglishi.component.html',
  styleUrls: ['./yujinglishi.component.scss']
})
export class YujinglishiComponent implements OnInit {
  @ViewChildren('pages') pages: QueryList<any>;
  model: any;
  optionsSelect:any;
  modell: any;
  check:boolean=false;
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
      '序号','客户号','客户名称','业务类型','预警名称','预警类型','授信协议编号','合同编号','授信到期日期','合同到期日期','应收账款到期日','预警产生时间',
  ];
  table_body=[
    { id:1, idType:'身份证',idNo:'999999999',cifNo:'Pldste456',cifName:'张三',busType:'保理',feeType:'手续费',feeFlg:'一次性收取',feeTerm:'6',
    feeAmt:'10000',repayAmt:'3000',payCd:'腾讯科技股份有限公司',ordNm:'2018-3-2',feeSta:'待支付'},
    { id:2,idType:'身份证',idNo:'999999999',cifNo:'Pldste456',cifName:'张三',busType:'保理',feeType:'手续费',feeFlg:'一次性收取',feeTerm:'6',
    feeAmt:'10000',repayAmt:'3000',payCd:'腾讯科技股份有限公司',ordNm:'2018-3-2',feeSta:'待支付'},
    { id:3, idType:'身份证',idNo:'999999999',cifNo:'Pldste456',cifName:'张三',busType:'保理',feeType:'手续费',feeFlg:'一次性收取',feeTerm:'6',
    feeAmt:'10000',repayAmt:'3000',payCd:'腾讯科技股份有限公司',ordNm:'2018-3-2',feeSta:'待支付'},
    { id:4, idType:'身份证',idNo:'999999999',cifNo:'Pldste456',cifName:'张三',busType:'保理',feeType:'手续费',feeFlg:'一次性收取',feeTerm:'6',
    feeAmt:'10000',repayAmt:'3000',payCd:'腾讯科技股份有限公司',ordNm:'2018-3-2',feeSta:'待支付'},
    { id:5, idType:'身份证',idNo:'999999999',cifNo:'Pldste456',cifName:'张三',busType:'保理',feeType:'手续费',feeFlg:'一次性收取',feeTerm:'6',
    feeAmt:'10000',repayAmt:'3000',payCd:'腾讯科技股份有限公司',ordNm:'2018-3-2',feeSta:'待支付'},
    { id:6,idType:'身份证',idNo:'999999999',cifNo:'Pldste456',cifName:'张三',busType:'保理',feeType:'手续费',feeFlg:'一次性收取',feeTerm:'6',
    feeAmt:'10000',repayAmt:'3000',payCd:'腾讯科技股份有限公司',ordNm:'2018-3-2',feeSta:'待支付'},
    { id:7,idType:'身份证',idNo:'999999999',cifNo:'Pldste456',cifName:'张三',busType:'保理',feeType:'手续费',feeFlg:'一次性收取',feeTerm:'6',
    feeAmt:'10000',repayAmt:'3000',payCd:'腾讯科技股份有限公司',ordNm:'2018-3-2',feeSta:'待支付'},
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
  }
 search():void {
    $("#formsearch").submit();
  }
  allCheck() : void{
     if(this.check==false)
      this.check=true;
      else 
      this.check=false;
  }
  shenqingxiangqing(date:any):void{
      
  }

}
