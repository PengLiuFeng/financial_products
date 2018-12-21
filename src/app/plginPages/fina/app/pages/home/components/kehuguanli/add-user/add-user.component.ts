import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, ModalDirective } from 'ng-uikit-pro-standard';
import { Location } from '@angular/common';
import { ParamsService } from './../../../../../params.service'
import { KehuxinxiComponent } from '../kehuxinxi/kehuxinxi.component';
// import { routes } from 'src/app/app.routing';
// import { style } from '@angular/animations';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Input() cuNo: any;
  @Input() lastPage: ModalDirective;
  @Input() nowPage: ModalDirective;
  @Output() cuNoChange:EventEmitter<Test> = new EventEmitter();
  model: any;
  modell: any;
  _http: any;
  isajax:any;
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  client: any = {
    idType: '',
    idNo: '',
    cifName: ''
  }
  public myDatePickerOptions: IMyOptions = {};
  constructor(private location: Location, private param: ParamsService) {
    this._http = param._http
  }
  testdata:any;
  //保存信息后向后台申请客户号
  requestData(fu:any){
    this.isajax=true
    this._http.post('/fina/custom/cardInsert',this.client,(e)=>{
      this.isajax=false
        this.cuNo=e.data.data.cuNo;
        fu();
        console.log(this.cuNo)
    },()=>{
      this.isajax=false
    }
    )
  }
  //请求得到下拉框的值
  requestselectData(){
    this.isajax=true
    this._http.get('/fina/dict/dictListList?ids=ID_TYPE',(e)=>{
        this.isajax=false
        this.testdata=e.data[0].data
    },()=>{
      this.isajax=false
    }
    )
  }
  ngOnInit() {
      this.requestselectData()
  }
  go_back(): void {
    this.location.back();
  }
  go_reset(): void {

  }
  tijiao(): void {
    //this.cuNo='20182000014'
    this.requestData(()=>{
      let newcuNO:Test=new Test(this.cuNo)  
      this.cuNoChange.emit(newcuNO)
    })
    
    this.client={
      idType: '',
      idNo: '',
      cifName: ''
    }
    this.lastPage.show()
    this.nowPage.hide()
  }
}
export class  Test{
  constructor(public cuNo:any){

  }
}