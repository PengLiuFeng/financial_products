import { Component, OnInit } from '@angular/core';
import { UploadInput } from 'ng-uikit-pro-standard';
//import { ParamsService } from './../../../../../../params.service'
import { HttpHeaders } from '@angular/common/http';
import { BaHttpInterceptorService } from './../../../../../../../../theme/services/index'
@Component({
  selector: 'app-khziliaoshangchuan',
  templateUrl: './khziliaoshangchuan.component.html',
  styleUrls: ['./khziliaoshangchuan.component.scss']
})
export class KhziliaoshangchuanComponent implements OnInit {

  httpHeaders: HttpHeaders = new HttpHeaders();
  //index = 0;
  items = [{ id: "oFInput", model: "", flag: "", fileInfo: "", checked: false }];

  isAjax = false;

  constructor(private _http: BaHttpInterceptorService) {
    this.httpHeaders.set('Content-Type', undefined);
  }

  getFileName(it) {
    var fileName = document.querySelector("#" + it.id)['files'][0].name;
    it.model = fileName;
  }

  onup(oId, i) {
    this.isAjax = true;
    var uploadFile = document.querySelector("#" + oId)['files'][0];
    var fileInfo = this.items[i].fileInfo;
    var formData = new FormData();
    formData.append('file', uploadFile);//文件
    // formData.append('fileInfo',fileInfo);//文件描述
    this._http.post('/fina/uploadFile?fileInfo=' + fileInfo, formData, (e) => {
      console.log(e)
      if (!e.data.file) {
        this.dangerShow(this.items[i].model + "上传失败");
        this.items[i].flag = "0";
      } else {
        this.items[i].flag = "1";
      }
      if (this.items[i].flag == "1") {
        this.flag += 1;
      }
    }, () => {
      this.dangerShow("错误,请检查后重试");
    }, this.httpHeaders)
  }
  flag = 0;
  nullFlag = false;
  //启动上传
  startUpload(): void {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].model != "") {
        this.onup(this.items[i].id, i);
      } else {
        this.items[i].flag = '0';
        this.nullFlag = true;
      }
    }
    setTimeout(() => {
      this.nullFlag = false;
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].flag == '1') {
          document.getElementById(this.items[i].id)['value'] = "";
          this.items[i].flag = "";
          this.items[i].model = "";
          this.items[i].fileInfo = "";
        }
      }
      if (this.flag > 0) {
        this.dangerShow(this.flag + "个文件上传成功");
        this.flag = 0;
      } else {
        this.dangerShow("无文件");
      }
      this.isAjax = false;
    }, 3000);
  }

  createFileInput() {//添加一个文件框
    var val = Math.round(Math.random() * 1000000)
    this.items.push({ id: "oFInput" + val, model: "", flag: "", fileInfo: "", checked: false });
    //this.index++;
    this.qx_btn = false;
  }
  deleteFileInput() {//删除文件框
    for (let i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i].checked) {
        if (i) {
          this.items.splice(i, 1);
          //this.index--;
        } else {
          this.dangerShow("不能删除默认选项");
          document.getElementById(this.items[i].id)['value'] = "";
          this.items[i].flag = "";
          this.items[i].model = "";
          this.items[i].fileInfo = "";
          this.items[0].checked = false;
        }
      }
    }
    this.qx_btn = false;
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
  qx_btn = false;
  quanXuan() {//全选
    setTimeout(() => {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].checked = this.qx_btn;
      }
    });
  }
  ngOnInit() {
  }

}
