import { Component, OnInit } from '@angular/core';
import { UploadInput } from 'ng-uikit-pro-standard';
//import { ParamsService } from './../../../../../../params.service'
import { HttpHeaders } from '@angular/common/http';
import { BaHttpInterceptorService } from './../../../../../../../../../theme/services/index'
@Component({
  selector: 'app-ziliaoshangchuan',
  templateUrl: './ziliaoshangchuan.component.html',
  styleUrls: ['./ziliaoshangchuan.component.scss']
})
export class ZiliaoshangchuanComponent implements OnInit {

  httpHeaders:HttpHeaders=new HttpHeaders();
  index = 0;
  items = [{ id: "oFInput", model: "" }];

  isAjax=false;

  constructor(private _http:BaHttpInterceptorService) {
    this.httpHeaders.set('Content-Type',undefined);
   }
   
  getFileName(it) {
    var fileName = document.querySelector("#" + it.id)['files'][0].name;
    it.model=fileName;
  }

  
  onup(oId){
    var uploadFile=document.querySelector("#"+oId)['files'][0];
    var formData = new FormData();
    formData.append('file', uploadFile);//文件
    this._http.post('/fina/uploadFile',formData,(e)=>{
      console.log(e)
    },()=>{

    },this.httpHeaders)
  }



  //启动上传
  startUpload(): void {
    const AJAX: UploadInput = {
      type: 'uploadAll',
      url: '',//上传文件的接口
      method: 'POST',
      data: { foo: 'bar' },
    };
  }

  createFileInput() {//添加一个文件框
    var val = Math.round(Math.random() * 1000000)
    this.items.push({id:"oFInput" + val,model:""});
    this.index++;
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
