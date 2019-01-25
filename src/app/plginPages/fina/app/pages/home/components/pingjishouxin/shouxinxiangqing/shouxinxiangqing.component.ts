import { Component, Output, OnInit, ViewChild, Input, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, turnState, ModalDirective } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../params.service'
import { GradeService } from './../../../../../grade.service'

@Component({
  selector: 'app-shouxinxiangqing',
  templateUrl: './shouxinxiangqing.component.html',
  styleUrls: ['./shouxinxiangqing.component.scss']
})
export class ShouxinxiangqingComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @Input() demoBasic: ModalDirective;
  @Input() authId: any;

  // @Output() IdisabledChange = new EventEmitter();

  Idisabled: false;
  personPage = "oldUser"
  inputW = "206px"
  ngOnChanges(changes: SimpleChanges): void {
    this.reSetModel();
    if (this.authId) {
      //alert(this.authId)
      this.isAjax = true;
      this._http.get('/fina/grade/detail?authId=' + this.authId, (e) => {
        //console.log(e)
        this.zhsx = e.data.mBody;
        if (this.zhsx.authSts == '冻结') {
          this.zhsx.edsfdj = '1';
        } else {
          this.zhsx.edsfdj = '0';
        }
        this.formatDate(e.data.isClassify == '是');
        // this.dataObject.controlIndicators.cuNo = this.zhsx.cuNo;
        // this.dataObject.controlIndicators.cuName = this.zhsx.cuName;
        this.isAjax = false;
      }, () => {
        this.isAjax = false;
      })
    }
  }
  isShow: boolean = false;

  CRE_RATIN = []
  AUTH_STS = []
  FINPRO_NO = []
  AUTH_SPLIT_TYPT = []
  TERM_TYPE = []
  ID_TYPE = []
  REPAY_TYPE = []
  AUTH_LUME = [
    { label: '明保理', value: '明保理' },
    { label: '暗保理', value: '暗保理' },
  ]

  //文本框的model
  zhsx = {
    authId: '',
    creRatin: '',
    authAmt: '',
    authBal: '',
    term: '',
    termType: '',
    authSts: '',
    begDate: '',
    endDate: '',
    recycle: '',
    cuNo: '',
    edsfdj: '0',
    fileArr: [],
    authLume: '',

    cuName: '',
    idType: "",
    idNo: "",
    repayType: "",
  }

  zhu: string = "注 ：额度核准编号 + 金融产品号 + 分项授信额度类型 + 细分流水号";;//注释内容
  public show_fenlei: string = '0';
  constructor(public params: ParamsService, public grande: GradeService) {
    this._http = params._http;
  }
  termTypeTxt = "";

  _http: any;
  isAjax = false;
  reqDdListData() {
    this.isAjax = true;
    this._http.get('/fina/dict/dictListList?ids=CRE_RATIN,AUTH_STS,FINPRO_NO,AUTH_SPLIT_TYPT,REPAY_TYPE,TERM_TYPE,ID_TYPE', (e) => {
      let it = null;
      for (let i = 0; i < e.data.length; i++) {
        it = e.data[i];
        if (it.myid == 'CRE_RATIN') {
          this.CRE_RATIN = it.data;
        } else if (it.myid == 'AUTH_STS') {
          this.AUTH_STS = it.data;
        } else if (it.myid == 'FINPRO_NO') {
          this.FINPRO_NO = it.data;
        } else if (it.myid == 'AUTH_SPLIT_TYPT') {
          this.AUTH_SPLIT_TYPT = it.data;
        } else if (it.myid == 'TERM_TYPE') {
          this.TERM_TYPE = it.data;
          for (var j = 0; j < this.TERM_TYPE.length; j++) {
            if (this.TERM_TYPE[j].label == "月") {
              this.zhsx.termType = this.TERM_TYPE[j].value;
              this.termTypeTxt = this.TERM_TYPE[j].label;
              break;
            }
          }
        } else if (it.myid == 'ID_TYPE') {
          this.ID_TYPE = it.data;
        } else if (it.myid == 'REPAY_TYPE') {
          this.REPAY_TYPE = it.data;
        }
      }
      this.isAjax = false;
    }, () => {
      this.isAjax = false;
    })
  }
  submitAllData() {
    // this.zhsx.termType = this.TERM_TYPE.value;
    // this.zhsx.cuNo = this.dataObject['controlIndicators'].cuNo;
    // this.zhsx.cuName = this.dataObject['controlIndicators'].cuName;
    // this.zhsx.authId = this.dataObject['controlIndicators'].authId;
    let zhsx = JSON.parse(JSON.stringify(this.zhsx))
    let parjson = {};
    zhsx.begDate = new Date(this.zhsx.begDate).getTime();
    zhsx.endDate = new Date(this.zhsx.endDate).getTime();
    parjson['mBody'] = zhsx;
    parjson['isClassify'] = this.show_fenlei == '1' ? '是' : '否';
    console.log(parjson)
    var item = "";
    this.isAjax = true;
    this._http.post('/fina/grade/detailInsert', parjson, (e) => {
      item = e.data.t;
      console.log(e)
      if (e.data.t) {
        this.closeWin();
      }
      this.dangerShow(e.data.msg)
      this.isAjax = false;
    }, () => {
      this.isAjax = false;
    })

  }

  ngOnInit() {
    this.reqDdListData();
    this.onZhAdd(this.fkxx.zhTable.hkData);
    this.onZhAdd(this.fkxx.zhTable.skData);
    this.onZhAdd(this.fkxx.zhTable.ggData);

    this.grande.sub.subscribe(res => {
      if (res.type == "dataBinding") {
        this.zhsx.authId = res.aBauthId;
        this.Idisabled = res.Idisabled;
      } else if (res.type == "newCredit") {
        this.Idisabled = res.Idisabled;
      }
    })
  }
  closeWin() {
    this.reSetModel()
    this.demoBasic.hide();
  }
  reSetModel() {
    this.zhsx = {
      authId: '',
      creRatin: '',
      authAmt: '',
      authBal: '',
      term: '',
      termType: '',
      authSts: '',
      begDate: '',
      endDate: '',
      recycle: '',

      cuNo: '',
      edsfdj: '0',
      fileArr: [],
      authLume: '',

      cuName: '',
      idType: "",
      idNo: "",
      repayType: "",
    }
  }
  formatDate(flag) {
    this.zhsx.begDate = new Date(this.zhsx.begDate)['Format']('yyyy-MM-dd');
    this.zhsx.endDate = new Date(this.zhsx.endDate)['Format']('yyyy-MM-dd');
    //alert(flag)
    if (flag) {
      this.show_fenlei = '1';
    } else {
      this.show_fenlei = '0';
    }
  }
  // private pickeri = 2;
  // private pickerdom = null;
  // private picker_m = null;
  // pickerFocus(e) {
  //   if ((!this.picker_m) || this.picker_m.getAttribute('class').indexOf('picker--opened') == -1) {
  //     this.picker_m = e.target.parentNode.parentNode;
  //     this.pickeri++;
  //     window['e'] = e.target;
  //     console.log(e)
  //     this.pickerdom = e.target.parentNode.parentNode.parentNode;
  //     this.pickerdom.style['z-index'] = this.pickeri;
  //   } else {
  //     setTimeout(() => {
  //       if (this.picker_m.getAttribute('class').indexOf('picker--opened') == -1) {
  //         this.picker_m = null;
  //         this.pickerdom.style['z-index'] = 0;
  //       }
  //     }, 200)
  //   }
  // }
  danger_hid = true;
  alertTxt = '';
  dangerShow(str) {
    this.alertTxt = str;
    this.danger_hid = false;
    setTimeout(() => {
      this.danger_hid = true
    }, 3000);
  }
  //账户信息
  fkxx = {
    zhTable: {
      thead: ['序号', '账号', '账户开户行', '账户名称', '操作'],
      defaultData: { zh: '', khh: '', name: '' },
      skData: [],
      hkData: [],
      ggData: [],
    }
  }
  onZhAdd(tTable: Array<any>): void {//添加账户
    tTable.push(JSON.parse(JSON.stringify(this.fkxx.zhTable.defaultData)));
    console.log(this.fkxx.zhTable);
  }
  onRemove(tTable: Array<any>, i): void {//删除账户
    tTable.splice(i, 1);
  }
  getFileName(it) {
    // console.log(it)
    var fileName = document.getElementsByClassName("identifierUsedForTheValue")[this.fileModelArr.length - 1]['files'][0].name;
    it.fileName = fileName;
  }
  fileModelArr = []
  selectFile() {//选择文件(增加一行)
    this.fileModelArr.push({ fileModel: "", fileName: "", fileInfo: "" })
    setTimeout(() => {
      document.getElementsByClassName("identifierUsedForTheValue")[this.fileModelArr.length - 1]['click']();
      setTimeout(()=>{
        console.log(this.fileModelArr)
      },2000);
    });
    // setTimeout(() =>{
    //   console.log(typeof(this.fileModelArr[this.fileModelArr.length - 1].fileModel))
    //   console.log(this.fileModelArr[this.fileModelArr.length - 1].fileModel)
    // },5000)
    // console.log(this.fileModelArr)
  }
  delThisFileTr(i) {
    this.fileModelArr.splice(i, 1);
    // console.log(this.fileModelArr)
  }
  onup(i: any, fu: any, arr: Array<any>) {
    i--;
    if (i > 0 || i == 0) {
      if (this.fileModelArr[i].fileModel) {
        var uploadFile = document.getElementsByClassName("identifierUsedForTheValue")[i]['files'][0];
        var fileInfo = this.fileModelArr[i].fileInfo;
        var formData = new FormData();
        formData.append('file', uploadFile);//文件
        this._http.post('/fina/uploadFile?fileInfo=' + fileInfo, formData, (e) => {
          // console.log(e);
          if (e.data && e.data.file) {
            arr.push(e.data);
            this.onup(i, fu, arr);
          } else {
            fu();
          }
        }, () => {
          this.isAjax = false;
          fu();
        })
      }else{
        this.onup(i, fu, arr);
      }
    } else {
      fu(arr);
    }
  }
  startUpload(): void {
    this.isAjax = true;
    this.onup(this.fileModelArr.length, (arr) => {
      if (arr) {
        for (var i = 0; i < arr.length; i++) {
          this.zhsx.fileArr.push({
            fileName: arr[i].file.originalname,
            fileType: "授信附件",
            fileDesc: arr[i].fileInfo,
            fileAddr: arr[i].file.path,
          })
        }
        this.submitAllData();
        // console.log(arr)
        // console.log(this.zhsx.fileArr)
      }
      // this.dangerShow("共上传" + (f + t) + "个文件," + t + "个成功," + f + "个失败");
      this.isAjax = false;
    }, []);
  }
}
