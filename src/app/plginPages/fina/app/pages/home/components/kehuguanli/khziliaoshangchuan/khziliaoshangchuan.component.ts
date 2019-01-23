import { Component, OnInit, Input ,OnChanges} from '@angular/core';
//import { ParamsService } from './../../../../../../params.service'
import { HttpHeaders } from '@angular/common/http';
import { BaHttpInterceptorService } from './../../../../../../../../theme/services/index'
import { GradeService } from './../../../../../grade.service';
import { MatExpansionPanelActionRow } from '@angular/material';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-khziliaoshangchuan',
  templateUrl: './khziliaoshangchuan.component.html',
  styleUrls: ['./khziliaoshangchuan.component.scss']
})
export class KhziliaoshangchuanComponent implements OnInit {

  httpHeaders: HttpHeaders = new HttpHeaders();
  //index = 0;
  @Input() minRow: number;
  beginNumber: number = 3;
  items = []
  //model是文件名，fileInfo是文件描述，checked是文件是否被选中的属性，power是文件的权限字段,flag判断是否上传成功
  item = { id: "oFInput", model: "", flag: "", fileInfo: "", checked: false, power:'filePower' }

  isAjax = false;

  constructor(private _http: BaHttpInterceptorService, public grande: GradeService) {
    this.httpHeaders.set('Content-Type', undefined);
  }
//监听事件
successFileNumber:number;  //上传成功的文件数
ngOnChanges(it : any){
  if(this.successFileNumber==this.items.length){
    alert(this.successFileNumber)
  }

}
  getFileName(it) {
    console.log(it)
    var fileName = document.querySelector("#" + it.id)['files'][0].name;
    it.model = fileName;
  }
  onup(oId: any, i: any) {
    this.isAjax = true;
    var uploadFile = document.querySelector("#" + oId)['files'][0];
    var fileInfo = this.items[i].fileInfo;
    var formData = new FormData();
    formData.append('file', uploadFile);//文件
    // formData.append('fileInfo',fileInfo);//文件描述
    this._http.post('/fina/uploadFile?fileInfo=' + fileInfo, formData, (e) => {
     this.successFileNumber++
      if (!e.data.file) {
        this.dangerShow(this.items[i].model + "上传失败");
        this.items[i].flag = "0";
      } else {
        this.items[i].flag = "1";

        var filePath = e.data.file.destination + e.data.file.newfilename;
        var oldFileName = e.data.file.originalname;
        var fileInfo = e.data.fileInfo;
        this.infoArr.push({ "filePath": filePath, "oldFileName": oldFileName, "fileInfo": fileInfo,"filePower":this.items[i].power});
        // console.log(filePath);
        // console.log(oldFileName);
        // console.log(fileInfo);
      }
      if (this.items[i].flag == "1") {
        this.flag += 1;
      }
    }, () => {
     this.successFileNumber++
      this.dangerShow("错误,请检查后重试");
    }, this.httpHeaders)
  }
  flag = 0;
  nullFlag = false;
  //启动上传
  infoArr = [];
  startUpload(): void {
    this.infoArr = [];

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].model != "") {
        this.onup(this.items[i].id, i);
      } else {
        this.successFileNumber++
        this.items[i].flag = '0';
        this.nullFlag = true;
      }
    }
    setTimeout(()=>{
      this.nullFlag = false;
    // this.closeItem();

    if (this.flag > 0) {
      this.dangerShow(this.flag + "个文件上传成功");
      this.flag = 0;
    } else {
      this.dangerShow("无文件");
    }
    this.isAjax = false;
    },2000)
  }
 
  createFileInput() {//添加一个文件框
    var val = Math.round(Math.random() * 1000000)
    this.item.id = "oFInput" + val;
    this.items.push(JSON.parse(JSON.stringify(this.item)));
    this.qx_btn = false;
  }
  deleteFileInput() {//删除文件框
    var sum = 0;
    this.items.forEach(explent => {
      if (explent.checked)
        sum++
    })
    if (!!sum) {
      var exitdo = confirm("您确定要删除这些文件吗？")
      if (!exitdo)
        return
    } else {
      alert("如果您需要删除文件，请先选择需要删除的文件")
      return
    }

    for (let i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i].checked) {
        this.items.splice(i, 1);
      }
    }
    console.log(this.items.length, this.beginNumber)
    if (this.items.length <= this.beginNumber) {
      var cycs = this.beginNumber - this.items.length;
      for (var i = 0; i < cycs; i++) {
        this.createFileInput();

      }
      this.dangerShow("前" + this.beginNumber + "个文件为默认文件，" + "不能删除默认选项");
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
  closeItem() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].flag == '1') {
        document.getElementById(this.items[i].id)['value'] = "";
        this.items[i].flag = "";
        this.items[i].model = "";
        this.items[i].fileInfo = "";
      }
    }
  }
  CustDataSub() {
    this._http.post('/fina/orders/CustDataSub', { arr: this.infoArr }, (e) => {
      this.isAjax = true;
      if (this.infoArr) {
        this.dangerShow("请先上传文件");
      }

      // console.log(e)
      if (e.data.t) {
        this.closeItem();
        this.infoArr = [];
        this.grande.sub.next({ type: "zltj", zltjFlag: e.data.steps });
      } else {
      }
      console.log(e)
      this.dangerShow(e.data.msg);
      this.isAjax = false;
    }, () => {
      this.dangerShow("错误,请检查后重试");
      this.isAjax = false;
    })
  }

ngOnInit() {
  if (this.minRow != null) {
    this.beginNumber = this.minRow;
  }
  for (var i = 0; i < this.beginNumber; i++) {
    this.createFileInput();
  }
}

}
