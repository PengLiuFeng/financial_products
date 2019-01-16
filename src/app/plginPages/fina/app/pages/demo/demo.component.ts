import { Component,ViewChild, OnInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
import { BaHttpInterceptorService } from './../../../../../theme/services/index'
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  model: any;
  modell: any;
  inputVal="华软"
  isShow=false;
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;

  public myDatePickerOptions: IMyOptions = {};
  httpHeaders:HttpHeaders=new HttpHeaders();
  constructor(private _http:BaHttpInterceptorService) {
    this.httpHeaders.set('Content-Type',undefined);
  }
  mval='';
  onup(uploadFile?:any,back?:any){
    uploadFile=document.getElementById("uploadFile")['files'][0];
    var formData = new FormData();
    formData.append('file', uploadFile);//文件
    let ms="这是描述"
    this._http.post('/fina/uploadFile?ms='+ms,formData,(e)=>{
      // back(true,e)
    },()=>{
      // back(false)

    },this.httpHeaders)
  }
  dataSteps={
    options:[
      
    {
      title:"步骤1",
      name:"填写客户信息"
    },
    {
      title:"步骤2",
      name:"尽调资料上传"
    },
    {
      title:"步骤3",
      name:"资料审核"
    },
    {
      title:"步骤4",
      name:"线下尽调"
    },
    {
      title:"步骤5",
      name:"审贷会"
    },
    {
      title:"步骤6",
      name:"授信合同签署"
    }
 
    ]
  }
  selectData={
    val:"",
    options:[
      {
        value: '1',
        label: '选项1'
      },
      {
        value: '2',
        label: '选项2'
      },
      {
        value: '3',
        label: '选项3',
        disabled:true
      },
      {
        value: '4',
        label: '选项4'
      }
    ]
  }
  options=[
    {
      value: 'zhinan',
      label: '指南',
      children: [
                  {
                  value: 'shejiyuanze',
                  label: '设计原则',
                  children: [{
                    value: 'yizhi',
                    label: '一致'
                  }, {
                    value: 'fankui',
                    label: '反馈'
                  }, {
                    value: 'xiaolv',
                    label: '效率'
                  }, {
                    value: 'kekong',
                    label: '可控'
                  }]
                }, 
                {
                  value: 'daohang',
                  label: '导航',
                  children: [{
                    value: 'cexiangdaohang',
                    label: '侧向导航'
                  }, {
                    value: 'dingbudaohang',
                    label: '顶部导航'
                  }
                ]
                }
              ]
    }
  ]
  ngOnInit() {
    setTimeout(()=>{
      this.isShow=true;
    },3000)
  }
oncl(){
  this.mval=Math.random()+'';
}
}
