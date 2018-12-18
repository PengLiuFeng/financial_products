import { Component, OnInit,Input } from '@angular/core';
import { Location} from '@angular/common';

@Component({
  selector: 'app-yszkhg-xx',
  templateUrl: './yszkhg-xx.component.html',
  styleUrls: ['./yszkhg-xx.component.scss']
})
export class YszkhgXxComponent implements OnInit {
  @Input() data:any
  isChildRouteLoaded = false;
  change(){
    this.isChildRouteLoaded=false;
  }
  change1(){
    this.isChildRouteLoaded=true;
  }
  constructor(
    private location:Location
  ) { }

  goback():void{
    this.location.back();
  }

  ngOnInit() {
  }

}
