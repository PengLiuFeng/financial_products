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

  items=[
    {fileName:'文件名',fileInfo:"文件描述",fileAddress:"",fileReason:""},
    {fileName:'文件名',fileInfo:"文件描述",fileAddress:"",fileReason:""},
    {fileName:'文件名',fileInfo:"文件描述",fileAddress:"",fileReason:""},
    {fileName:'文件名',fileInfo:"文件描述",fileAddress:"",fileReason:""},
  ]
  itemslength:number=this.items.length;

  ngOnInit() {
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
        this.isAjax = false;
      }, () => {
        this.isAjax = false;
        this.dangerShow("错误,请检查后重试");
      })
    } else {
      this._http.post('/fina/orders/noticeDismissal', this.rejectData, (e) => {
         console.log(e)
        // console.log(typeof(e.data.data.rejectFlag)) //Boolean
        this.dangerShow(e.data.msg);//弹窗
        this.isAjax = false;
      }, () => {/*出现错误 弹窗提示*/
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

  rejectData = {
    disDesction: "驳回描述信息",
    procedure: 3,
    rejectFlag: true,
    id:1
  }
}
