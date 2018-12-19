import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, turnState } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../params.service'
@Component({
  selector: 'app-shouxinxiangqing',
  templateUrl: './shouxinxiangqing.component.html',
  styleUrls: ['./shouxinxiangqing.component.scss']
})
export class ShouxinxiangqingComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @Input() dataObject:any;
  isShow:boolean = false;
  CRE_RATIN=[
    {label:"评级信用等级",disabled:"disabled"},
    {label:"AAA",value:"aaa"},
    {label:"SSS",value:"sss"}
  ]
  AUTH_STS=[
    {label:"综合授信状态",disabled:"disabled"},
    {label:"未使用",value:"0"},
    {label:"已使用",value:"1"},
    {label:"冻结",value:"2"},
    {label:"解冻",value:"3"},
    {label:"作废",value:"4"},
    {label:"终止",value:"9"}
  ]
  FINPRO_NO=[
    {label:"金融服务产品",disabled:"disabled"},
    {label:"保理",value:"0"},
    {label:"代采",value:"1"},
    {label:"小额信用贷款",value:"1"}
  ]
  AUTH_SPLIT_TYPT=[
    {label:"授信额度类型",disabled:"disabled"},
    {label:"应收类额度",value:"1"},
    {label:"预付类额度",value:"0"},
    {label:"存货类额度",value:"2"}
  ]

  //文本框的model
    zhsx={
      authId:'',
      creRatin:'',
      authAmt:'',
      authBal:'',
      termMon:'',
      authSts:'',
      begDate:'',//综合授信额度起始日期
      endDate:'',//综合授信额度终止日期
      recycle:false,
      edsfdj:false//额度是否冻结(暂时使用)
    }
    flywsx={
      authSplitTypt:'',
      finproNo:'',
      authBal:'',
      authAmt:'',
      begDate:'',//分项授信起始日期
      endDate:'',//分项授信终止日期
      authAppNo:'',
    }
  
    djxx={
      brNo:'',
      brName:'', 
      opName:'', 
      upOpName:'',
      txDate:'',//登记时间
      upDate:''//修改时间
    }
     
      
     
     
  
  
  

  zhu:string = "注 ：额度核准编号 + 金融产品号 + 分项授信额度类型 + 细分流水号";;//注释内容
  public show_fenlei:string;
  constructor(public params:ParamsService) { }

  public myDatePickerOptions: IMyOptions = this.params.mdb_es;


  ngOnInit() {
  }

}
