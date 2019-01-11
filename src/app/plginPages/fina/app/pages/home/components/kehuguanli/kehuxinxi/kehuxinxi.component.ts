import { Component, OnInit, ViewChildren, QueryList, ViewChild, OnChanges } from '@angular/core';
import { ParamsService } from './../../../../../params.service'
import { ModalDirective } from 'ng-uikit-pro-standard';
import { GradeService } from './../../../../../grade.service'

@Component({
  selector: 'app-kehuxinxi',
  templateUrl: './kehuxinxi.component.html',
  styleUrls: ['./kehuxinxi.component.scss']
})
export class KehuxinxiComponent implements OnInit {
  @ViewChildren('pages') pages: QueryList<any>;
  @ViewChild('demoBasic') demoBasic: ModalDirective;
  @ViewChild('newDemoBasic') newDemoBasic: ModalDirective;
  dfSteps = {
    active: 0,
    options: [
      {
        title: "步骤1",
        name: "填写客户信息"
      },
      {
        title: "步骤2",
        name: "尽调资料上传"
      },
      {
        title: "步骤3",
        name: "资料审核"
      },
      {
        title: "步骤4",
        name: "线下尽调"
      },
      {
        title: "步骤5",
        name: "审贷会"
      },
      {
        title: "步骤6",
        name: "授信合同签署"
      }
    ]
  }
  testdataHandler(event: any) {
    this.cuNo = event.cuNo
    this.personPage = event.personPage
  }
  cuNo: any
  personPage: any
  sfs: string;
  title = [//当前页面位置
    "客户管理",
    "客户信息"
  ]
  radioModel = 'zhxx'
  //查询条件值绑定
  client: any = {
    cuName: '',
    idNo: '',
    idType: '',
  }
  //查询地址和条件的拼接
  paths = "";
  search(): void {
    try {

      this.paths = '&cuName=' + this.client.cuName + '&idNo=' + this.client.idNo + '&idType=' + this.client.idType;
    } catch (error) {

      console.log(error)
    }
    this.activePage = 1;
    this.requestTableData();
  }

  //重置
  oncz(): void {
    this.client = {
      cuName: '',
      idNo: '',
      idType: '',
    }
    this.search();
  }
  //通过下拉框的值判断下拉框的Label
  getLabel(value: any, select: Array<any>): any {
    for (var p in select) {
      if (select[p]['value'] == value) {
        return select[p]['label']
      }
    }
  }
  //请求下拉框数据
  idTypes: any
  requestselectData() {
    this.isAjax = true
    this._http.get('/fina/dict/dictListList?ids=ID_TYPE', (e) => {
      this.isAjax = false
      this.idTypes = e.data[0].data
      // for(var i=0;i<this.idTypes.length;i++){
      //   this.idTypes[i].value=(i+1).toString()
      // }
    }, () => {
      this.isAjax = false
    }
    )
  }


  theTotalNumberOfEntries = 0;
  tableData = []

  ////监听addUser界面的cuNo是否改变
  ngOnChanges(it: any) {

  }
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
  lastPage() {
    this.activePage = this.numberOfPaginators;
    this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
    this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    this.requestTableData();

    if (this.numberOfPaginators % this.numberOfVisiblePaginators === 0) {
      this.firstVisiblePaginator = this.numberOfPaginators - this.numberOfVisiblePaginators;
      this.lastVisiblePaginator = this.numberOfPaginators;
    } else {
      this.lastVisiblePaginator = this.numberOfPaginators;
      this.firstVisiblePaginator = this.lastVisiblePaginator - (this.numberOfPaginators % this.numberOfVisiblePaginators);
    }
  }

  demoBasicShow() {
    this.demoBasic.show();
  }
  qx_btn = false;
  check_arr = new Array(this.tableData.length)

  quanXuan() {//全选
    setTimeout(() => {
      for (let i = 0; i < this.check_arr.length; i++) {
        this.check_arr[i] = this.qx_btn;
      }
    });
  }
  del() {
    for (let i = 0; i < this.check_arr.length; i++) {
      if (this.check_arr[i]) {
        alert("第" + i + "个复选框被选中了");
      }
    }
  }
  _http: any;
  isAjax = false;
  constructor(public params: ParamsService, public grande: GradeService) {
    this._http = params._http;
  }

  requestTableData() {
    this.isAjax = true;
    this._http.get('/fina/custom/list?pageNum=' + this.activePage + '&pageSize=' + this.itemsPerPage + this.paths, (e) => {
      this.isAjax = false;
      this.tableData = e.data.pb.list
      if (!!this.tableData) {
        for (var i = 0; i < this.tableData.length; i++) {
          for (var p in this.tableData[i]) {
            if (p.search('Date') != -1 || p.search('Time') != -1) {
              this.tableData[i][p] = new Date(this.tableData[i][p])['Format']('yyyy-MM-dd')
            }
            if (p == 'idType') {
              this.tableData[i].idType = this.getLabel(this.tableData[i][p], this.idTypes)
            }
          }
        }
        console.log(this.tableData)
        this.theTotalNumberOfEntries = e.data.pb.totalRecord;
        //  console.log("表数据",this.tableData)
        if (this.theTotalNumberOfEntries % this.itemsPerPage === 0) {
          this.numberOfPaginators = Math.floor(this.theTotalNumberOfEntries / this.itemsPerPage);
        } else {
          this.numberOfPaginators = Math.floor(this.theTotalNumberOfEntries / this.itemsPerPage + 1);
        }
        this.paginators = [];
        for (let i = 1; i <= this.numberOfPaginators; i++) {
          this.paginators.push(i);
        }
      }


    }, () => {
      this.isAjax = false;

    })
  }
  transmit(id: number) {
    this.cuNo = this.tableData[id].cuNo
    this.personPage = 'oldUser'
    this.demoBasic.show()
  }
  ngOnInit() {
    this.requestTableData();
    this.requestselectData();
    if(this.grande.user.data.cardInsert){
      this.cuNo = this.grande.user.data.cardInsert;
    }
    if(this.grande.vals==5){
      var step = this.grande.user.data.steps;
      if(step){
        this.dfSteps.active = step;
        }
    }

  }
  newDemoBasicShow() {
    this.newDemoBasic.show();
  }


}
