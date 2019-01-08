import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-df-input',
  templateUrl: './df-input.component.html',
  styleUrls: ['./df-input.component.scss']
})
export class DfInputComponent implements OnInit {
  @Input() values:any;
  @Input() width:any;
  @Output() valuesChange=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  oninput(v){
   this.valuesChange.emit(v.target.value);
  }
}
