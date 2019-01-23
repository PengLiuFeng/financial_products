import { Component, OnInit, Input } from '@angular/core';
import { ModalDirective } from 'ng-uikit-pro-standard';
import { GradeService } from './../../../../../grade.service'
import { ParamsService } from './../../../../../params.service'

@Component({
  selector: 'app-zhongshen',
  templateUrl: './zhongshen.component.html',
  styleUrls: ['./zhongshen.component.scss']
})
export class ZhongshenComponent implements OnInit {
  @Input() zhongShenDemoBasic: ModalDirective;
  _http: any;
  isAjax = false;

  constructor(public params: ParamsService, public grande: GradeService) {
    this._http = params._http;
  }
  approvalStatus: boolean;
  addData = {
    companyImp: "",
    qtzlInfo: "",
  }
  rejectData = {
    disDesction: this.addData,
    procedure: 5,
    rejectFlag: true,
    id: 1
  }
  ngOnInit() {
  }
  closeShenPi() {
    this.zhongShenDemoBasic.hide();
  }
  danger_hid = true;//弹窗状态标识
  alertTxt: string;//弹窗内容

  dangerShow(str) {//弹窗
    this.alertTxt = str;
    this.danger_hid = false;//显示
    setTimeout(() => {//三秒后隐藏
      this.danger_hid = true
    }, 3000);
  }
  inforApproval() {
    this.isAjax = true;
    if (this.approvalStatus) {
      this._http.get('/fina/orders/ultimateApprove?&id=' + 1, (e) => {
         console.log(e);
        if (e.data.t) {
          setTimeout(() => {
            this.grande.sub.next({ type: "qtsp" });
            this.closeShenPi();
          }, 1000);
        }
        this.dangerShow(e.data.msg)
        this.isAjax = false;
      }, () => {
        this.isAjax = false;
        this.dangerShow("错误,请检查后重试");
      })
    } else {
      this._http.get('/fina/orders/getSteps?&id=' + 1, (s) => {
        //  console.log(s)
        // console.log(s.data.step)
        if (s.data.step == 5) {
          this._http.post('/fina/orders/noticeDismissal', this.rejectData, (e) => {
            console.log(e)
            // console.log(typeof(e.data.data.rejectFlag)) //Boolean
            this.dangerShow(e.data.msg);//弹窗
            this.isAjax = false;
            if (e.data.t) {
              setTimeout(() => {
                this.grande.sub.next({ type: "qtsp" });
                this.closeShenPi();
              }, 1000);
            }
          }, () => {/*出现错误 弹窗提示*/
            this.dangerShow("失败 请重试");
            this.isAjax = false;
          })
        } else {
          this.dangerShow("权限不足");
          this.isAjax = false;
        }
      }, () => {
        this.dangerShow("失败 请重试");
        this.isAjax = false;
      })
    }
  }
}