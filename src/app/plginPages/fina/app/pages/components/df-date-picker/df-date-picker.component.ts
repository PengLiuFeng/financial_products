import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'df-date-picker',
  templateUrl: './df-date-picker.component.html',
  styleUrls: ['./df-date-picker.component.scss']
})
export class DfDatePickerComponent implements OnInit {
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

  ngOnInit() {
  }

}
