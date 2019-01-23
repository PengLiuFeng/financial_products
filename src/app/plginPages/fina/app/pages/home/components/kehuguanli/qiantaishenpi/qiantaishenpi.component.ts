import { Component, OnInit, Input } from '@angular/core';
import { ModalDirective } from 'ng-uikit-pro-standard';
import { GradeService } from './../../../../../grade.service'
import { ParamsService } from './../../../../../params.service'

@Component({
  selector: 'app-qiantaishenpi',
  templateUrl: './qiantaishenpi.component.html',
  styleUrls: ['./qiantaishenpi.component.scss']
})
export class QiantaishenpiComponent implements OnInit {

  @Input() shenPiDemoBasic: ModalDirective;
  _http: any;
  constructor(public params: ParamsService, public grande: GradeService) {
    this._http = params._http;
  }

  items = [
    { fileName: '文件名1', fileInfo: "文件描述", fileAddress: "1", fileReason: "1111" },
    { fileName: '文件名', fileInfo: "文件描述", fileAddress: "2", fileReason: "2222" },
    { fileName: '文件名', fileInfo: "文件描述", fileAddress: "3", fileReason: "3333" },
    { fileName: '文件名', fileInfo: "文件描述", fileAddress: "4", fileReason: "4444" },
  ]
  itemslength: number;

  ngOnInit() {
    this.itemslength=this.items.length
  }
  approvalStatus: boolean;
  isAjax = false
  inforApproval() {
    this.isAjax = true;
    // alert(this.approvalStatus)
    // alert(this.grande.user.data.steps);
    // console.log(this.grande.user);
    if (this.approvalStatus) {
      this._http.get('/fina/orders/inforApproval?&id=' + 1, (e) => {
        console.log(e);
        if (e.data.t) {
        }
        this.dangerShow(e.data.msg);
        setTimeout(() => {
          this.grande.sub.next({ type: "qtsp"});
          this.closeShenPi();
        }, 1000);
        this.isAjax = false;
      }, () => {
        this.isAjax = false;
        this.dangerShow("错误,请检查后重试");
      })
    } else {
      this._http.get('/fina/orders/getSteps?&id=' + 1, (s) => {
        // console.log(s)
        // console.log(s.data.step)
        if (s.data.step == 3) {
          this._http.post('/fina/orders/noticeDismissal', this.rejectData, (e) => {
            // console.log(e)
            // console.log(typeof(e.data.data.rejectFlag)) //Boolean
            this.dangerShow(e.data.msg);//弹窗
            this.isAjax = false;
            setTimeout(() => {
              this.grande.sub.next({ type: "qtsp"});
              this.closeShenPi();
            }, 1000);
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
  danger_hid = true;//弹窗状态标识
  alertTxt: string;//弹窗内容

  dangerShow(str) {//弹窗
    this.alertTxt = str;
    this.danger_hid = false;//显示
    setTimeout(() => {//三秒后隐藏
      this.danger_hid = true
    }, 3000);
  }

  closeShenPi() {
    this.shenPiDemoBasic.hide();
  }

  addData = {
    cwbb: new Array(this.items.length),
    cwbbInfo: "",
    yyzz: new Array(this.items.length),
    yyzzInfo: "",
    qtzl: new Array(this.items.length),
    qtzlInfo: "",
  }
  rejectData = {
    disDesction: this.addData,
    procedure: 3,
    rejectFlag: true,
    id: 1
  }
  cwbb_btn = false;
  yyzz_btn = false;
  qtzl_btn = false;

  cwbb_arr = new Array(this.items.length);
  yyzz_arr = new Array(this.items.length);
  qtzl_arr = new Array(this.items.length);

  quanXuan(qx) {//全选
    if (qx == "cwbb") {
      setTimeout(() => {
        if (this.cwbb_btn) {//全选被选中的情况
          for (var j = 0; j < this.cwbb_arr.length; j++) {
            if (!this.cwbb_arr[j]) {
              this.addData.cwbb[j] = this.items[j];
            }
          }
        } else {
          this.addData.cwbb = new Array(this.items.length);
        }
        // console.log(this.addData)
        for (let i = 0; i < this.cwbb_arr.length; i++) {
          this.cwbb_arr[i] = this.cwbb_btn;
        }
      });
    } else if (qx == "yyzz") {
      setTimeout(() => {
        if (this.yyzz_btn) {//全选被选中的情况
          for (var j = 0; j < this.yyzz_arr.length; j++) {
            if (!this.yyzz_arr[j]) {
              this.addData.yyzz[j] = this.items[j];
            }
          }
        } else {
          this.addData.yyzz = new Array(this.items.length);
        }
        for (let i = 0; i < this.yyzz_arr.length; i++) {
          this.yyzz_arr[i] = this.yyzz_btn;
        }
      });
    } else if (qx == "qtzl") {
      setTimeout(() => {
        if (this.qtzl_btn) {//全选被选中的情况
          for (var j = 0; j < this.qtzl_arr.length; j++) {
            if (!this.qtzl_arr[j]) {
              this.addData.qtzl[j] = this.items[j];
            }
          }
        } else {
          this.addData.qtzl = new Array(this.items.length);
        }
        for (let i = 0; i < this.qtzl_arr.length; i++) {
          this.qtzl_arr[i] = this.qtzl_btn;
        }
      });
    }
  }

  addition(str, i) {
    // console.log(str)
    setTimeout(() => {
      if (str == "cwbb") {
        // console.log(this.cwbb_arr[i])
        if (this.cwbb_arr[i]) {
          this.addData.cwbb[i] = this.items[i];
        } else {
          this.addData.cwbb[i] = {};
        }
      } else if (str == "yyzz") {
        // console.log(this.yyzz_arr[i])
        if (this.yyzz_arr[i]) {
          this.addData.yyzz[i] = this.items[i];
        } else {
          this.addData.yyzz[i] = {};
        }
      } else if (str == "qtzl") {
        // console.log(this.qtzl_arr[i])
        if (this.qtzl_arr[i]) {
          this.addData.qtzl[i] = this.items[i];
        } else {
          this.addData.qtzl[i] = {};
        }
      }
    });
    // console.log(this.addData)
  }
}
