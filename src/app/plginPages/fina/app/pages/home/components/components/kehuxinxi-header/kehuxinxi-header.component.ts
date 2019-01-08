import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-kehuxinxi-header',
  templateUrl: './kehuxinxi-header.component.html',
  styleUrls: ['./kehuxinxi-header.component.scss']
})
export class KehuxinxiHeaderComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;


  @Input() cuNo: any;  
  @Input() personPage: any;
  @Input() radioModel: any;//准备接收数据(父组件传过来的值,用于判断切换按钮的状态)
  constructor() { }
  ngOnInit() {
  }
  public myDatePickerOptions: IMyOptions = {};
}

