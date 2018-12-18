//融资申请详情
import { Component, OnInit } from '@angular/core';
//import {Location} from '@angular/common';
@Component({
  selector: 'app-sq-xx',
  templateUrl: './sq-xx.component.html',
  styleUrls: ['./sq-xx.component.scss']
})
export class SqXxComponent implements OnInit {
  bo:boolean=false;
  apppage:any='rqsqxq';
  constructor() { }

  ngOnInit() {
  }
  opens(date:any):void{
    if(date=='khjbxx')
    this.apppage='khjbxx';
    else if(date=='myxx')
    window.location.href="http://www.qloudchain.com:9111/login";
    else if(date=='rqsqxq')
    this.apppage='rqsqxq';

  }
}
