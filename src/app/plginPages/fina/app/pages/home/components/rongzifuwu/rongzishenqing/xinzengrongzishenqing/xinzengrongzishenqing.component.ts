import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-xinzengrongzishenqing',
  templateUrl: './xinzengrongzishenqing.component.html',
  styleUrls: ['./xinzengrongzishenqing.component.scss']
})
export class XinzengrongzishenqingComponent implements OnInit {
  testarray:any;
  constructor(private location : Location) { }
  ID_type:Array<any>;
  ngOnInit() {
    this.testarray={
      idType:[],
      idNo:'',
      cifNmae:'',
    }
  }
  go_back() : void{
    this.location.back();
  }
  tijiao(){}
}
