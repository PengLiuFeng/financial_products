import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { ParamsService } from './../../../../../../params.service'

@Component({
  selector: 'app-htqs-index',
  templateUrl: './htqs-index.component.html',
  styleUrls: ['./htqs-index.component.scss']
})
export class HtqsIndexComponent implements OnInit {
  @Input() top:string;
  @Input() demoBasic;
  @Input() isedit:any;

  constructor(private params:ParamsService) { }
  
  ngOnInit() {
  }

}
