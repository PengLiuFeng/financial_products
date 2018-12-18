import { Component, ViewChild, ViewChildren, QueryList, OnInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, TabHeadingDirective } from 'ng-uikit-pro-standard';
import { SelectItem } from 'primeng/api';
import { ModalDirective } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-yewuxianpeizhi',
  templateUrl: './yewuxianpeizhi.component.html',
  styleUrls: ['./yewuxianpeizhi.component.scss']
})
export class YewuxianpeizhiComponent implements OnInit {
  @ViewChild('basicModal') basicModal: ModalDirective;

  @ViewChildren('pages') pages: QueryList<any>;

  title = [
    "产品工厂",
    "业务线配置"
  ]

  optionsSelect: any;
  model: any;
  modell: any;
  rcwin: boolean = false;
  xzzhichanfang: boolean;
  xzzhijinfang: boolean;

  newpage: string = 'zichanfang';

  output: any = {
    page: '',
    neworold: '',
  };   //向新增页面跳转传递字段
  // 以下是资产方界面数据
  assCunms: Array<any> = [
    { value: '301001', label: '保理池融资' },
    { value: '301002', label: '仓单质押融资' },
    { value: '301003', label: '预付款融资' },
    { value: '301004', label: '现货融资\保兑仓' },

  ];         //金融名称集合
  assCunm: any;                  //金融名称

  zichanfang_table_head = [
    '序号', '资产方编号', '业务线名称', '融资类型', '交易模型', '服务费定价', '服务费结算方式', '使用对象', '操作',
  ];
  zichanfang_table_body = [
    { id: 1, assCunm: '身份证', busName: '999999999', finType: 'Pldste456', busModle: '张三', feePatype: 'shiyongduixiang', user: '小微企业' },
  ];
  zhichanfangdata = {
    busName: '', //业务线名称
    assCuno: '', //资产方代码
    assCunm: '', //资产方名称
    finTypes: [

    ],           //融资类型
    finType: '',     //融资类型
    busModles: [], //交易模型
    busModle: '',   //交易模型
    feePatypes: [], //服务费结算方式
    feePatype: '',   //服务费结算方式
    users: [],      //使用方
    pmMinamt: '',    //最低融资
    pmMaxamt: '',     //最高融资
    feeRate: ' ',      //费率
    feeRatypes: [],    //费率类型
    feeRatype: '',     //费率类型

  };

  //以下是资金方数据

  zhijinfangdata = {
    busName: '',  //业务线名称
    pmCores: [], //核心平台
    pmCore: '',   //核心平台
    busModles: [],  //交易模型
    busModle: '',   //交易模型
    feePatypes: [], //服务费结算方式
    feePatype: '',   //服务费结算方式
    minamt: '',    //最低融资
    maxamt: '',     //最高融资
    feeRate: '',    //费率
    feeRatypes: [], //费率类型
    feeRatype: '',   //费率类型
  };

  zijinfang_table_head = [
    '序号', '资金方名称', '业务线名称', '返点定价', '返点结算方式', '操作',
  ];
  zijinfang_table_body = [
    { id: 1, pmCore: '身份证', busName: '999999999',  feePatype: '张三', },
  ];

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
  pageTable = [];
  constructor() { }

  ngOnInit() {
    if (this.zichanfang_table_body.length % this.itemsPerPage === 0) {
      this.numberOfPaginators = Math.floor(this.zichanfang_table_body.length / this.itemsPerPage);
    } else {
      this.numberOfPaginators = Math.floor(this.zichanfang_table_body.length / this.itemsPerPage + 1);
    }
    for (let i = 1; i <= this.numberOfPaginators; i++) {
      this.paginators.push(i);
    }


    if (this.zijinfang_table_body.length % this.itemsPerPage === 0) {
      this.numberOfPaginators = Math.floor(this.zijinfang_table_body.length / this.itemsPerPage);
    } else {
      this.numberOfPaginators = Math.floor(this.zijinfang_table_body.length / this.itemsPerPage + 1);
    }
    for (let i = 1; i <= this.numberOfPaginators; i++) {
      this.paginators.push(i);
    }
  }
  search(): void {
    $("#formsearch").submit();
  }
  allCheck(): void {
  }
  shenqingxiangqing(date: any): void {

  }
  gaibianpage(data: string) {
    if (data == 'zichanfang')
      this.newpage = 'zichanfang';
    else
      this.newpage = 'zijinfang';
  }
  remove(id: any, data: string) {
    if (data == 'zichanfang') {
      this.zichanfang_table_body.splice(id, 1);
    } else {
      this.zijinfang_table_body.splice(id, 1);
    }
  }
  
  newxinzengyewuxian(data: string) {

    if (data == 'zichanfang') {
      this.xzzhichanfang = true;
      this.output.page = data;
      this.output.neworold = 'new'
    }
    if (data == 'zijinfang') {
      this.xzzhijinfang = true;
      this.output.page = data;
      this.output.neworold = 'new'
    }
    this.basicModal.show();
   
  }
  oldxinzengyewuxian(data: string) {
    if (data == 'zichanfang') {

      this.output.page = data;
      this.output.neworold = 'old';
      this.xzzhichanfang = true;
    }
    if (data == 'zijinfang') {

      this.output.page = data;
      this.output.neworold = "old";
      this.xzzhijinfang = true;
    }

  }
  nulltishi(){
    if(this.assCunm==null){
      alert('您必须先选择资产方才能为其添加新的业务线');
    }
  }
}


