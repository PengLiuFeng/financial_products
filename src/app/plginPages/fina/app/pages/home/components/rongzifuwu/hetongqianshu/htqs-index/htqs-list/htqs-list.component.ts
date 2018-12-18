import { Component, OnInit,QueryList,ViewChildren,ViewChild  } from '@angular/core';
import { ParamsService } from './../../../../../../../params.service'
import { ModalDirective } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-htqs-list',
  templateUrl: './htqs-list.component.html',
  styleUrls: ['./htqs-list.component.scss']
})
export class HtqsListComponent implements OnInit {
  @ViewChild('demoBasic') demoBasic: ModalDirective;
  
  @ViewChildren('pages') pages: QueryList<any>;

  title=[
    "融资管理",
    "合同签署"
  ]
  rcwin:any=!false;
  rangeDates:any;
  kh={
    name:'',
    hm:'',//证件号码
    zjlx:{
      vals:' ',
      selects:[
        { value: ' ', label: '证件类型',disabled:'1'},
        { value: '1', label: '身份证' },
        { value: '2', label: '护照' },
      ]
    },
    zjzt:{
      vals:' ',
      selects:[
        { value: ' ', label: '资料提交状态',disabled:'1'},
        { value: '1', label: '全部' },
        { value: '2', label: '已生效' },
        { value: '3', label: '转让中' },
      ]
    }
  }
  oncz(e):void{
    this.kh.zjzt.vals=" ";
    this.kh.zjlx.vals=" ";
    this.kh.name='';
    this.kh.hm='';
  }
  isedit=false;
  _http:any;
  constructor(public params:ParamsService) {
    this._http=params._http;
    if(location.href.indexOf('finas/home/rzgl/htqs/htqsList')>0){
      this.isedit=true;
    }else{
      this.isedit=false;
    }
  }
  
  ngOnInit() {
    this.settableData(1,this.tableData2.length,this.tableData2);
    this.getData(1,()=>{
      this.inittableData();
    });
  }
  inittableData(){
    for (let i = 1; i <= this.numberOfPaginators; i++) {
      this.paginators.push(i);
    }
  }
   /**
   * 设置表格数据
   * @param params 当前页
   * @param totalRecord 总条数
   */
  settableData(page,totalRecord,data):void{
    this.tableData=data;
    if (totalRecord % this.itemsPerPage === 0) {
      this.numberOfPaginators = Math.floor(totalRecord / this.itemsPerPage);
    } else {
      this.numberOfPaginators = Math.floor(totalRecord / this.itemsPerPage + 1);
    }
  }
  pageTable=[];
  tableThead=["客户号", "客户名称", "业务类型", "授信协议编号", "合同编号", "实际融资金额", "利率（%）", "期限类型", "期限", "合同起始日期", "合同到期日", "合同状态", "操作"]
  tableData = []
    tableData2 = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
  { id: 2, firstName: 'John', lastName: 'Doe', username: '@john' },
  { id: 3, firstName: 'Lessie', lastName: 'Moe', username: '@lessie' },
  { id: 4, firstName: 'Otton', lastName: 'Otto', username: '@otton' },
  { id: 5, firstName: 'Krauze', lastName: 'John', username: '@krauze' },
  { id: 6, firstName: 'Lex', lastName: 'Lucky', username: '@lex' },
  { id: 7, firstName: 'Allie', lastName: 'Bill', username: '@allie' },
  { id: 8, firstName: 'Anna', lastName: 'Frost', username: '@anna' },
  { id: 9, firstName: 'Bob', lastName: 'One', username: '@bob' },
  { id: 10, firstName: 'Carl', lastName: 'Johnson', username: '@cj' },
  { id: 11, firstName: 'Mia', lastName: 'Marx', username: '@mia' },
  { id: 12, firstName: 'Cia', lastName: 'Fbi', username: '@cia' },
  { id: 13, firstName: 'John', lastName: 'Doe', username: '@johny' },
  { id: 14, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
  { id: 14, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
  { id: 14, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
  { id: 14, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
  { id: 15, firstName: 'Lessie', lastName: 'Moe', username: '@lessie'}
];
onCkhtxq(it){
  this.rcwin=true;
   this.demoBasic.show();
}
isAjax=false;//是否正在请求
/* 获取数据 */
getData(activePage:number,back?){
  this.isAjax=true;
  this._http.get('/fina/custom/list?pageNum='+activePage+'&pageSize='+this.itemsPerPage,(e)=>{
    // this.settableData(activePage,this.tableData2.length,data);
    if(e.statusCode==200&&e.data){
      if(e.data.pb){
        this.settableData(activePage,e.data.pb.totalRecord,e.data.pb.list);
        if(back){
          back();
        }
      }
    }
    this.isAjax=false;
   console.log(e)
   },()=>{
   this.isAjax=false;
 
   })
   
}
activePage = 1;
  itemsPerPage = 6;//每页显示条数
  paginators: Array<any> = [];
  numberOfPaginators: number;//总页数
  lastVisibleIndex: number = this.itemsPerPage;
  firstVisibleIndex = 1;
  numberOfVisiblePaginators = 10;//显示页数
  firstVisiblePaginator = 0;
lastVisiblePaginator = this.numberOfVisiblePaginators;
  /* 提示 */
  tishi(s):void{
    alert(s);
  }
  /**
   * 点击页码
   */
changePage(event: any) {
  if(this.isAjax){
    this.tishi('正在加载');
    return;
  }
  if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
    this.activePage = +event.target.text;
    this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
    this.lastVisibleIndex = this.activePage * this.itemsPerPage;
  }
  this.getData(this.activePage);
}
/**
   * 下一页
   */
nextPage() {
  if(this.isAjax){
    this.tishi('正在加载');
    return;
  }
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
  this.getData(this.activePage);
}
/**
   * 上一页
   */
previousPage() {
  if(this.isAjax){
    this.tishi('正在加载');
    return;
  }
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
  this.getData(this.activePage);
}
  
/**
   * 点击首页
   */
firstPage() {
  if(this.isAjax){
    this.tishi('正在加载');
    return;
  }
  this.activePage = 1;
  this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
  this.lastVisibleIndex = this.activePage * this.itemsPerPage;
  this.firstVisiblePaginator = 0;
  this.lastVisiblePaginator = this.numberOfVisiblePaginators;
  this.getData(this.activePage);
}
/**
   * 点击尾页
   */
lastPage() {
  if(this.isAjax){
    this.tishi('正在加载');
    return;
  }
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
  this.getData(this.activePage);
}


}
