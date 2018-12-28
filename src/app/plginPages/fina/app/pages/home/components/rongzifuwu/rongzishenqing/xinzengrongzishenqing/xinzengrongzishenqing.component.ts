import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { ModalDirective } from 'ng-uikit-pro-standard';
import { Location } from '@angular/common';
import { ParamsService } from './../../../../../../params.service';

@Component({
  selector: 'app-xinzengrongzishenqing',
  templateUrl: './xinzengrongzishenqing.component.html',
  styleUrls: ['./xinzengrongzishenqing.component.scss']
})
export class XinzengrongzishenqingComponent implements OnInit {
  @Input() nowPage:ModalDirective;
  @Input() lastPage:ModalDirective;
  @Output() OutputData:EventEmitter<any> =new EventEmitter();
  constructor(private location : Location,private params:ParamsService) { 
    this._http=params._http
  }
  idTypes:Array<any>;
  _http:any;
  testarray:any={
    idType:'',
    idNo:'',
    cifNmae:'',
  }
  //请求下拉框的数据
  requestselectData() {
    this._http.get('/fina/dict/dictListList?ids=ID_TYPE', (e) => {
      this.idTypes = e.data[0].data
    }, () => {
    }
    )
  }
  //发送融资申请用户注册请求
  requestData(){
    this._http.post('/fina/fa/idValidate',this.testarray,(e)=>{
      console.log(e)
    },()=>{})
  }
  ngOnInit() {
    this.requestselectData()
  }
  go_back() : void{
    this.location.back();
  }
  tijiao(){
    this.requestData();

  }
}
