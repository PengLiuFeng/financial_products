import { Component, ViewChild,Input, OnInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
import { Location} from '@angular/common';
import { JibenxinxiComponent } from './../../kehuguanli/jibenxinxi/jibenxinxi.component';
import { LianxixinxiComponent } from './../../kehuguanli/lianxixinxi/lianxixinxi.component';

@Component({
  selector: 'app-zonghexinxi',
  templateUrl: './zonghexinxi.component.html',
  styleUrls: ['./zonghexinxi.component.scss']
})
export class ZonghexinxiComponent implements OnInit {
  @Input() id:any ;
  apps:any='jbxx';
  model: any;
  modell: any;
  bo:boolean =false;
  
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  public myDatePickerOptions: IMyOptions = {};
  Client={
    Client_name:'pater',
    Client_no: 4621500168,
    Id_type: '身份证',
    Id_no: '1320135468465773X',
  }
  constructor( private location:Location) { }

  ngOnInit() {
  }
  goback():void{
    this.location.back();
  }
  opens(t:any):void{
    this.apps=t;
  }
  gaibian() {
    if(this.bo==false)
      this.bo=true;
    else
      this.bo=false;
  }
  

}
