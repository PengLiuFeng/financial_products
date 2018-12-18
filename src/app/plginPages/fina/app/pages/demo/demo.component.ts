import { Component,ViewChild, OnInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  model: any;
  modell: any;
  isShow=false;
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;

  public myDatePickerOptions: IMyOptions = {};
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.isShow=true;
    },3000)
  }

}
