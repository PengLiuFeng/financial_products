import { Component, ViewChild ,OnInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
import { Location } from '@angular/common';
// import { routes } from 'src/app/app.routing';
// import { style } from '@angular/animations';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  model: any;
  modell: any;
  client:any;
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;

  public myDatePickerOptions: IMyOptions = {};
  constructor(private location:Location) { }
  testdata=[
    {value:'1',label:'身份证'},
    {value:'2',label:'统一社会信用代码'},
  ]
  ngOnInit() {
    this.client={
      idType:[],
      idNo:'',
      cifName:'',

    }
  }
  go_back() : void{
      this.location.back();
  }
  go_reset():void{
    this.client={
      idType:[],
      idNo:'',
      cifName:'',
    }
  }
  tijiao():void{ }
}
