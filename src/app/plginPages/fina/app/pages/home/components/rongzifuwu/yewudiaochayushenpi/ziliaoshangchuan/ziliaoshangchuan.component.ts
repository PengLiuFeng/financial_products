import { Component, EventEmitter, OnInit } from '@angular/core';
import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-ziliaoshangchuan',
  templateUrl: './ziliaoshangchuan.component.html',
  styleUrls: ['./ziliaoshangchuan.component.scss']
})
export class ZiliaoshangchuanComponent implements OnInit {

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  dragOver: boolean;

  index = 0;
  items = [this.index];
  constructor() {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
  }

  //启动上传
  startUpload(): void {
    const AJAX: UploadInput = {
      type: 'uploadAll',
      url: '',//上传文件的接口
      method: 'POST',
      data: { foo: 'bar' },
    };
    this.files = [];
    this.uploadInput.emit(AJAX);
  }

  createFileInput() {
    this.items.push(++this.index);
    console.log(this.items)
  }
  deleteFileInput() {//删除一个文件框
    if (this.index) {
      this.items.splice(this.index--, 1);
    } else {
      this.dangerShow("已经是最后一条了")
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
  ngOnInit() {
  }

}
