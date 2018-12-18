import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-xinzengshouxin',
  templateUrl: './xinzengshouxin.component.html',
  styleUrls: ['./xinzengshouxin.component.scss']
})
export class XinzengshouxinComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @Input() newInfoDemoBasic:any;
  @Input()newDemoBasic:any;
 
  ID_TYPE = [
    {label:"请选择证件类型",disabled:"disabled"},
    {label:"统一信用代码证",value:"tyxydmz"},
    {label:"身份证",value:"sfz"}
  ]
  constructor() { }
  xzsx={
  idType:"",
  idNo:"",
  cuName:""
  }
  ngOnInit() {
  }
  public myDatePickerOptions: IMyOptions = {};
}
