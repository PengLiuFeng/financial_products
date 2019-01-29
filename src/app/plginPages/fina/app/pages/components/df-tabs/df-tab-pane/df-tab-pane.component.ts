import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'df-tab-pane',
  templateUrl: './df-tab-pane.component.html',
  styleUrls: ['./df-tab-pane.component.scss']
})
export class DfTabPaneComponent implements OnInit {
  @Input() name:string;//数据
  @Input() label:string;//数据
  @Input() isshow:boolean=false;//数据
  constructor() { }

  ngOnInit() {
  }

}
