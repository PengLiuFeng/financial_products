import { Component,ViewChild, OnInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-lianxixinxi',
  templateUrl: './lianxixinxi.component.html',
  styleUrls: ['./lianxixinxi.component.scss']
})
export class LianxixinxiComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
lxxx={
  apPer:"",
  apIdNo:"",
  apHoldNo:"",
  apPhone:"",
  apAddr:"",
  apMate:"",
  apMateIdNo:"",
  commPer:"",
  commTel:"",
  cifFax:"",
  comAddr:"",
  webUrl:"",
  email:"",
  apSex:"",
  apIdType:"",
  apMateIdType:""
}
  /*model的准备 */

  AP_SEX=[
    {label:"法定代表人性别",disabled:"disabled"},
    {label:"男",value:"1"},
    {label:"女",value:"0"}
    
  ]
  AP_ID_TYPE=[
    {label:"法定代表人证件类型",disabled:"disabled"},
    {label:"身份证",value:"1"},
    {label:"统一社会信用代码证",value:"0"}
  ]
  AP_MATE_ID_TYPE=[
    {label:"法定代表人配偶证件类型",disabled:"disabled"},
    {label:"身份证",value:"1"},
    {label:"统一社会信用代码证",value:"0"}
  ]
  constructor() { }

  ngOnInit() {
  }

  public myDatePickerOptions: IMyOptions = {};
}
