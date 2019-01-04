import { Component, OnInit ,ViewChildren,QueryList } from '@angular/core';

@Component({
  selector: 'app-daikuanhuankuan',
  templateUrl: './daikuanhuankuan.component.html',
  styleUrls: ['./daikuanhuankuan.component.scss']
})
export class DaikuanhuankuanComponent implements OnInit {
  @ViewChildren('pages') pages: QueryList<any>;
  constructor() { }
//查询条件值绑定
client: any = {
  cuName: '',
  cuNo:'',
  busType:'',       //业务类型
  contNo:'',        //合同编号
  loanSta:'',       //合同状态
  startTimestamp: '',   //合同其实日期
  dueTimestamp: '',         //合同到期日
}
//下拉框
busTypes=[];      //业务类型
loanStas=[];      //合同状态
title = [//当前页面位置
  "融资管理",
  "资金管理",
  "贷款还款"
]
theTotalNumberOfEntries = 0;
  tableData = []
  ngOnInit() {
  }
  requestTableData(){};           //请求新的数据
  //分页数据
  pageTable = [];
  activePage = 1;
  itemsPerPage = 10;//每页显示条数
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
      this.requestTableData();
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
    this.requestTableData();
  }
  /**
     * 上一页
     */
  previousPage() {
    if (this.pages.first.nativeElement.classList.contains('active')) {
      if ((this.lastVisiblePaginator - this.firstVisiblePaginator) === this.numberOfVisiblePaginators) {
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
    this.requestTableData();
  }

  /**
     * 点击首页
     */
  firstPage() {
    this.activePage = 1;
    this.requestTableData();
    this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
    this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    this.firstVisiblePaginator = 0;
    this.lastVisiblePaginator = this.numberOfVisiblePaginators;
  }
  /**
     * 点击尾页
     */
}
