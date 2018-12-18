import { Component,ViewChild,ViewChildren,QueryList, OnInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, TabHeadingDirective } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-rongzifafang',
  templateUrl: './rongzifafang.component.html',
  styleUrls: ['./rongzifafang.component.scss']
})

export class RongzifafangComponent implements OnInit {
  @ViewChildren('pages') pages: QueryList<any>;
  optionsSelect:any;
  model: any;
  modell: any;
  allcheck:boolean=false;
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
  //融资发放的搜索框内容
  outputdata:any={
    cuNo:'',          //客户号
    cuName:'',        //客户名称
    contNo:'',        //合同编号
    busType:'',       //业务类型
    signTimestamp:'',  //合同签署日期
    dueTimestamp:'',  //合同到期日
  }
  //传入到子页面中的数据
  inputdata:any={
    cuNo:'',          //客户号
    cuName:'',        //客户名称
    contNo:'',        //合同编号
    signTimestamp:'',  //合同签署日期
    // jibenxinxi:{
    //   contNo:'',        //合同编号
    //   authAmt:'',        //总授信额度
    //   authSplitType:'',   //分项授信额度类型
    //   recycle:'',         //额度使用方式（是否循环，1循环 0不循环）
    //   sauthAmt:'',         //分项授信额度
    //   authSts:'',         //授信状态
    //   begTimestamp:'' ,    //分享授信起始日期
    //   endTimestamp:'',     //分项授信结束日期
    // }
    // yingshouzhuangkuanmingxi:[

    // ],
    // rongzixinxi:{

    // }
  }

  type_optionsSelect=[
    {value:"1",label:'身份证'},
    {value:"2",label:'统一社会信用代码'},
  ];

  title = [
    "融资管理",
    "资金管理",
    "融资发放"

  ]
  table_head=[
      '序号','check','客户号','客户名称','合同编号','业务类型','实际融资金额','期限类型','期限','利率'
      ,'合同起始日期','合同到期日','发放状态','发放时间','操作',
  ];
  table_body=[
    { id:1, cuNo:'客户号',cuName:'客户名称',contNo:'合同编号',busType:'业务类型',actualAmt:'实际融资金额',termType:'期限类型',term:'期限',auRate:'利率',
    startTimestamp:'合同起始日期',dueTimestamp:'合同到期日',loanIs:'发放状态',begTimestamp:'发放时间'},
    
  ]
  activePage = 1;
  itemsPerPage = 6;//每页显示条数
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
