import { Component,ViewChild, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-jkftj',
  templateUrl: './jkftj.component.html',
  styleUrls: ['./jkftj.component.scss']
})
export class JkftjComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @ViewChildren('pages') pages: QueryList<any>;

  authSplitType:any;

  ywlx=[
    {label:"业务类型",disabled:"disabled"}
  ]
  constructor() { }

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
    { id: 1,cifNo:"10000828",cifName:"对公客户",maxhAmt:"CNY2,800,000.00" ,finproNo:"保理", authSplitType:"应收账款转让", authAmt:"CNY2,800,000.00", authBal:"CNY2,800,000.00", resycle:"循环", termMon:"12", begDate:"2017-06-31", endDate:"2018-06-31"},
    { id: 2,cifNo:"10000828",cifName:"对公客户",maxhAmt:"CNY2,800,000.00" ,finproNo:"保理", authSplitType:"应收账款转让", authAmt:"CNY2,800,000.00", authBal:"CNY2,800,000.00", resycle:"循环", termMon:"12", begDate:"2017-06-31", endDate:"2018-06-31"},
    { id: 3,cifNo:"10000828",cifName:"对公客户",maxhAmt:"CNY2,800,000.00" ,finproNo:"保理", authSplitType:"应收账款转让", authAmt:"CNY2,800,000.00", authBal:"CNY2,800,000.00", resycle:"循环", termMon:"12", begDate:"2017-06-31", endDate:"2018-06-31"},
    { id: 4,cifNo:"10000828",cifName:"对公客户",maxhAmt:"CNY2,800,000.00" ,finproNo:"保理", authSplitType:"应收账款转让", authAmt:"CNY2,800,000.00", authBal:"CNY2,800,000.00", resycle:"循环", termMon:"12", begDate:"2017-06-31", endDate:"2018-06-31"},
    { id: 5,cifNo:"10000828",cifName:"对公客户",maxhAmt:"CNY2,800,000.00" ,finproNo:"保理", authSplitType:"应收账款转让", authAmt:"CNY2,800,000.00", authBal:"CNY2,800,000.00", resycle:"循环", termMon:"12", begDate:"2017-06-31", endDate:"2018-06-31"},
    { id: 6,cifNo:"10000828",cifName:"对公客户",maxhAmt:"CNY2,800,000.00" ,finproNo:"保理", authSplitType:"应收账款转让", authAmt:"CNY2,800,000.00", authBal:"CNY2,800,000.00", resycle:"循环", termMon:"12", begDate:"2017-06-31", endDate:"2018-06-31"},
    { id: 7,cifNo:"10000828",cifName:"对公客户",maxhAmt:"CNY2,800,000.00" ,finproNo:"保理", authSplitType:"应收账款转让", authAmt:"CNY2,800,000.00", authBal:"CNY2,800,000.00", resycle:"循环", termMon:"12", begDate:"2017-06-31", endDate:"2018-06-31"},
    { id: 8,cifNo:"10000828",cifName:"对公客户",maxhAmt:"CNY2,800,000.00" ,finproNo:"保理", authSplitType:"应收账款转让", authAmt:"CNY2,800,000.00", authBal:"CNY2,800,000.00", resycle:"循环", termMon:"12", begDate:"2017-06-31", endDate:"2018-06-31"}
  ];

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

}
