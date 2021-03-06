import { Component, ViewChild, ViewChildren, QueryList, OnInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, TabHeadingDirective } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../../params.service';
import { ModalDirective } from 'ng-uikit-pro-standard';
import { GradeService } from './../../../../../../grade.service';

import { Router } from '@angular/router'

//融资申请
@Component({
  selector: 'app-rongzishenqing',
  templateUrl: './rongzishenqing.component.html',
  styleUrls: ['./rongzishenqing.component.scss']
})
export class RongzishenqingComponent implements OnInit {
  @ViewChildren('pages') pages: QueryList<any>;
  @ViewChild('demoBasic') demoBasic: ModalDirective;
  trangetData(event: any) {
    this.InputData = event;
  }
  InputData: any = {
    authId: '',
    auSta: '',
    cuNo: ''
  }
  check: boolean = false;
  alldata: any;
  paths: any;       //请求路径，请求时拼接请求条件
  theTotalNumberOfEntries = 0
  _http: any;       //请求对象

  //以下是搜索框的内容
  testarray = {
    idType: '',
    idNo: '',
    cuName: '',
    finproNo: '',
    busType: '',
    auSta: '',
    begDate: '',
    endDate: '',
  }
  //表数据
  table_head = [
    '序号', 'checklabel', '资产方', '业务类型', '授信核准编号', '融资申请金额', '融资申请日期', '融资到期日期', '期限类型', '融资期限'
    , '申请状态',
  ];
  tableData = []; //表格数据
  //下拉框的对象
  idTypes: Array<any>        //证件类型
  finproNos: Array<any>      //金融产品
  busTypes: Array<any>       //业务类型
  auStas: Array<any>         //申请状态
  termTypes: Array<any>       //期限类型
  //请求下拉框得数据
  requestSelectData(fu: any) {
    this._http.get('/fina/dict/dictListList?ids=AU_STA,BUS_TYPE,FINPRO_NO,ID_TYPE,TERM_TYPE', (e) => {
      var newdata = e.data

      for (var i = 0; i < newdata.length; i++) {

        if (newdata[i].data[0].fieldName == 'ID_TYPE') {
          this.idTypes = newdata[i].data

        }
        if (newdata[i].data[0].fieldName == 'AU_STA') {
          this.auStas = newdata[i].data


        }
        if (newdata[i].data[0].fieldName == 'BUS_TYPE') {
          this.busTypes = newdata[i].data
          console.log(new Date().getTime())

        }
        if (newdata[i].data[0].fieldName == 'FINPRO_NO') {
          this.finproNos = newdata[i].data

        }
        if (newdata[i].data[0].fieldName == 'TERM_TYPE') {
          this.termTypes = newdata[i].data

        }
      }


      fu();
    }, () => { })
  }
  // 得到请求的凭借条件
  getPath() {

    if (this.testarray.begDate != null && this.testarray.begDate != undefined && this.testarray.begDate != '')
      this.testarray.begDate = new Date(this.testarray.begDate)['Format']('yyyy-MM-dd')
    if (this.testarray.endDate != null && this.testarray.endDate != undefined && this.testarray.endDate != '')
      this.testarray.endDate = new Date(this.testarray.endDate)['Format']('yyyy-MM-dd')
    this.paths = '&idType=' + this.testarray.idType + '&idNo=' + this.testarray.idNo + '&cuName=' + this.testarray.cuName + '&finproNo=' + this.testarray.finproNo
      + '&busType=' + this.testarray.busType + '&auSta=' + this.testarray.auSta;
  }
  //请求得到总数据
  requestTableData() {
    this.getPath();
    this._http.get('/fina/fa/list?pageNum=' + this.activePage + '&pageSize=' + this.itemsPerPage + this.paths, (e) => {
      console.log(e)
      if (this.grade.vals[0] == 5)
        this.tableData = new Array(e.data.pb.list[0])
      if (this.grade.vals[0] == 4)

        this.tableData = e.data.pb.list
      for (var i = 0; i < this.tableData.length; i++) {
        for (var p in this.tableData[i]) {
          if (p.search('Date') != -1 || p.search('Time') != -1) {
            this.tableData[i][p] = new Date(this.tableData[i][p])['Format']('yyyy-MM-dd')
          }
          if (p == 'idType') {

            this.tableData[i].idType = this.getLabel(this.tableData[i][p], this.idTypes)
          }
          if (p == 'createTime') {

            this.tableData[i].begDate = this.tableData[i].createTime;
          }

          if (p == 'busType') {

            this.tableData[i].busType = this.getLabel(this.tableData[i][p], this.busTypes)

          }
          if (p == 'auSta') {

            this.tableData[i].auSta = this.getLabel(this.tableData[i][p], this.auStas)

          }
        }

      }

      this.theTotalNumberOfEntries = e.data.pb.totalRecord;
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


    })
  }
  //通过下拉框的vaule的到label
  getLabel(value: any, select: Array<any>): any {
    console.log(value, select)
    for (var p in select) {
      if (select[p]['value'] == value) {
        console.log(select[p]['label'])
        return select[p]['label']
      }
    }
  }

  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;



  //用来保证日期框不会出现越级显示
  private pickeri = 2;
  private pickerdom = null;
  private picker_m = null;
  pickerFocus(e) {
    if ((!this.picker_m) || this.picker_m.getAttribute('class').indexOf('picker--opened') == -1) {
      this.picker_m = e.target.parentNode.parentNode;
      this.pickeri++;
      window['e'] = e.target;
      this.pickerdom = e.target.parentNode.parentNode.parentNode;
      this.pickerdom.style['z-index'] = this.pickeri;
    } else {
      setTimeout(() => {
        if (this.picker_m.getAttribute('class').indexOf('picker--opened') == -1) {
          this.picker_m = null;
          this.pickerdom.style['z-index'] = 0;
        }
      }, 200)
    }
  }
  public myDatePickerOptions: IMyOptions = {
    dayLabels: { su: '日', mo: '一', tu: '二', we: '三', th: '四', fr: '五', sa: '六' },
    dayLabelsFull: {
      su: "周日", mo: "周一", tu: "周二", we: "周三", th: "周四", fr: "周五",
      sa: "周六"
    },
    monthLabels: {
      1: '一月', 2: '二月', 3: '三月', 4: '四月', 5: '五月', 6: '六月', 7: '七月', 8: '八月', 9: '九月', 10:
        '十月', 11: "十一月", 12: '十二月'
    },
    monthLabelsFull: {
      1: "一月", 2: "二月", 3: "三月", 4: "四月", 5: "五月", 6: "六月", 7: "七月", 8:
        "八月", 9: "九月", 10: "十月", 11: "十一月", 12: "十二月"
    },
    todayBtnTxt: "今天",
    clearBtnTxt: "清除",
    closeBtnTxt: "关闭",

    showTodayBtn: true,
    showClearDateBtn: true
  };
  activePage = 1;
  itemsPerPage = 4;//每页显示条数
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
  pageTable = [];
  constructor(public param: ParamsService, public grade: GradeService, public router: Router) {
    this._http = param._http

  }

  ngOnInit() {
    this.requestSelectData(() => {
      this.requestTableData()
    });

  }

  search(): void {
    this.requestTableData();
  }
  allCheck(): void {
    if (this.check == false)
      this.check = true;
    else
      this.check = false;
  }
  title = [
    "融资管理",
    "融资申请"
  ]
  shenqingxiangqing(date: any): void {
    this.InputData.auSta = this.tableData[date].auSta;
    this.grade.sub.next({ type: 'app-hetongxq', data: this.InputData })
  }
  //新增申请界面
  newApply() {
    console.log(this.grade.user)
    var grades = this.grade.user.grade
    var step = this.grade.user.data.steps
    if (grades.indexOf(5) > -1) {
      if (step <= 3) {
        var back = confirm("对不起，您的授信还没有完成,是否回到授信申请")
        if (back) {
          this.router.navigate(['/finas/home/khgl/khxx'])
          return
        } else {
          return
        }
      } else if (step < 6) {
        alert("您的授信正在审核中，您暂时还不能进行融资申请，请您耐心等待")
        return
      } else if (step == 6) {
        this.InputData.auSta = '申请中';
        this.grade.sub.next({
          type: 'app-hetongxq',
          data: this.InputData
        })
        this.demoBasic.show();
        return
      }
      
    }
    this.InputData.auSta = '申请中';
    this.grade.sub.next({
      type: 'app-hetongxq',
      data: this.InputData
    }
    )
    this.demoBasic.show();
  }
}
