import { Component, OnInit,ViewChildren, QueryList  } from '@angular/core';

@Component({
  selector: 'app-yszkdqtx',
  templateUrl: './yszkdqtx.component.html',
  styleUrls: ['./yszkdqtx.component.scss']
})
export class YszkdqtxComponent implements OnInit {

  isChildRouteLoaded = false;
  @ViewChildren('pages') pages: QueryList<any>;
  sfs:string;
kh={
  name:'',
  hm:'',//证件号码
  zjlx:{
    vals:'',
    selects:[
      { value: '1', label: '--全部--' },
      { value: '2', label: '统一信用证代码证' },
      { value: '3', label: '营业执照' },
    ]
  },
  yskzt:{
    vals:'',
    selects:[
      { value: '1', label: '已生效' },
      { value: '2', label: '转让中' },
    ]
  },
   khhm:''  ,    //客户号码
  yszkdqr:''    //应收账款到期日
}
oncz(e):void{
  console.log(e);
  this.kh.zjlx.vals="";
  this.kh.name='';
  this.kh.hm='';
  this.kh.yskzt.vals="";
  this.kh.khhm="";
  this.kh.yszkdqr="";
}
constructor(

) { }

ngOnInit() {
  window['kh']=this;
  if (this.tableData.length % this.itemsPerPage === 0) {
    this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage);
  } else {
    this.numberOfPaginators = Math.floor(this.tableData.length / this.itemsPerPage + 1);
  }
  for (let i = 1; i <= this.numberOfPaginators; i++) {
    this.paginators.push(i);
  }
}
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
  numberOfPaginators: number;
  lastVisibleIndex: number = this.itemsPerPage;
  firstVisibleIndex = 1;
changePage(event: any) {
  if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
    this.activePage = +event.target.text;
    this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
    this.lastVisibleIndex = this.activePage * this.itemsPerPage;
  }
}
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
  numberOfVisiblePaginators = 10;
  firstVisiblePaginator = 0;
lastVisiblePaginator = this.numberOfVisiblePaginators;

firstPage() {
  this.activePage = 1;
  this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
  this.lastVisibleIndex = this.activePage * this.itemsPerPage;
  this.firstVisiblePaginator = 0;
  this.lastVisiblePaginator = this.numberOfVisiblePaginators;
}

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
}
