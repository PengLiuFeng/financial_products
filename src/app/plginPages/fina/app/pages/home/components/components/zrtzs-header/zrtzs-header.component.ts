import { Component, OnInit, ViewChild, Input,Output,EventEmitter } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-zrtzs-header',
  templateUrl: './zrtzs-header.component.html',
  styleUrls: ['./zrtzs-header.component.scss']
})
export class ZrtzsHeaderComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;

  @Input() radioModel:any;//准备接收数据(父组件传过来的值,用于判断切换按钮的状态)
  @Output() radioModelChange = new EventEmitter();
  constructor() { }

  khh="20070801-091";//假数据
  khmc= "739835608-X";
  sxxybh="BL20180101-001";

  ngOnInit() {
  }
  public myDatePickerOptions: IMyOptions = {};
}
