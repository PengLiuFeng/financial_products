import { Component, Input, ViewChild, OnInit, OnChanges } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ParamsService } from './../../../../../params.service'
import { Data } from '@agm/core/services/google-maps-types';
import { checkAndUpdateBinding } from '@angular/core/src/render3/instructions';
import { GradeService } from './../../../../../grade.service'

@Component({
  selector: 'app-jibenxinxi',
  templateUrl: './jibenxinxi.component.html',
  styleUrls: ['./jibenxinxi.component.scss']
})
export class JibenxinxiComponent implements OnInit, OnChanges {
  bo: boolean;
  @Input() cuNo: any;
  @Input() personPage: any;
  testarray: any = {
    cuNo: '',
    cuName: '',
    engName: ' ',
    idType: '',
    idNo: '',
    country: '',
    cifArea: '',
    wayNo: '',
    cuType: '',
    setupDate: '',

    // areaName: '',
    
    // watName: '',
    // license: '',
    // regAddr: '',
    // regType: '',
    
    // holdType: '',
    // outGrade: '',
    // opName: '',
    // upOpName: '',
    // brNo: '',
    // brName: '',
   
    // licBegDate: '',
    // licEndDate: '',
    // licChkDate: '',
    // idChkDate: '',
    // outGradeEndDate: '',
    // txDate: '',
    // upDate: '',
  };
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;


  private pickeri = 2;
  private pickerdom = null;
  private picker_m = null;
  pickerFocus(e) {
    if ((!this.picker_m) || this.picker_m.getAttribute('class').indexOf('picker--opened') == -1) {
      this.picker_m = e.target.parentNode.parentNode;
      this.pickeri++;
      window['e'] = e.target;
      console.log(e)
      this.pickerdom = e.target.parentNode.parentNode.parentNode;
      this.pickerdom.style['z-index'] = this.pickeri;
    } else {
      setTimeout(() => {
        if (this.picker_m.getAttribute('class').indexOf('picker--opened') == -1) {
          this.picker_m = null;
          this.pickerdom.style['z-index'] = 0;
        }
      }, 200)
    }
  }
  public myDatePickerOptions: IMyOptions = {
    dayLabels: { su: '日', mo: '一', tu: '二', we: '三', th: '四', fr: '五', sa: '六' },
    dayLabelsFull: {
      su: "周日", mo: "周一", tu: "周二", we: "周三", th: "周四", fr: "周五",
      sa: "周六"
    },
    monthLabels: {
      1: '一月', 2: '二月', 3: '三月', 4: '四月', 5: '五月', 6: '六月', 7: '七月', 8: '八月', 9: '九月', 10:
        '十月', 11: "十一月", 12: '十二月'
    },
    monthLabelsFull: {
      1: "一月", 2: "二月", 3: "三月", 4: "四月", 5: "五月", 6: "六月", 7: "七月", 8:
        "八月", 9: "九月", 10: "十月", 11: "十一月", 12: "十二月"
    },
    todayBtnTxt: "今天",
    clearBtnTxt: "清除",
    closeBtnTxt: "关闭",

    showTodayBtn: true,
    showClearDateBtn: true
  };
  //定义请求对象
  _http: any;

  constructor(public param: ParamsService, public grande: GradeService) {
    this._http = param._http;

  }
  allData: any;
  //将时间戳转换为日期格式
  trandate(data: any): Data {
    var newData = new Date(data)['Format']('yyyy-MM-dd')
    return newData
  }
  //请求下拉框的数据
  requestselectData() {
    this.isajax = true;
    this._http.get('/fina/dict/dictListList?ids=ID_TYPE,COUNTRY,REG_TYPE,CU_TYPE,HOLD_TYPE,OUT_GRADE', (e) => {
      var newdata = e.data
      console.log(newdata)
      console.log(newdata.length)
      for (var i = 0; i < newdata.length; i++) {

        if (newdata[i].data[0].fieldName == 'ID_TYPE') {
          this.idTypes = newdata[i].data
          //this.addselectvaule(this.idTypes)
        }
        if (newdata[i].data[0].fieldName == 'COUNTRY') {
          this.countrys = newdata[i].data
          //this.addselectvaule(this.countrys)
        }
        if (newdata[i].data[0].fieldName == 'REG_TYPE') {
          this.regTypes = newdata[i].data
          //this.addselectvaule(this.regTypes)
        }
        if (newdata[i].data[0].fieldName == 'HOLD_TYPE') {
          this.holdTypes = newdata[i].data
          //this.addselectvaule(this.holdTypes)
        }
        if (newdata[i].data[0].fieldName == 'OUT_GRADE') {
          this.outGrades = newdata[i].data
          //this.addselectvaule(this.outGrades)
        }
        if (newdata[i].data[0].fieldName == 'CU_TYPE') {
          this.cuTypes = newdata[i].data
          //this.addselectvaule(this.cuTypes)
        }
      }

    }, () => {
      this.isajax = false;
    })
  }
  //请求数据并将数据转换到testarray
  isajax = false;
  requestData() {
    this.isajax = true
    this._http.get('/fina/custom/corpDetail?cuNo=' + this.cuNo, (e) => {
      if (e != null && e != undefined) {
        console.log(e)
        this.allData = e.data
        this.testarray = this.allData;
        console.log(this.testarray)
        //this.testarray.setupDate=this.trandate(this.allData.setupDate)      
        for (var p in this.allData) {
          if(p=="cifArea")
          this.testarray[p]="110000"

          if (p.search('Date') != -1 || p.search('Time') != -1) {
            this.testarray[p] = this.trandate(this.allData[p]);
          }
        }
        console.log(this.testarray)
      }

      console.log(this.testarray)
    }, () => {
      this.isajax = false;
      alert('请求失败')
    })

  }
  //请求三级联动数据
  requestThreeData(){
    this._http.get("/fina/getChinas",(e)=>{
      if(e.data!=undefined&&e.data!=null){
        this.cifAreas=e.data.data
        console.log(this.cifAreas)
      }
    },()=>{
      console.log("三级联动数据请求失败了")
    })
  }
    
  
  //向后台提交数据
  saveData() {
    this.isajax = true
    this._http.post('/fina/custom/corpInsert', this.testarray, (e) => {
      this.isajax = false
      //   console.log(e)
      this.grande.sub.next({ type: "jbxx", jbFlag: e.data.steps });
      if (e.data.t == '1') {
        alert("您的基本信息提交成功")
        this.bo = true;
      }
      else {
        alert("您的基本信息提交失败，请您重新提交，如果多次提交失败请及时联系管理员")
      }
    }, () => {

      this.isajax = false
    })
  }

  ngOnChanges(it: any) {        //监视事件，it监视全局变量的改变
    if (this.personPage == 'newUser')
      this.bo = false
    else
      this.bo = true

    if (!!this.cuNo) {
      this.requestData();
    }
    if (!!this.allData) {
      this.testarray = this.allData
    }
  }
  //基本信息内的数据与testarray绑定
  //下拉框的数据
  idTypes: Array<any>
  countrys: Array<any>
  cifAreas:  Array<any>=[]
  wayNos: Array<any>
  regTypes: Array<any>
  cuTypes: Array<any>
  holdTypes: Array<any>
  outGrades: Array<any>
  ngOnInit() {
    this.requestselectData();
    this.requestThreeData();
    
  }

  go_reset() { }
  tijiao() {
    console.log(this.testarray)
    for (var p in this.testarray) {
      if (p.search('Date') != -1 || p.search('Time') != -1) {
        this.testarray[p] = Date.parse(this.testarray[p]);
      }
    }
    this.saveData()
    //console.log(this.testarray)
  }
  gaibian() {
    if (this.bo == false)
      this.bo = true;
    else
      this.bo = false;

  }
}
