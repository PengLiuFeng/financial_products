import { Component, ViewChild, ViewChildren, EventEmitter, QueryList, Input, OnInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, TabHeadingDirective } from 'ng-uikit-pro-standard';
import {GradeService} from './../../../../../../grade.service';


@Component({
  selector: 'app-shenqingxiangqing-body',
  templateUrl: './shenqingxiangqing-body.component.html',
  styleUrls: ['./shenqingxiangqing-body.component.scss']
})
export class ShenqingxiangqingBodyComponent implements OnInit {
  model: any;
  models: any;
  @ViewChildren('pages') pages: QueryList<any>;
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @Input() InputData: any;
  bo: boolean = false;
  testarray: any;
  headElements = [
    '序号', '买方', '基础交易合同名称', '基础交易合同编号', '单据类型', '单据号', '应收账款金额', '应收账款到期日','单笔融资金额','单笔融资金额到期日','利率'
  ]
  elements: any = [
    { BUS_NAME: '江苏恒生集团', BUS_COUNA: '购买原材料', BUS_COUN: '5FS6GSD45', BUS_TYPE: '采购订单', BUS_NO: 'FD4W523', BUS_RECEI: '200.000.000', END_DATE: '2019-3-6' },
    
  ]
  
  //新增应收账款的数据
  client: any = {
    list: []
  }
  childArray: any = {
    busName: '',
    busCouna: '',
    busCoun: '',
    busType: '',
    busNo: '',
    billAmt: '',
    billDate: '',
    busRecei: '',
    endDate: '',
    fileName:''
  }
  addTableData() {
    this.client.list.push(JSON.parse(JSON.stringify(this.childArray)));
  }
  deleteTableData(id: any) {
    this.client.list.splice(id, 1);
  }
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
  numType = [
    { value: 'Y', label: '年' },
    { value: 'M', label: '月' },
    { value: 'D', label: '日' },
  ]
  optionsSelect = [
    { value: '1', label: '保理' },
    { value: '2', label: '信托' },
  ];
  constructor(public grade:GradeService) {
    
  }

  ngOnInit() {
    this.addTableData();
    if (this.InputData == undefined || this.InputData == null) {
      this.InputData.personPage = 'newPage';
    }


    this.testarray = {
      finproNos: [],
      finproNo: '',
      busTypes: [],
      busType: '',
      payTypes: [
        { value: '1', label: '一次支付' },
        { value: '2', label: '分期付款' },
      ],
      payType: '',
      busUses: [
        { value: '1', label: '扩大生产' },
        { value: '2', label: '用于研发投资' },
        { value: '3', label: '用于偿还债务' },

      ],
      busUse: '',

      singBus: 0,
      mayAmt: '100000',
      auAmt: '50000',
      term: '6',
      endDate: '',
      opName: '张三',
      upOpName: '李四',
      brNo: '423GA19',
      brName: '华软金信',
      txDate: '',
      upDate: '',
    }
  }
  busUse: any;
  revision(): void {
    if (this.bo == false)
      this.bo = true;
    else
      this.bo = false;
  }
  tijiao() { }
  //文件上传对象定义
  doc:any;
  fileUpdata(filebutton: any) {
    if(filebutton.path[1].nextSibling!=null&&filebutton.path[1].nextSibling!=undefined){
      this.doc=filebutton.path[1].nextSibling;
      this.doc.click(); 
    }
  }
  fileName:any;
  uploadFile(file:any,id:number){
    if(file){
      let uploadFile=this.doc['files'][0];
      this.client.list[id].fileName=uploadFile.name;
    var formData = new FormData();
    formData.append('file', uploadFile);//文件
    let ms="这是描述"
    // this._http.post('/fina/uploadFile?ms='+ms,formData,(e)=>{
    //   // back(true,e)
    // },()=>{
    //   // back(false)

    // },this.httpHeaders)
    console.log(uploadFile)
    }
    else{
      console.log(file)
    }

  }
}
