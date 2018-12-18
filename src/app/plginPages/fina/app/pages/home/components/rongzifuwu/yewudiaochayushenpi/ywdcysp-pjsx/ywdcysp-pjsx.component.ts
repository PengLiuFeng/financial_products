import { Component, OnInit, ViewChild } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../../params.service'

@Component({
  selector: 'app-ywdcysp-pjsx',
  templateUrl: './ywdcysp-pjsx.component.html',
  styleUrls: ['./ywdcysp-pjsx.component.scss']
})

export class YwdcyspPjsxComponent implements OnInit {

  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  constructor(public params:ParamsService) { }
  
  public myDatePickerOptions: IMyOptions =this.params.mdb_es;

  zhsx={
    authId:'',  //授信核准编号
    creRatin:"",  //客户评级信用等级
    authAmt:"",  //综合授信额度
    authBal:"",  //综合授信余额
    termMon:"",  //期限月
    authSts:"",  //综合授信状态
    begDate:"",  //综合授信起始日期
    endDate:"",  //综合授信结束日期
    recycle:"",  //额度使用方式(是否循环)
    authStsFreeze:"" //授信状态(此处用来查看是否冻结)
  }
  fxsx={
    finproNo:"",  //金融服务产品
    authSplitType:"",  //授信额度类型(存疑)
    authAmt:"",  //分项子额度
    authBal:"",  //分项子额度余额
    begDate:"",  //分项授信起始日期
    endDate:"",  //分项授信结束日期
    authAppNp:"" //授信协议编号
  }
  CRE_RATIN=[
    {label:"评级信用等级",disabled:"disabled"}
  ]
  AUTH_STS=[
    {label:"综合授信状态",disabled:"disabled"}
  ]
  FINPRO_NO=[
    {label:"金融服务产品",disabled:"disabled"}
  ]
  AUTH_SPLIT_TYPE=[
    {label:"分享授信额度类型",disabled:"disabled"}
  ]

  ngOnInit() {
  }

}
