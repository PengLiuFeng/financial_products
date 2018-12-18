import { Component, ViewChild, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, turnState } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-zjzh',
  templateUrl: './zjzh.component.html',
  styleUrls: ['./zjzh.component.scss']
})
export class ZjzhComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @ViewChildren('pages') pages: QueryList<any>;

  title=[
    "融资管理",
    "资金管理",
    "资金账户"
  ]
  idType: any;

  constructor() { }
  zjlx = [
    { label: "证件类型", disabled: "disabled" }
  ]

  tableData = [/* 表数据 */

    { id: 1, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 2, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 3, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 4, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 5, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 6, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 7, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 8, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 9, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 10, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 11, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 12, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 13, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 14, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 15, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" },
    { id: 16, accTno: "6288 088 9001 121", acctName: "鸿雁科技", acctOpnbk: "中国工商银行上地分行", acctType: "单位活期存款账户", acctSta: "正常", acctBal: "CNY10,000,000.00", contNo: "BL2018100100001" }
  ];


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
  qx_btn = false;
  check_arr = new Array(this.tableData.length)

  quanXuan() {
    setTimeout(() => {
      for (let i = 0; i < this.check_arr.length; i++) {
        this.check_arr[i] = this.qx_btn;
      }
    });
  }

}
