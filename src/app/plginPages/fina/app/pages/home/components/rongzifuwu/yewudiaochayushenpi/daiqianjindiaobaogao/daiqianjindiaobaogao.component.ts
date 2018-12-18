import { Component, OnInit, ViewChild } from '@angular/core';
import { IMyOptions, MDBDatePickerComponent } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../../../params.service';

@Component({
  selector: 'app-daiqianjindiaobaogao',
  templateUrl: './daiqianjindiaobaogao.component.html',
  styleUrls: ['./daiqianjindiaobaogao.component.scss']
})
export class DaiqianjindiaobaogaoComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  
  BUS_TYPE=[
    {label:"业务类型",value:"23"}
  ]

  dqjd={
    authAppNo:"", //授信协议编号
    busType:"", //业务类型
    adjustDate:"",  //尽调时间
    dajustPlace:"", //尽调地点
    adjustOpName:"",  //尽调人员名称
    adjustContext:""  //尽调内容
  }

  public myDatePickerOptions: IMyOptions =this.params.mdb_es;

  constructor(public params:ParamsService) { }

  ngOnInit() {
  }

}
