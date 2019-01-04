import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../../params.service'
@Component({
  selector: 'app-shenpixiangqing',
  templateUrl: './shenpixiangqing.component.html',
  styleUrls: ['./shenpixiangqing.component.scss']
})
export class ShenpixiangqingComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @Input() authId:any;

  ngOnChanges(changes: SimpleChanges): void {
    this.reSetModel();
    if (this.authId) {
      alert(this.authId)
      this.isAjax = true;
      this._http.get('/fina/fa/detail?authId=' + this.authId, (e) => {
        console.log(e)
       // this.zhsx = e.data.mBody;
        this.isAjax = false;
      }, () => {
        this.isAjax = false;
      })
    }
  }
  spxq = {
    authId: "",  //授信核准编号
    authAppNo: "", //授信协议编号
    finproNm: "",  //服务金融产品
    busType: "", //业务类型
    payType: "", //付款方式
    singBus: "",  //是否单笔业务
    busUse: "",  //融资用途
    mayAmt: "",  //单据对应可融资金额
    auAmt: "", //本次融资申请金额
    auRate: "",  //利率
    term: "",  //期限
    termType: "",  //期限类型
    begDate: "", //融资申请审批日期
    endDate: "", //融资申请到期日期
    vouFlt: "",  //担保比例
    vouAmt: "",  //担保金额
    filler: "",  //其他事项(备注)
    brNo: "",  //登记单位
    brName: "",  //登记单位名称
    opName: "",  //登记人名称
    upOpName: "",  //修改人名称
    createTime: "",  //登记时间
    updateTime: ""  //修改时间
  }

  reSetModel(){
    this.spxq = {
      authId: "",  //授信核准编号
      authAppNo: "", //授信协议编号
      finproNm: "",  //服务金融产品
      busType: "", //业务类型
      payType: "", //付款方式
      singBus: "",  //是否单笔业务
      busUse: "",  //融资用途
      mayAmt: "",  //单据对应可融资金额
      auAmt: "", //本次融资申请金额
      auRate: "",  //利率
      term: "",  //期限
      termType: "",  //期限类型
      begDate: "", //融资申请审批日期
      endDate: "", //融资申请到期日期
      vouFlt: "",  //担保比例
      vouAmt: "",  //担保金额
      filler: "",  //其他事项(备注)
      brNo: "",  //登记单位
      brName: "",  //登记单位名称
      opName: "",  //登记人名称
      upOpName: "",  //修改人名称
      createTime: "",  //登记时间
      updateTime: ""  //修改时间
    }
  }
  FINPRO_NO = []
  BUS_TYPE = []
  PAY_TYPE = []
  BUS_USE = []
  TERM_TYPE = []
  button_text = '月'

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
  reqDdListData() {
    this.isAjax = true;
    this._http.get('/fina/dict/dictListList?ids=FINPRO_NO,BUS_TYPE,PAY_TYPE,BUS_USE,TERM_TYPE', (e) => {
      let it = null;
      console.log(e)
      for (let i = 0; i < e.data.length; i++) {
        it = e.data[i];
        if (it.myid == 'FINPRO_NO') {
          this.FINPRO_NO = it.data;
        } else if (it.myid == 'BUS_TYPE') {
          this.BUS_TYPE = it.data;
        } else if (it.myid == 'PAY_TYPE') {
          this.PAY_TYPE = it.data;
        } else if (it.myid == 'BUS_USE') {
          this.BUS_USE = it.data;
        } else if (it.myid == 'TERM_TYPE') {
          this.TERM_TYPE = it.data;
          console.log(this.TERM_TYPE)
        }
      }
      this.isAjax = false;
    }, () => {
      this.isAjax = false;
    })
  }

  _http: any;
  isAjax = false;
  constructor(public params: ParamsService) {
    this._http = params._http;
  }
  tableData = [
    { busName: "北京名品汽车轮胎生产商", busCouna: "购买轮胎原材料", busCoun: "JC20181001-01", busNo: "FP2018001", busRecei: "280,000.00", endAdte: "2019-01-01" },
    { busName: "北京名品汽车轮胎生产商", busCouna: "购买轮胎原材料", busCoun: "JC20181001-01", busNo: "FP2018001", busRecei: "280,000.00", endAdte: "2019-01-01" },
    { busName: "北京名品汽车轮胎生产商", busCouna: "购买轮胎原材料", busCoun: "JC20181001-01", busNo: "FP2018001", busRecei: "280,000.00", endAdte: "2019-01-01" },
    { busName: "北京名品汽车轮胎生产商", busCouna: "购买轮胎原材料", busCoun: "JC20181001-01", busNo: "FP2018001", busRecei: "280,000.00", endAdte: "2019-01-01" },
    { busName: "北京名品汽车轮胎生产商", busCouna: "购买轮胎原材料", busCoun: "JC20181001-01", busNo: "FP2018001", busRecei: "280,000.00", endAdte: "2019-01-01" },
    { busName: "北京名品汽车轮胎生产商", busCouna: "购买轮胎原材料", busCoun: "JC20181001-01", busNo: "FP2018001", busRecei: "280,000.00", endAdte: "2019-01-01" },
    { busName: "北京名品汽车轮胎生产商", busCouna: "购买轮胎原材料", busCoun: "JC20181001-01", busNo: "FP2018001", busRecei: "280,000.00", endAdte: "2019-01-01" },
    { busName: "北京名品汽车轮胎生产商", busCouna: "购买轮胎原材料", busCoun: "JC20181001-01", busNo: "FP2018001", busRecei: "280,000.00", endAdte: "2019-01-01" },
    { busName: "北京名品汽车轮胎生产商", busCouna: "购买轮胎原材料", busCoun: "JC20181001-01", busNo: "FP2018001", busRecei: "280,000.00", endAdte: "2019-01-01" },
    { busName: "北京名品汽车轮胎生产商", busCouna: "购买轮胎原材料", busCoun: "JC20181001-01", busNo: "FP2018001", busRecei: "280,000.00", endAdte: "2019-01-01" },
    { busName: "北京名品汽车轮胎生产商", busCouna: "购买轮胎原材料", busCoun: "JC20181001-01", busNo: "FP2018001", busRecei: "280,000.00", endAdte: "2019-01-01" }
  ]
  zhsx = [{
    edsfdj: "any"
  }]


  ngOnInit() {
    this.reqDdListData();
    this.spxq.termType = "月";
  }

  public myDatePickerOptions: IMyOptions = this.params.mdb_es;

  qx_show(i) {
    this.spxq.termType = this.TERM_TYPE[i].value;
    this.button_text = this.TERM_TYPE[i].label;
  }

  qx_btn = false;
  check_arr = new Array(this.tableData.length)

  quanXuan() {//全选
    setTimeout(() => {
      for (let i = 0; i < this.check_arr.length; i++) {
        this.check_arr[i] = this.qx_btn;
      }
    });
  }


}
