import { Component, ViewChild, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../params.service'

@Component({
  selector: 'app-pingjishouxin',
  templateUrl: './pingjishouxin.component.html',
  styleUrls: ['./pingjishouxin.component.scss']
})
export class PingjishouxinComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @ViewChildren('pages') pages: QueryList<any>;
  authId="";
  dataObject={
    Idisabled:false,
    controlIndicators:{
      cuName:'',
      cuNo:'',
      authId:'',
      authAppNo:''
    },
  }
  FINPRO_NO = []
  AUTH_SPLI_TYPE = []

/*当前页面位置 */
  title = [
    '客户管理',
    '评级授信'
  ]
  pjsx = {
    //文本框的model
    cuName:"",
    authId:"",
    authAppNo:"",
    cuNo:"",
    //下拉菜单的model
    
    finproNo:"",
    authSplitType:"",

    //日期的model
    begDate:'',
    endDate:''
  }


  /* 分页显示使用的数据 */
  theTotalNumberOfEntries = 0;  //总条目数
  activePage = 1;
  itemsPerPage = 6;//每页显示条数
  paginators: Array<any> = [];
  numberOfPaginators: number;
  lastVisibleIndex: number = this.itemsPerPage;
  firstVisibleIndex = 1;
  numberOfVisiblePaginators = 10;
  firstVisiblePaginator = 0;
  lastVisiblePaginator = this.numberOfVisiblePaginators;

   tableData=[]

  _http:any;
  isAjax=false;
  constructor(public params:ParamsService) {
    this._http=params._http;
   }
   authid='';
   reSetModel(){
    this.pjsx = {
      //文本框的model
      cuName:"",
      authId:"",
      authAppNo:"",
      cuNo:"",
      //下拉菜单的model
      
      finproNo:"",
      authSplitType:"",
  
      //日期的model
      begDate:"",
      endDate:""
    }
   }
   queryTableDataWithConditions(){
    this.isAjax=true;
    var path = '/fina/grade/list?pageNum='+this.activePage+'&pageSize='+this.itemsPerPage+
    '&cuNo='+this.pjsx.cuNo+'&cuName='+this.pjsx.cuName+'&authId='+this.pjsx.authId+
    '&authAppNo='+this.pjsx.authAppNo+'&finproNo='+this.pjsx.finproNo+
    '&authSplitType='+this.pjsx.authSplitType;
    
    if(!!this.pjsx.endDate){
      path+='&endDate='+(new Date(this.pjsx.endDate).getTime());
    }
    if(this.pjsx.begDate){
      path+='&begDate='+(new Date(this.pjsx.begDate).getTime())
    }

    this._http.get(path,(e)=>{
      this.isAjax=false;
     this.tableData=e.data.pb.list
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
   requestTableData(){
    this.isAjax=true;
    this._http.get('/fina/grade/list?pageNum='+this.activePage+'&pageSize='+this.itemsPerPage,(e)=>{
      this.isAjax=false;
     this.tableData=e.data.pb.list
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
      this.reSetModel();
      this.isAjax=false;
     },()=>{
     this.isAjax=false;
   
     })
   }
   reqDdListData(){
    this.isAjax=true;
      this._http.get('/fina/dict/dictListList?ids=FINPRO_NO,AUTH_SPLIT_TYPE',(e)=>{
        let it=null;
        for(let i=0;i<e.data.length;i++){
          it=e.data[i];
          if(it.myid=='FINPRO_NO'){
            this.FINPRO_NO=it.data;
          }else if(it.myid=='AUTH_SPLIT_TYPE'){
            this.AUTH_SPLI_TYPE=it.data;
          }
        }
        this.isAjax=false;
      },()=>{
     this.isAjax=false;
     })
   }
  ngOnInit() {/* 初始化动态赋值与显示 */
    this.requestTableData();
    this.reqDdListData();
  }
  dateFormat(e):string{
    if(!e){
      return'';
    }
    if(typeof e!='number'){
      e=parseInt(e);
      if(isNaN(e)){
        return '';
      }
    }
    return new Date(e)['Format']('yyyy-MM-dd');
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
  public myDatePickerOptions: IMyOptions = this.params.mdb_es;

  /*全选的操作 */
  qx_btn = false;
  check_arr = new Array(this.tableData.length)

  quanXuan() {//全选
    setTimeout(() => {
      for (let i = 0; i < this.check_arr.length; i++) {
        this.check_arr[i] = this.qx_btn;
      }
    });
  }

  del(){
    for (let i = 0; i < this.check_arr.length; i++) {
      if(this.check_arr[i]){
        alert("第"+i+"个复选框被选中了");
      }
    }
  }
  sxxqAllDate:any;
  submitAllData(item){
    this.isAjax=true;
    this._http.get('/fina/grade/detail?authId='+item,(e)=>{
      this.sxxqAllDate = e;
      this.isAjax=false;
    },()=>{
   this.isAjax=false;
   })
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
  dataBinding(item){
    this.authId=item;
    this.dataObject.controlIndicators.cuName = this.pjsx.cuName;
    this.dataObject.controlIndicators.cuNo = this.pjsx.cuNo;
  }
}
