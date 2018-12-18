import { Component,ViewChild,ViewChildren,QueryList, OnInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, TabHeadingDirective } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-feiyongguanli',
  templateUrl: './feiyongguanli.component.html',
  styleUrls: ['./feiyongguanli.component.scss']
})
export class FeiyongguanliComponent implements OnInit {
  @ViewChildren('pages') pages: QueryList<any>;
  optionsSelect:any;
  model: any;
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
  //以下是页面数据
  outputdata:any={
    idType:'',          //证件类型
    idNo:'',            //证件号
    cuName:'',          //客户名称
    cuNo:'',            //客户号 
    busType:'',         //业务类型
    feeType:'',         //服务费类型


  }
//以下是需要传递到费用收取界面的值
  inputdata:any={
    cuNo:'',            //客户号 
    cuName:'',          //客户名称
    busType:'',         //业务类型
    contNo:'',          //合同编号
    feiyongxinxi:{
      feeType:'',         //费用类型
      payCd:'',           //付费方
      feeFlg:'',          //收取方式
      payOrder:'',        //支付方式
      feeAmt:'',          //费用总额
      feeFlt:'',          //费率
      insAmt:'',          //每期费用金额
      repayAmt:'',        //实际支付金额
      feeTerm:'',         //费用总期数
      ordNm:'' ,           //当前期数
      monAccFlag:0,       //是否月结
    },
    zhanghuxinxi:{
      payName:'',           //付款人名称
      payAcct:'',           //付款银行账户
      payAcna:'',           //付款账户名称
      payAcbk:'',           //付款账户开户行
      reName:'',            //收款人名称
      reAcct:'',            //收款银行账户
      reAcnm:'',            //收款账户名称
      reAcbk:'',            //收款账户开户行
      remarks:'',           //备注
    }
  }
//以下是下拉框需要的数据
idTypes:any=[];
busTypes:any=[];
feeTypes:any=[];



  title=[
    "融资管理",
    "资金管理",
    "费用管理"

  ]
  type_optionsSelect=[
    {value:"1",label:'身份证'},
    {value:"2",label:'统一社会信用代码'},
  ];
  table_head=[
      '序号','证件类型','证件号码','客户号','客户名称','合同编号','业务类型','合同金额','费用类型','支付方式','期数'
      ,'费用总额','付费方','合同签订日期','操作',
  ];
  table_body=[
    { id:1, idType:'证件类型',idNo:'证件号码',cifNo:'客户号',cifName:'客户名称',contNo:'合同编号',busType:'业务类型',appAmt:'合同金额',feeType:'费用类型',feeFlg:'支付方式',feeTerm:'期数',
    feeAmt:'费用总额',payCd:'腾讯科技股份有限公司',signTimestamp:"合同签订日期",},
   
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
