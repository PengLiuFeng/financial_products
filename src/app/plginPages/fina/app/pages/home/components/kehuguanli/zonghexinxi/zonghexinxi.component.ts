import { Component, ViewChild, Input, OnInit, OnChanges } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, InputAutoFillDirective } from 'ng-uikit-pro-standard';
import { Location } from '@angular/common';
import { ParamsService } from './../../../../../params.service';
import { GradeService } from './../../../../../grade.service';
@Component({
  selector: 'app-zonghexinxi',
  templateUrl: './zonghexinxi.component.html',
  styleUrls: ['./zonghexinxi.component.scss']
})
export class ZonghexinxiComponent implements OnInit {
  @Input() id: any;
  @Input() cuNo: any;   //调用本界面的时候必须传入的值
  inputdata: any = {
    idNo: '',
    idType: '',
    cuName: '',
    cuNo: '',
  };
  @Input() personPage: any;   //客户信息界面传入的值，判断是新增还是客户信息界面进入
  apps: any = 'jbxx';
  bo: boolean = false;
  idTypes: any;
  _http: any;
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  public myDatePickerOptions: IMyOptions = {};

  constructor(private location: Location, private param: ParamsService,public grade:GradeService) {
    this._http = param._http
  }
  isajax = false;    //用于判断是否请求被占用
  requestData() {
    this.isajax = true
    this._http.get('/fina/custom/corpDetail?cuNo=' + this.cuNo, (e) => {
      this.isajax = false
     
      // this.inputdata.idNo=e.data.apb.idNo
      // this.inputdata.idType=e.data.apb.idType
      // this.inputdata.cuName=e.data.apb.cuName
      // this.inputdata.cuNo=e.data.apb.cuNo
   
      if (e.data != null && e.data != undefined) {

        this.inputdata = e.data
        if (typeof (Number(this.inputdata.idType)) == 'number') {
          this.inputdata.idType = this.getLabel(this.inputdata.idType, this.idTypes)
        }
      } else {
        alert("该用户已经不存在，请再次确认！！！")
      }

    }, () => {
      this.isajax = false

    }
    )

  }
  //请求下拉框的数据
  requestselectData() {
    this.isajax = true;
    this._http.get('/fina/dict/dictListList?ids=ID_TYPE', (e) => {
      var newdata = e.data
     
      for (var i = 0; i < newdata.length; i++) {

        if (newdata[i].data[0].fieldName == 'ID_TYPE') {
          this.idTypes = newdata[i].data
          //this.addselectvaule(this.idTypes)
        }
      }

    }, () => {
      this.isajax = false;
    })
  }
  //将下拉框的值转换为lable
  getLabel(value: any, select: Array<any>): any {
    for (var p in select) {
      if (select[p]['value'] == value) {
        return select[p]['label']
      }
    }
  }

  ngOnChanges(it: any) {
   
    if (this.cuNo != null && this.cuNo != undefined) {
      //this.requestData()
    }
  }
  ngOnInit() {
    //this.requestselectData()
    if (this.cuNo == null || this.cuNo == undefined) {
      this.inputdata = {
        idNo: '',
        idType: '',
        cuName: '',
        cuNo: '',
      }
    }
  }
  opens(t: any): void {
    this.apps = t;
  }



}
