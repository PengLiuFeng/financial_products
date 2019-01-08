import { Component, ViewChild, ViewChildren, EventEmitter, QueryList, Input, OnInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, TabHeadingDirective } from 'ng-uikit-pro-standard';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';


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
    '序号', '买方', '基础交易合同名称', '基础交易合同编号', '单据类型', '单据号', '应收账款金额', '应收账款到期日',
  ]
  elements: any = [
    { BUS_NAME: '江苏恒生集团', BUS_COUNA: '购买原材料', BUS_COUN: '5FS6GSD45', BUS_TYPE: '采购订单', BUS_NO: 'FD4W523', BUS_RECEI: '200.000.000', END_DATE: '2019-3-6' },
    { BUS_NAME: '江苏恒生集团', BUS_COUNA: '购买原材料', BUS_COUN: '5FS6GSD48', BUS_TYPE: '采购订单', BUS_NO: 'FD4W237', BUS_RECEI: '5.000.000', END_DATE: '2019-9-2' },
    { BUS_NAME: '江苏恒生集团', BUS_COUNA: '购买原材料', BUS_COUN: '5FS6GSD49', BUS_TYPE: '采购订单', BUS_NO: 'FD4W363', BUS_RECEI: '12.000.000', END_DATE: '2019-11-6' },
    { BUS_NAME: '江苏恒生集团', BUS_COUNA: '购买原材料', BUS_COUN: '5FS6GSD44', BUS_TYPE: '采购订单', BUS_NO: 'FD4W544', BUS_RECEI: '76.000.000', END_DATE: '2019-12-27' },
    { BUS_NAME: '江苏恒生集团', BUS_COUNA: '购买原材料', BUS_COUN: '5FS6GSD45', BUS_TYPE: '采购订单', BUS_NO: 'FD4W523', BUS_RECEI: '200.000.000', END_DATE: '2019-3-6' },
    { BUS_NAME: '江苏恒生集团', BUS_COUNA: '购买原材料', BUS_COUN: '5FS6GSD48', BUS_TYPE: '采购订单', BUS_NO: 'FD4W237', BUS_RECEI: '5.000.000', END_DATE: '2019-9-2' },
    { BUS_NAME: '江苏恒生集团', BUS_COUNA: '购买原材料', BUS_COUN: '5FS6GSD49', BUS_TYPE: '采购订单', BUS_NO: 'FD4W363', BUS_RECEI: '12.000.000', END_DATE: '2019-11-6' },
    { BUS_NAME: '江苏恒生集团', BUS_COUNA: '购买原材料', BUS_COUN: '5FS6GSD44', BUS_TYPE: '采购订单', BUS_NO: 'FD4W544', BUS_RECEI: '76.000.000', END_DATE: '2019-12-27' },
  ]
  //上传资料界面数据
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
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
    endDate: ''
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
  constructor() {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
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
  //上传文件界面
  showFiles() {
    let files = '';
    for (let i = 0; i < this.files.length; i++) {
      files += this.files[i].name;
      if (!(this.files.length - 1 === i)) {
        files += ',';
      }
    }
    return files;
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: 'your-path-to-backend-endpoint',
      method: 'POST',
      data: { foo: 'bar' },
    };
    this.files = [];
    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  onUploadOutput(output: UploadOutput | any): void {

    if (output.type === 'allAddedToQueue') {
    } else if (output.type === 'addedToQueue') {
      this.files.push(output.file); // add file to array when added
    } else if (output.type === 'uploading') {
      // update current data in files array for uploading file
      const index = this.files.findIndex(file => file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
    this.showFiles();
  }

}
