import { Component, OnInit, Input } from '@angular/core';
import { ModalDirective } from 'ng-uikit-pro-standard';
import { ParamsService } from './../../../../params.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() registerDemoBasic: ModalDirective;

  _http: any;
  constructor(private params: ParamsService) {
    this._http = params._http;
  }
  loginUser = {
    userName: "",
    pwd: "",
    affirmPwd: ""
  }
  ngOnInit() {
  }
  reSetModel() {
    this.loginUser = {
      userName: "",
      pwd: "",
      affirmPwd: ""
    }
  }
  danger_hid = true;
  alertTxt = '';
  dangerShow(str) {
    this.alertTxt = str;
    this.danger_hid = false;
    setTimeout(() => {
      this.danger_hid = true
    }, 3000);
  }
  cancel() {
    this.reSetModel();
    this.registerDemoBasic.hide();
  }
  subReg() {
    if (this.loginUser.userName && this.loginUser.pwd) {
      if (this.loginUser.pwd == this.loginUser.affirmPwd) {
        this.registerAccount()
      } else {
        this.dangerShow("两次输入密码不一致");
      }
    } else {
      this.dangerShow("账号或密码不能为空");
    }
  }
  isAjax = false;

  registerAccount() {
    this.isAjax = true;
    this._http.post('/fina/registerAccount', this.loginUser, (e) => {
      console.log(e)
      if (e.data.t) {
        this.dangerShow("注册成功");
        setTimeout(() => {
          this.cancel();
        }, 1000);
      }
      this.dangerShow(e.data.msg);
    }, () => {
      this.isAjax = false;
    })
  }
}
