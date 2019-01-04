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
  authId='';
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
  reSetModel(){
    this.path='';
    this.ywdcysp={
      cuNo:"",  //客户号
      cuName:"",  //客户名称
      authAppNoBeg:"", //授信协议编号(起始)
      authAppNoEnd:"",  //授信协议编号(结束)
      busType:"", //业务类型
      authAppSta:"",  //申请状态
      auDateBeg:"", //融资申请日期(起始)
      auDateEnd:""  //融资申请日期(结束)
    }
  }


  BUS_TYPE=[]
  AUTH_APP_STA=[]
  isShow:boolean;
  path='';
  //文本框的model
  // cifName:any;
  // authId:any;
  // authAppNo:any;

  // //下拉菜单的model
  // cifNo:any;
  // finproNo:any;
  // authSplitType:any;

  // //日期的model
  // begDate:any;
  // endDate:any;

  /* 分页显示使用的数据 */
  theTotalNumberOfEntries = 0;
  activePage = 1;
  itemsPerPage = 6;//每页显示条数
  paginators: Array<any> = [];
  numberOfPaginators: number;
  lastVisibleIndex: number = this.itemsPerPage;
  firstVisibleIndex = 1;
  numberOfVisiblePaginators = 10;
  firstVisiblePaginator = 0;
  lastVisiblePaginator = this.numberOfVisiblePaginators;

  tableData = [/* 表数据 */];
  queryTableDataWithConditions(){
    this.path = 
      '&cuNo='+this.ywdcysp.cuNo+'&cuName='+this.ywdcysp.cuName+
      '&authAppNoBeg='+this.ywdcysp.authAppNoBeg+'&authAppNoEnd='+this.ywdcysp.authAppNoEnd+
      '&busType='+this.ywdcysp.busType+'&authAppSta='+this.ywdcysp.authAppSta+
      '&auDateBeg='+this.ywdcysp.auDateBeg+'&auDateEnd'+this.ywdcysp.auDateEnd;
    
    if(!!this.ywdcysp.auDateBeg){
      this.path+='&auDateBeg='+(new Date(this.ywdcysp.auDateBeg).getTime());
    }
    if(this.ywdcysp.auDateEnd){
      this.path+='&auDateEnd='+(new Date(this.ywdcysp.auDateEnd).getTime())
    }
    this.activePage = 1;
    this.requestTableData();
   }

  requestTableData(){
    this.isAjax=true;
    this._http.get('/fina/approve/list?pageNum='+this.activePage+'&pageSize='+this.itemsPerPage+this.path,(e)=>{
      this.isAjax=false;
     this.tableData=e.data.pb.list;
     console.log(e)
      this.theTotalNumberOfEntries = e.data.pb.totalRecord;
    //  console.log("表数据",this.tableData)
      if (this.theTotalNumberOfEntries % this.itemsPerPage === 0) {
        this.numberOfPaginators = Math.floor(this.theTotalNumberOfEntries / this.itemsPerPage);
      } else {
        this.numberOfPaginators = Math.floor(this.theTotalNumberOfEntries / this.itemsPerPage + 1);
      }
      this.paginators=[];
      for (let i = 1; i <= this.numberOfPaginators; i++) {
        this.paginators.push(i);
      }
      this.check_arr = new Array(this.tableData.length);
      this.qx_btn=false;
      this.isAjax=false;
     },()=>{
     this.isAjax=false;
   
     })
   }

  reqDdListData(){
    this.isAjax=true; 
      this._http.get('/fina/dict/dictListList?ids=BUS_TYPE,AUTH_APP_STA',(e)=>{
        let it=null;
        for(let i=0;i<e.data.length;i++){
          it=e.data[i];
          if(it.myid=='BUS_TYPE'){
            this.BUS_TYPE=it.data;
          }else if(it.myid=='AUTH_APP_STA'){
            this.AUTH_APP_STA=it.data;
          }
        }
        this.isAjax=false;
      },()=>{
     this.isAjax=false;
     })
   }

  _http:any;
  isAjax=false;
  constructor(public params:ParamsService) {
    this._http=params._http;
   }
  title = [
    "融资管理",
    "业务调查与审批" 
  ]

  ngOnInit() {/* 初始化动态赋值与显示 */
    this.requestTableData();
    this.reqDdListData();
  }

  changePage(event: any) {/* 更改页面 */
    if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
      this.activePage = +event.target.text;
      this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
      this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }
    this.requestTableData();
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
      this.requestTableData();
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
    this.requestTableData();
  }
  firstPage() {/* 首页 */
    this.activePage = 1;
    this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
    this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    this.firstVisiblePaginator = 0;
    this.lastVisiblePaginator = this.numberOfVisiblePaginators;
    this.requestTableData();
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
    this.requestTableData();
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
  private pickeri=2;
  private pickerdom=null;
  private picker_m=null;
  pickerFocus(e){
    if((!this.picker_m)||this.picker_m.getAttribute('class').indexOf('picker--opened')==-1){
      this.picker_m=e.target.parentNode.parentNode;
      this.pickeri++;
      window['e']=e.target;
      console.log(e)
      this.pickerdom=e.target.parentNode.parentNode.parentNode;
      this.pickerdom.style['z-index']=this.pickeri;
    }else{
      setTimeout(()=>{
        if(this.picker_m.getAttribute('class').indexOf('picker--opened')==-1){
          this.picker_m=null;
          this.pickerdom.style['z-index']=0;
        }
      },200)
    }
  }

  reSetAndReqTD(){
    this.reSetModel();
    this.requestTableData();
  }
}
