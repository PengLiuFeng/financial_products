import { Component, OnInit,ElementRef,EventEmitter,Input,Output,ContentChildren,QueryList } from '@angular/core';
import { DfTabPaneComponent } from './df-tab-pane/df-tab-pane.component';

@Component({
  selector: 'df-tabs',
  templateUrl: './df-tabs.component.html',
  styleUrls: ['./df-tabs.component.scss']
})
export class DfTabsComponent implements OnInit {
  @Input() options:Array<any>;//数据
  @Input() values:string;//数据
  @Output() valuesChange=new EventEmitter();
  @ContentChildren(DfTabPaneComponent)childCmps: QueryList<DfTabPaneComponent>;
  optionsArr=[];
  dqit:DfTabPaneComponent;
  dq={
    option:{
      name:''
    }
  }
  constructor(private el:ElementRef) { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    this.dq.option.name=this.values;
    this.childCmps.forEach((item: DfTabPaneComponent, i: number) => {
      this.optionsArr.push(item)
    });
    if(this.optionsArr.length>0){
      if(!this.dq.option.name){
        this.dq.option.name=this.optionsArr[0].name;
      }
      this.dqit=this.optionsArr[0];
      this.dqit.isshow=true;
    }
}
tapit(it:DfTabPaneComponent,e){
  console.log(typeof e,e)
  if(this.dqit!=it){
      it.isshow=true;
      if(this.dqit){
        this.dqit.isshow=false;
      }
      this.dq.option.name=it.name;
      this.dqit=it;
    }
  }
}
