import { Component, OnInit,ViewChildren, QueryList,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamsService } from '../../../../../../params.service';
import { ModalDirective } from 'ng-uikit-pro-standard';


    @Component({
      selector: 'app-yingshouzhangkuanmingxi',
      templateUrl: './yingshouzhangkuanmingxi.component.html',
      styleUrls: ['./yingshouzhangkuanmingxi.component.scss']
    })
export class YingshouzhangkuanmingxiComponent implements OnInit {

  _http: any;
  isAjax = false;
  @ViewChildren('pages') pages: QueryList<any>;
  @ViewChild('demoBasic') demoBasic: ModalDirective;
  client:any={
    idNo:'',
    cuName:'',
    authAppNo:'',
    idType:'',
    recSta:''
  }

/*当前页面位置 */

title = [
  "融资管理",
  "应收账款管理",
  "应收账款明细维护" 
]


//   查询
  paths="";
  search():void{
    try {
      
      this.paths='&idNo='+this.client.idNo+'&v='+this.client.cuName+'&idType='+this.client.idType+'&authAppNo='+this.client.authAppNo+'&recSta='+this.client.recSta;
    } catch (error) {
      
      console.log(error)
    }
    this.requestTableData();
  }

  //请求下拉框数据
  idTypes:any;
  recStas:any;
  requestselectData() {
    this.isAjax = true
    this._http.get('/fina/dict/dictListList?ids=ID_TYPE,REC_STA', (e) => {
      this.isAjax = false
      this.idTypes = e.data[0].data
      this.recStas=e.data[1].data
      for(var i=0;i<this.idTypes.length;i++){
        this.idTypes[i].value=(i+1).toString()
      }
      for(var i=0;i<this.recStas.length;i++){
        this.recStas[i].value=(i+1).toString()
      }
    }, () => {
      this.isAjax = false
    }
    )
  }

oncz(e):void{
  this.client={
    idNo:'',
    cuName:'',
    authAppNo:'',
    idType:'',
    recSta:''
  }
  this.paths='';
  this.requestTableData();
}
constructor(
  private route: ActivatedRoute,
  public params: ParamsService
  
) { this._http = params._http;
    this.qx_btn=false;
}

ngOnInit() {
  this.requestTableData();
  this.requestselectData();
}
  tableData = [];
  activePage = 1;
  itemsPerPage = 6;//每页显示条数
  paginators: Array<any> = [];
  numberOfPaginators: number;
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
  qx_btn :boolean;
  check_arr = new Array(this.tableData.length)
  
  quanXuan() {//全选
    this.qx_btn=!this.qx_btn;
    setTimeout(() => {
      for (let i = 0; i < this.tableData.length; i++) {
        this.check_arr[i] = this.qx_btn;
      }
      
    });
  }
  del() {
    for (let i = 0; i < this.check_arr.length; i++) {
      if (this.check_arr[i]) {
        var j =i+1;
        alert("第" + j + "个复选框被选中了");
      }
    }
  }


theTotalNumberOfEntries = 0;

requestTableData() {
  this.isAjax = true;
  this._http.get('/fina/receive/list?pageNum=' + this.activePage + '&pageSize=' + this.itemsPerPage+this.paths, (e) => {
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
}
