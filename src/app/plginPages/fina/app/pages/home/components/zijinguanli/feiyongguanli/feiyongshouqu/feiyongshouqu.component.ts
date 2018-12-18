import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-feiyongshouqu',
  templateUrl: './feiyongshouqu.component.html',
  styleUrls: ['./feiyongshouqu.component.scss']
})
export class FeiyongshouquComponent implements OnInit {
  @Input() inputdata : any;
  feeTypes:any;
  payCds:any;
  feeFlgs:any;
  payOrders:any; 
  constructor() { }
  optionsSelect:any;
  ngOnInit() {
  }

}
