import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, ModalDirective } from 'ng-uikit-pro-standard';
import { Location } from '@angular/common';
import { ParamsService } from './../../../../../params.service'
import { KehuxinxiComponent } from '../kehuxinxi/kehuxinxi.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  InputData: any = {
    cuNo: '',
    personPage: 'newUser'
  }
  @Input() lastPage: ModalDirective;
  @Input() nowPage: ModalDirective;
  @Output() cuNoChange: EventEmitter<any> = new EventEmitter();
  model: any;
  modell: any;
  _http: any;
  isajax: any;
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  client: any = {
    idType: '',
    idNo: '',
    cuName: ''
  }

  public myDatePickerOptions: IMyOptions = {};
  constructor(private location: Location, private param: ParamsService) {
    this._http = param._http
  }
  idTypes: any;
  //保存信息后向后台申请客户号
  requestData(fu: any) {
    this.isajax = true
    this._http.post('/fina/custom/cardInsert', this.client, (e) => {
      this.isajax = false
      console.log(e)
      if (e.data.t == 1) {
        this.InputData.cuNo = e.data.data.cuNo;
        fu();
      }
      else if (e.data.msg = "该用户已存在！") {
        alert("该用户已存在，不可重复添加")
      }


    }, () => {
      this.isajax = false
    }
    )
  }
  //请求得到下拉框的值
  requestselectData() {
    this.isajax = true
    this._http.get('/fina/dict/dictListList?ids=ID_TYPE', (e) => {
      this.isajax = false
      this.idTypes = e.data[0].data
    }, () => {
      this.isajax = false
    }
    )
  }
  ngOnInit() {
    this.requestselectData()
  }
  //重置
  go_reset() {
    this.client = {
      idType: '',
      idNo: '',
      cuName: ''
    }
  }
  checkData(): boolean {

    if (this.client.idType != null && this.client.idType != '') {
      if (this.client.idNo != null && this.client.idNo != '') {
        if (this.client.cuName != null && this.client.cuName != '') {
          
          console.log(this.client.idType)
          if (this.client.idType == '1')
            var checkidNo = new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)
          else if (this.client.idType == '2')
            var checkidNo = new RegExp(/[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}/g)
          else if (this.client.idType == '9')
            var checkidNo = new RegExp(/^\w$/)
            // var checkidNo=new RegExp(/^[\u4e00-\u9fa5]{2,4}/)
          if (checkidNo.test(this.client.idNo) === false) {
            alert("输入的证件号不正确，请确认后再次填写")
            return false
          }
          if (this.client.cuName.length<1||this.client.cuName>30) {
            alert("姓名输入不符合规则，请输入长度在30位以内的姓名")
            return false
          }
          
          return true
        } else {
          alert("您必须向我们提供您的Name，这样我们才能知道您是谁！")
          return false
        }
      } else {
        alert("您忘了填写正确的证件号码，这样我们将无法准确的为您提供服务！")
        return false
      }
    } else {
      alert("请先选择证件类型！")
      return false
    }
  }

  tijiao(): void {
    if (this.checkData()) {
      this.requestData(() => {
        //let newcuNO: Test = new Test(this.cuNo)
        this.cuNoChange.emit(this.InputData)
        this.lastPage.show()
        this.nowPage.hide()
      })
      this.client = {
        idType: '',
        idNo: '',
        cifName: ''
      }
    }
  }

}
