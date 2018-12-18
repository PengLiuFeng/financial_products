import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-fafangxinxi',
  templateUrl: './fafangxinxi.component.html',
  styleUrls: ['./fafangxinxi.component.scss']
})
export class FafangxinxiComponent implements OnInit {
  @Input() inputdata:any;
  
  constructor() { }
  optionsSelect:any;
  ngOnInit() {
  
  }

}
