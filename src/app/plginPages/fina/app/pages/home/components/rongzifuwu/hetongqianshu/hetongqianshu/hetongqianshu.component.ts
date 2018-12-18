import { Component, OnInit,ViewChildren,QueryList } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import { ParamsService } from './../../../../../../params.service'
//合同签署

@Component({
  selector: 'app-hetongqianshu',
  templateUrl: './hetongqianshu.component.html',
  styleUrls: ['./hetongqianshu.component.scss']
})
export class HetongqianshuComponent implements OnInit {
  @ViewChildren('pages') pages: QueryList<any>;
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
constructor(private params:ParamsService) { }

ngOnInit() {
  // this.params.home.treeData.setTree('');
  if (this.tableData.length % this.itemsPerPage === 0) {
    this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage);
  } else {
    this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage + 1);
  }
  for (let i = 1; i <= this.numberOfPaginators; i++) {
    this.paginators.push(i);
  }
}
pageTable=[];
tableData = [
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
  console.log(this.pages)
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
kehuxinxi(id:any){
    
}

}
