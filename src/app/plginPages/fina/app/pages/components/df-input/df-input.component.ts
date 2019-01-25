import { Component, Input,Output, EventEmitter,ContentChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-df-input',
  templateUrl: './df-input.component.html',
  styleUrls: ['./df-input.component.scss']
})
export class DfInputComponent {
  @ContentChild('content') ref: ElementRef;
  @Input() values:any;
  @Input() placeholder:any;
  @Input() disabled:boolean;
  @Input() size:any;
  @Input() type:any;
  @Input() width:any;
  @Output() valuesChange=new EventEmitter();
  @Input() slot:any;
  @Input() slotType:any;
  @Input() parentClass:string;
  constructor() { }

  
  oninput(v){
   this.valuesChange.emit(v.target.value);
  }
  jsclass(size,slot):any{
    let jsons={};
    if(size){
      jsons['qloud-input--'+size]=true;
    }
    if(slot){
      slot=slot.split(',')
      for(let i=0;i<slot.length;i++){
        jsons['qloud-input-group--'+slot]=true;
      }
    }
    return jsons;
  }
  ngAfterViewInit(){
    // console.log('页面已加载完毕')
  }
  kk(e){
    if(e){
      this.slot=e.nativeElement.getAttribute('slot')
    }
  }
}
