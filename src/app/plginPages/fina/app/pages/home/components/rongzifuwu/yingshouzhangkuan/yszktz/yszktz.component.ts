//应收账款通知
import { Component,ViewChild, OnInit, ViewChildren, QueryList, Input, Output,EventEmitter } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, turnState } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../../params.service'

@Component({
  selector: 'app-yszktz',
  templateUrl: './yszktz.component.html',
  styleUrls: ['./yszktz.component.scss']
})
export class YszktzComponent implements OnInit {
  
  // [(hidFlag)]='hidFlag' [(yszktz_left)]="yszktz_left"
  @Input() hidFlag:any;
  @Input() yszktzLeft:any;
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @ViewChildren('pages') pages: QueryList<any>;
  @Output() yszktzLeftChange=new EventEmitter();
  @Output() hidFlagChange = new EventEmitter();

  adviceNote ={
    cuNo:"",
    cuName:"",
    authAppNo:"",
    
  }

  isShow:boolean;
  isShow_add:boolean;

  radioModel:any;

  REC_STA=[]
  yszk={
    cuNo:"",
    cuName:"",
    authAppNo:"",
    recSta:"",
  }

/*当前页面位置 */

  title = [
    "融资管理",
    "应收账款管理",
    "应收账款转让通知" 
  ]
 

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
  
  _http:any;
  isAjax=false;
  constructor(public params:ParamsService) {
    this._http=params._http;
   }

   path="";
   queryTableDataWithConditions(){
    this.path = 
      '&cuNo='+this.yszk.cuNo+'&cuName='+this.yszk.cuName+
      '&recSta='+this.yszk.recSta+'&authAppNo='+this.yszk.authAppNo;
    this.activePage = 1;
    this.requestTableData();
   }
   requestTableData(){
    this.isAjax=true;
    this._http.get('/fina/receive/traList?pageNum='+this.activePage+'&pageSize='+this.itemsPerPage+this.path,(e)=>{
      this.isAjax=false;
      //console.log(e)
      this.tableData=e.data.pb.list;
      console.log(this.tableData)
      this.theTotalNumberOfEntries = e.data.pb.totalRecord;
      if (this.theTotalNumberOfEntries % this.itemsPerPage === 0) {
        this.numberOfPaginators = Math.floor(this.theTotalNumberOfEntries / this.itemsPerPage);
      } else {
        this.numberOfPaginators = Math.floor(this.theTotalNumberOfEntries / this.itemsPerPage + 1);
      }
      this.paginators=[];
      for (let i = 1; i <= this.numberOfPaginators; i++) {
        this.paginators.push(i);
      }
      this.isAjax=false;
     },()=>{
     this.isAjax=false;
   
     })
   }
   reSetModel(){
    this.path='';
     this. yszk={
      cuNo:"",
      cuName:"",
      authAppNo:"",
      recSta:"",
    }
   }
   reSetAndReqTD(){
    this.reSetModel();
    this.requestTableData();
  }

   reqDdListData(){
    this.isAjax=true;
      this._http.get('/fina/dict/dictListList?ids=REC_STA',(e)=>{
        let it=null;
        for(let i=0;i<e.data.length;i++){
          it=e.data[i];
          if(it.myid=='REC_STA'){
            this.REC_STA=it.data;
          }
        }
        this.isAjax=false;
      },()=>{
     this.isAjax=false;
     })
   }

  ngOnInit() {/* 初始化动态赋值与显示 */
    if (this.tableData.length % this.itemsPerPage === 0) {
      this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage);
    } else {
      this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage + 1);
    }
    for (let i = 1; i <= this.numberOfPaginators; i++) {
      this.paginators.push(i);
    }
    this.requestTableData();
    this.reqDdListData();
  }

  changePage(event: any) {/* 更改页面 */
    if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
      this.activePage = +event.target.text;
      this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
      this.lastVisibleIndex = this.activePage * this.itemsPerPage;
      this.requestTableData();
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
      this.requestTableData();
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
  public myDatePickerOptions: IMyOptions = {};
  tongzhi(t):void{
    this.radioModel=t;
    this.isShow=true;
  }
/*全选*/
  qx_btn=false;
  check_arr=new Array(this.tableData.length)

  quanXuan(){
    setTimeout(() => {
      for (let i = 0 ; i < this.check_arr.length ; i++) {
        this.check_arr[i] = this.qx_btn;
     }
    });
  }
  hidSelf(){

    this.hidFlag=false;
    this.yszktzLeft="200%";
    this.yszktzLeftChange.emit(this.yszktzLeft);
    this.hidFlagChange.emit(this.hidFlag);
    
  }
}
