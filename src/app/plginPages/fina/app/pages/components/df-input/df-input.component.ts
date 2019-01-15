import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-df-input',
  templateUrl: './df-input.component.html',
  styleUrls: ['./df-input.component.scss']
})
export class DfInputComponent implements OnInit {
  @Input() values:any;
  @Input() placeholder:any;
  @Input() disabled:boolean;
  @Input() size:any;
  @Input() type:any;
  @Input() width:any;
  @Output() valuesChange=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  oninput(v){
   this.valuesChange.emit(v.target.value);
  }
  jsclass(size):any{
    if(size){
      let jsons={};
      jsons['.qloud-input--'+size]=true;
      return jsons;
    }
  }
}
