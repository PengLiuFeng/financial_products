import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng-uikit-pro-standard';
import { Location } from '@angular/common';
import { ParamsService } from './../../../../../../params.service';

@Component({
  selector: 'app-xinzengrongzishenqing',
  templateUrl: './xinzengrongzishenqing.component.html',
  styleUrls: ['./xinzengrongzishenqing.component.scss']
})
export class XinzengrongzishenqingComponent implements OnInit {
  @Input() nowPage: ModalDirective;
  @Input() lastPage: ModalDirective;
  @Output() OutputData: EventEmitter<any> = new EventEmitter();
  constructor(private location: Location, private params: ParamsService) {
    this._http = params._http
  }
  InputData: any = {
    authId: '',
    personPage: 'newPage',
  }
  idTypes: Array<any>;
  _http: any;
  testarray: any = {
    idType: '',
    idNo: '',
    cifNmae: '',
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
  requestData(fu: any) {
    this._http.post('/fina/fa/idValidate', this.testarray, (e) => {
      console.log(e)
      if (e.data.t==0){
        this.dangerShow('请求失败，请重新添加融资申请');
      }
      if(e.data.t==1){
        if(e.data.msg=="接口异常！"){
          this.dangerShow('对不起，接口出现异常，请及时联系管理员');

        }if(e.data.msg==""){
          this.dangerShow('该用户不存在，请再次确认后提交申请');
        }
      }
        fu();
    }, () => { })
  }
  ngOnInit() {
    this.requestselectData()
  }
  go_back(): void {
    this.location.back();
  }
  //当注册出现异常时提示
  danger_hid = true;
  alertText = '';
  dangerShow(str) {
    this.alertText = str;
    this.danger_hid = false;
    setTimeout(() => {
      this.danger_hid = true
    }, 3000);
  }
  tijiao() {
    this.requestData(() => {
      this.InputData.personPage="newPage";
      this.OutputData.emit(this.InputData)
      this.nowPage.hide();
      this.lastPage.show();
    });

  }
}
