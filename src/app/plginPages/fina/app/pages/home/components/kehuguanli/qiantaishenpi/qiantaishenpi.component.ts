import { Component, OnInit, Input } from '@angular/core';
import { ModalDirective } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-qiantaishenpi',
  templateUrl: './qiantaishenpi.component.html',
  styleUrls: ['./qiantaishenpi.component.scss']
})
export class QiantaishenpiComponent implements OnInit {

  @Input() shenPiDemoBasic:ModalDirective;

  constructor() { }

  items=[
    {fileName:'文件名',fileInfo:"文件描述",fileAddress:"",fileReason:""},
  ]

  ngOnInit() {
  }
  closeShenPi(){
    this.shenPiDemoBasic.hide();
  }

}
