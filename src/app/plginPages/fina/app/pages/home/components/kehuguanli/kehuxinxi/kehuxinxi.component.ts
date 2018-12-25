import { Component, OnInit, ViewChildren, QueryList, ViewChild, OnChanges } from '@angular/core';
import { ParamsService } from './../../../../../params.service'
import { ModalDirective } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-kehuxinxi',
  templateUrl: './kehuxinxi.component.html',
  styleUrls: ['./kehuxinxi.component.scss']
})
export class KehuxinxiComponent implements OnInit {
  @ViewChildren('pages') pages: QueryList<any>;
  @ViewChild('demoBasic') demoBasic: ModalDirective;
  @ViewChild('newDemoBasic') newDemoBasic: ModalDirective;
  
  testdataHandler(event:any){
    this.cuNo=event.cuNo
    this.personPage=event.personPage
  }
  cuNo:any
  personPage:any
  sfs: string;
  title = [//当前页面位置
    "客户管理",
    "客户信息"
  ]
  //查询条件值绑定
  client:any={
    cuName:'',
    idNo:'',
    idType:'',
  }
  //查询地址和条件的拼接
  paths="";
  search():void{
    try {
      
      this.paths='&cuName='+this.client.cuName+'&idNo='+this.client.idNo+'&idType='+this.client.idType;
    } catch (error) {
      
      console.log(error)
    }
    this.requestTableData();
  }
  
  //重置
  oncz(){
    this.client={
      cuName:'',
      idNo:'',
      idType:'',
    }
  }
  //请求下拉框数据
  idTypes:any
  requestselectData() {
    this.isAjax = true
    this._http.get('/fina/dict/dictListList?ids=ID_TYPE', (e) => {
      this.isAjax = false
      this.idTypes = e.data[0].data
      for(var i=0;i<this.idTypes.length;i++){
        this.idTypes[i].value=(i+1).toString()
      }
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
  constructor(public params: ParamsService) {
    this._http = params._http;
  }
  requestTableData() {
    this.isAjax = true;
    this._http.get('/fina/custom/list?pageNum=' + this.activePage + '&pageSize=' + this.itemsPerPage+this.paths, (e) => {
      this.isAjax = false;
      this.tableData = e.data.pb.list
      console.log(e)
      console.log(this.tableData);
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

    }, () => {
      this.isAjax = false;

    })
  }
  transmit(id: number) {
    this.cuNo = this.tableData[id].cuNo
    this.personPage='oldUser'
    this.demoBasic.show()
  }
  ngOnInit() {
    this.requestTableData();
    this.requestselectData()
  }
  newDemoBasicShow() {
    this.newDemoBasic.show();
  }
  
  
}
