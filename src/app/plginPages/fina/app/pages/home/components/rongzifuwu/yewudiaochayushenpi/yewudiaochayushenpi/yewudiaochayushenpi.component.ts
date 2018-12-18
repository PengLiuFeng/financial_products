import { Component,ViewChild, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../../params.service'
@Component({
  selector: 'app-yewudiaochayushenpi',
  templateUrl: './yewudiaochayushenpi.component.html',
  styleUrls: ['./yewudiaochayushenpi.component.scss']
})
export class YewudiaochayushenpiComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @ViewChildren('pages') pages: QueryList<any>;
  public myDatePickerOptions: IMyOptions =this.params.mdb_es;
  /*初始加载审批详情页面 */
  radioModel="spxq"

  ywdcysp={
    cuNo:"",  //客户号
    cuName:"",  //客户名称
    authAppNoBeg:"", //授信协议编号(起始)
    authAppNoEnd:"",  //授信协议编号(结束)
    busType:"", //业务类型
    authAppSta:"",  //申请状态
    auDateBeg:"", //融资申请日期(起始)
    auDateEnd:""  //融资申请日期(结束)
  }

  BUS_TYPE=[
    {label:"授信金融产品",disabled:"disabled"}
  ]
  AUTH_APP_STA=[
    {label:"分项授信类型",disabled:"disabled"}
  ]
  isShow:boolean;

  //文本框的model
  cifName:any;
  authId:any;
  authAppNo:any;

  //下拉菜单的model
  cifNo:any;
  finproNo:any;
  authSplitType:any;

  //日期的model
  begDate:any;
  endDate:any;

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
    { id: 1,cuNo:"20071001-091", cuName:"鸿雁轮胎原材料销售商", busType:"有追索公开保理", authAppNo:"BL20180101-001", auAmt:"800,000,000.00", auDate:"2018-10-20", termType:"月", term:"6", authAppSta:"审批中"},
    { id: 2,cuNo:"20071001-091", cuName:"鸿雁轮胎原材料销售商", busType:"有追索公开保理", authAppNo:"BL20180101-001", auAmt:"800,000,000.00", auDate:"2018-10-20", termType:"月", term:"6", authAppSta:"审批中"},
    { id: 3,cuNo:"20071001-091", cuName:"鸿雁轮胎原材料销售商", busType:"有追索公开保理", authAppNo:"BL20180101-001", auAmt:"800,000,000.00", auDate:"2018-10-20", termType:"月", term:"6", authAppSta:"审批中"},
    { id: 4,cuNo:"20071001-091", cuName:"鸿雁轮胎原材料销售商", busType:"有追索公开保理", authAppNo:"BL20180101-001", auAmt:"800,000,000.00", auDate:"2018-10-20", termType:"月", term:"6", authAppSta:"审批中"},
    { id: 5,cuNo:"20071001-091", cuName:"鸿雁轮胎原材料销售商", busType:"有追索公开保理", authAppNo:"BL20180101-001", auAmt:"800,000,000.00", auDate:"2018-10-20", termType:"月", term:"6", authAppSta:"审批中"},
    { id: 6,cuNo:"20071001-091", cuName:"鸿雁轮胎原材料销售商", busType:"有追索公开保理", authAppNo:"BL20180101-001", auAmt:"800,000,000.00", auDate:"2018-10-20", termType:"月", term:"6", authAppSta:"审批中"},
    { id: 7,cuNo:"20071001-091", cuName:"鸿雁轮胎原材料销售商", busType:"有追索公开保理", authAppNo:"BL20180101-001", auAmt:"800,000,000.00", auDate:"2018-10-20", termType:"月", term:"6", authAppSta:"审批中"},
    { id: 8,cuNo:"20071001-091", cuName:"鸿雁轮胎原材料销售商", busType:"有追索公开保理", authAppNo:"BL20180101-001", auAmt:"800,000,000.00", auDate:"2018-10-20", termType:"月", term:"6", authAppSta:"审批中"},
    { id: 9,cuNo:"20071001-091", cuName:"鸿雁轮胎原材料销售商", busType:"有追索公开保理", authAppNo:"BL20180101-001", auAmt:"800,000,000.00", auDate:"2018-10-20", termType:"月", term:"6", authAppSta:"审批中"},
    { id: 10,cuNo:"20071001-091", cuName:"鸿雁轮胎原材料销售商", busType:"有追索公开保理", authAppNo:"BL20180101-001", auAmt:"800,000,000.00", auDate:"2018-10-20", termType:"月", term:"6", authAppSta:"审批中"},
    { id: 11,cuNo:"20071001-091", cuName:"鸿雁轮胎原材料销售商", busType:"有追索公开保理", authAppNo:"BL20180101-001", auAmt:"800,000,000.00", auDate:"2018-10-20", termType:"月", term:"6", authAppSta:"审批中"},

  ];
  
  constructor(public params:ParamsService) { }

  title = [
    "融资管理",
    "业务调查与审批" 
  ]

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

  /*全选的操作 */
  qx_btn=false;
  check_arr=new Array(this.tableData.length)

  quanXuan(){//全选
    setTimeout(() => {
      for (let i = 0 ; i < this.check_arr.length ; i++) {
        this.check_arr[i] = this.qx_btn;
     }
    });
  }


}
