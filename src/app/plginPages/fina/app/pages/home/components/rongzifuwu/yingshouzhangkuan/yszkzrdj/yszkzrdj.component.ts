import { Component,ViewChild, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-yszkzrdj',
  templateUrl: './yszkzrdj.component.html',
  styleUrls: ['./yszkzrdj.component.scss']
})
export class YszkzrdjComponent implements OnInit {
  
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @ViewChildren('pages') pages: QueryList<any>;

  REC_STA=[
    {label:"应收账款状态",disabled:"disabled"},
    {label:"待转让",value:"0"},
    {label:"转让生效",value:"1"},
    {label:"失效",value:"2"}
  ]
zrdj={
  cuNo:"",
  cuName:"",
  authAppNo:"",
  recSta:"",
}

title = [
  "融资管理",
  "应收账款管理",
  "应收账款转让登记" 
]

  /* 分页显示使用的数据 */
  activePage = 1;
  itemsPerPage = 6;//每页显示条数
  paginators: Array<any> = [];
  numberOfPaginators: number;
  lastVisibleIndex: number = this.itemsPerPage;
  firstVisibleIndex = 1;
  numberOfVisiblePaginators = 10;
  firstVisiblePaginator = 0;
  lastVisiblePaginator = this.numberOfVisiblePaginators;

  tableData = [/* 表数据 */
    { id:1, busName:"北京名品汽车轮胎生产商", busCoun:"JC20181001-01", busType:"商业发票", busNo:"FP2018001", billAmt:"CNY300,000,000.00", busRecei:"CNY280,000,000.00", billDate:"2018-09-29", endDate:"2019-01-11", recSta:"待转让", regInfAgr:"待登记"},
    { id:2, busName:"北京名品汽车轮胎生产商", busCoun:"JC20181001-01", busType:"商业发票", busNo:"FP2018001", billAmt:"CNY300,000,000.00", busRecei:"CNY280,000,000.00", billDate:"2018-09-29", endDate:"2019-01-11", recSta:"待转让", regInfAgr:"待登记"},
    { id:3, busName:"北京名品汽车轮胎生产商", busCoun:"JC20181001-01", busType:"商业发票", busNo:"FP2018001", billAmt:"CNY300,000,000.00", busRecei:"CNY280,000,000.00", billDate:"2018-09-29", endDate:"2019-01-11", recSta:"待转让", regInfAgr:"待登记"},
    { id:4, busName:"北京名品汽车轮胎生产商", busCoun:"JC20181001-01", busType:"商业发票", busNo:"FP2018001", billAmt:"CNY300,000,000.00", busRecei:"CNY280,000,000.00", billDate:"2018-09-29", endDate:"2019-01-11", recSta:"待转让", regInfAgr:"待登记"},
    { id:5, busName:"北京名品汽车轮胎生产商", busCoun:"JC20181001-01", busType:"商业发票", busNo:"FP2018001", billAmt:"CNY300,000,000.00", busRecei:"CNY280,000,000.00", billDate:"2018-09-29", endDate:"2019-01-11", recSta:"待转让", regInfAgr:"待登记"},
    { id:6, busName:"北京名品汽车轮胎生产商", busCoun:"JC20181001-01", busType:"商业发票", busNo:"FP2018001", billAmt:"CNY300,000,000.00", busRecei:"CNY280,000,000.00", billDate:"2018-09-29", endDate:"2019-01-11", recSta:"待转让", regInfAgr:"待登记"},
    { id:7, busName:"北京名品汽车轮胎生产商", busCoun:"JC20181001-01", busType:"商业发票", busNo:"FP2018001", billAmt:"CNY300,000,000.00", busRecei:"CNY280,000,000.00", billDate:"2018-09-29", endDate:"2019-01-11", recSta:"待转让", regInfAgr:"待登记"},
    { id:8, busName:"北京名品汽车轮胎生产商", busCoun:"JC20181001-01", busType:"商业发票", busNo:"FP2018001", billAmt:"CNY300,000,000.00", busRecei:"CNY280,000,000.00", billDate:"2018-09-29", endDate:"2019-01-11", recSta:"待转让", regInfAgr:"待登记"}
  ];
  
  constructor() { }

  ngOnInit() {/* 初始化动态赋值与显示 */
    if (this.tableData.length % this.itemsPerPage === 0) {
      this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage);
    } else {
      this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage + 1);
    }
    for (let i = 1; i <= this.numberOfPaginators; i++) {
      this.paginators.push(i);
    }
  }

  changePage(event: any) {/* 更改页面 */
    if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
      this.activePage = +event.target.text;
      this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
      this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }
  }
  previousPage() {/* 上一页 */
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
  nextPage() {/* 下一页 */
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
  firstPage() {/* 首页 */
    this.activePage = 1;
    this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
    this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    this.firstVisiblePaginator = 0;
    this.lastVisiblePaginator = this.numberOfVisiblePaginators;
  }
  lastPage() {/* 尾页 */
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
  public myDatePickerOptions: IMyOptions = {};

  /*全选 */
  qx_btn=false;//默认未选中
  check_arr=new Array(this.tableData.length)//根据tableDate的长度创建一个空数组,绑定到html页面,把复选框对象赋值进去(页面没显示的数据不会被赋值,数组内该值为空)

  quanXuan(){
    setTimeout(() => {//延迟加载,避免延迟造成异常选中
      for (let i = 0 ; i < this.check_arr.length ; i++) {//使用循环的方式让每个复选框的状态等于全选按钮
        this.check_arr[i] = this.qx_btn;
     }
    });
  }
}