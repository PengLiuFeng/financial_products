import { Component,ViewChild, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MDBDatePickerComponent } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-chanpinxianpeizhi',
  templateUrl: './chanpinxianpeizhi.component.html',
  styleUrls: ['./chanpinxianpeizhi.component.scss']
})
export class ChanpinxianpeizhiComponent implements OnInit {

  

  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @ViewChildren('pages') pages: QueryList<any>;
  constructor() { }

  title = [
    "产品工厂",
    "产品线配置"
  ]

  gs={
    vals:'',
    name:[
      { value: '1', label: '华软产融平台' },
      ]
  }
  changeIsHidden(){
   
  }
   /* 分页显示使用的数据 */
   activePage = 1;
   itemsPerPage = 6;//每页显示条数
   paginators: Array<any> = [];
   numberOfPaginators: number;
   lastVisibleIndex: number = this.itemsPerPage;
   firstVisibleIndex = 1;
   numberOfVisiblePaginators = 10;
   firstVisiblePaginator = 0;
   lastVisiblePaginator = this.numberOfVisiblePaginators;
 

  //以下是搜索框内容
  chanpinxianData={
    finproNo:'',
    finproNos:[],       //产品id
    finproNm:'',        //产品名称
    finproNms:[],
    capNms:[],          //资金方
    capNm:'',
    busNames:[],        //业务线名称
    busName:'',
    curType:'',         //币种
    curTypes:[] ,
    avaiFlg:' ',        //启用标志
    avaiFlgs:[],
    rateCode:''  ,      //利率代码
    rate:'',            //利率
    limtAmt:'',         //单笔限额
    termTypes:[],       //期限类型
    termType:'',        
    ifupt:'',           //项目金额是否可修改
    ifupts:[],           
    margFlts:[],        //保证金比例
    margFlt:'',         
    margForms:[],       //保证金结算方式
    margForm:'',
    margPays:[],        //保证金支付方式
    margPay:'',
    repayType:'',       //还款方式
    repayTypes:[],  
    paDayps:[],           //还款日计划
    paDayp:'',
    capGo:'',           //资金流向
    capGos:[],        
    onOffs:[],           //融资款支付方式
    onOff:'',           
    downPaymentFlt:'',
    downPaymentFlts:[],  //融资额折扣比例
    ifComInt:'',          //逾期是否收取复利
    ifComInts:[],


  }
  tableData = [/* 表数据 */
    { id: 1, finproNo: 'Otto', finproNm: '@mdo',curType:'test',avaiFlg:'test',rate:'test',termTypell:'test',term:'test',termType:'test',downPaymentFlt:'test',margFlt:'test',limtAmt:'test', busName:'test',capNm:'test'},
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
  remove(id:number){
    this.tableData.splice(id,1);
    
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
  }

  changePage(event: any) {/* 更改页面 */
    if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
      this.activePage = +event.target.text;
      this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
      this.lastVisibleIndex = this.activePage * this.itemsPerPage;
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
  }
  firstPage() {/* 首页 */
    this.activePage = 1;
    this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
    this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    this.firstVisiblePaginator = 0;
    this.lastVisiblePaginator = this.numberOfVisiblePaginators;
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
  }
}
