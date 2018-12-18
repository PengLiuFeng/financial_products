import { Component, OnInit, ViewChild } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../../params.service'
@Component({
  selector: 'app-shenpixiangqing',
  templateUrl: './shenpixiangqing.component.html',
  styleUrls: ['./shenpixiangqing.component.scss']
})
export class ShenpixiangqingComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  constructor(public params:ParamsService) { }
  spxq={
    authId:"",  //授信核准编号
    authAppNo:"", //授信协议编号
    finproNm:"",  //服务金融产品
    busType:"", //业务类型
    payType:"", //付款方式
    singBus:"",  //是否单笔业务
    busUse:"",  //融资用途
    mayAmt:"",  //单据对应可融资金额
    auAmt:"", //本次融资申请金额
    auRate:"",  //利率
    term:"",  //期限
    termType:"",  //期限类型
    begDate:"", //融资申请审批日期
    endDate:"", //融资申请到期日期
    vouFlt:"",  //担保比例
    vouAmt:"",  //担保金额
    filler:"",  //其他事项(备注)
    brNo:"",  //登记单位
    brName:"",  //登记单位名称
    opName:"",  //登记人名称
    upOpName:"",  //修改人名称
    createTime:"",  //登记时间
    updateTime:""  //修改时间
  }
  FINPRO_NM=[
    {label:"金融服务产品",disabled:"disabled"}
  ]
  BUS_TYPE=[
    {label:"业务类型",disabled:"disabled"}
  ]
  PAY_TYPE=[
    {label:"付款方式",disabled:"disabled"}
  ]
  BUS_USE=[
    {label:"融资用途",disabled:"disabled"}
  ]
  
  TERM_TYPE=[
    {label:'年',value:'0'},
    {label:'月',value:'1'},
    {label:'日',value:'2'}
  ]
  button_text='月'

  tableData=[
    {busName:"北京名品汽车轮胎生产商", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endAdte:"2019-01-01"},
    {busName:"北京名品汽车轮胎生产商", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endAdte:"2019-01-01"},
    {busName:"北京名品汽车轮胎生产商", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endAdte:"2019-01-01"},
    {busName:"北京名品汽车轮胎生产商", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endAdte:"2019-01-01"},
    {busName:"北京名品汽车轮胎生产商", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endAdte:"2019-01-01"},
    {busName:"北京名品汽车轮胎生产商", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endAdte:"2019-01-01"},
    {busName:"北京名品汽车轮胎生产商", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endAdte:"2019-01-01"},
    {busName:"北京名品汽车轮胎生产商", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endAdte:"2019-01-01"},
    {busName:"北京名品汽车轮胎生产商", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endAdte:"2019-01-01"},
    {busName:"北京名品汽车轮胎生产商", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endAdte:"2019-01-01"},
    {busName:"北京名品汽车轮胎生产商", busCouna:"购买轮胎原材料", busCoun:"JC20181001-01", busNo:"FP2018001", busRecei:"280,000.00", endAdte:"2019-01-01"}
   ]
   zhsx=[{
    edsfdj:"any"
   }]
   

  ngOnInit() {
    this.spxq.termType=this.TERM_TYPE[1].value
  }

  public myDatePickerOptions: IMyOptions =this.params.mdb_es;

  qx_show(i){
    this.spxq.termType = this.TERM_TYPE[i].value;
    this.button_text = this.TERM_TYPE[i].label;
  }

  qx_btn=false;
  check_arr=new Array(this.tableData.length)

  quanXuan(){//全选
    setTimeout(() => {
      for (let i = 0 ; i < this.check_arr.length ; i++) {
        this.check_arr[i] = this.qx_btn;
     }
    });
  }

  
}
