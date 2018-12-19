import { Component,Input, ViewChild,OnInit, OnChanges } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ParamsService } from './../../../../../params.service'
import { Data } from '@agm/core/services/google-maps-types';
@Component({
  selector: 'app-jibenxinxi',
  templateUrl: './jibenxinxi.component.html',
  styleUrls: ['./jibenxinxi.component.scss']
})
export class JibenxinxiComponent implements OnInit,OnChanges{
  @Input() bo:boolean;
  // @Input() inputdata:any;
  @Input() cuNo:any;
  model: any;
  modell: any;
  testarray: any={
    cuNo:'',
    cuName: '',
    engName:' ',
    idType:'',    
    country:'',
    cifArea:'',
    areaName:'',
    wayNo:'',
    watName:'',
    license:'',
    regAddr:'',
    regType:'',
    cuType:'',
    holdType:'',
    outGrade:'',
    opName:'',
    upOpName:'',
    brNo:'',
    brName:'',
    setupDate:'',
    licBegDate:'',
    licEndDate:'',
    licChkDate:'',
    idChkDate:'',
    outGradeEndDate:'',
    txDate:'',
    upDate:'',
  }; 
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  
 
  private pickeri=2;
  private pickerdom=null;
  private picker_m=null;
  pickerFocus(e){
    if((!this.picker_m)||this.picker_m.getAttribute('class').indexOf('picker--opened')==-1){
      this.picker_m=e.target.parentNode.parentNode;
      this.pickeri++;
      window['e']=e.target;
      console.log(e)
      this.pickerdom=e.target.parentNode.parentNode.parentNode;
      this.pickerdom.style['z-index']=this.pickeri;
    }else{
      setTimeout(()=>{
        if(this.picker_m.getAttribute('class').indexOf('picker--opened')==-1){
          this.picker_m=null;
          this.pickerdom.style['z-index']=0;
        }
      },200)
    }
  }
  public myDatePickerOptions: IMyOptions = {
    dayLabels: {su: '日', mo: '一', tu: '二', we: '三', th: '四', fr: '五', sa: '六'},
    dayLabelsFull: {su: "周日", mo: "周一", tu: "周二", we: "周三", th: "周四", fr: "周五",
    sa: "周六"},
    monthLabels: { 1: '一月', 2: '二月', 3: '三月', 4: '四月', 5: '五月', 6: '六月', 7: '七月', 8: '八月', 9: '九月', 10:
    '十月', 11: "十一月", 12: '十二月' },
    monthLabelsFull: { 1: "一月", 2: "二月", 3: "三月", 4: "四月", 5: "五月", 6: "六月", 7: "七月", 8:
    "八月", 9: "九月", 10: "十月", 11: "十一月", 12: "十二月" },
    todayBtnTxt: "今天",
    clearBtnTxt: "清除",
    closeBtnTxt: "关闭",
    
    showTodayBtn: true,
    showClearDateBtn: true
  };
  //定义请求对象
  _http:any;

  constructor(public param:ParamsService) {
    this._http=param._http;
    
   }
  allData:any;
  //将时间戳转换为日期格式
  trandate(data:any):Data{
    var  newData=new Date(data)['Format']('yyyy-MM-dd')
    return newData
  }
  //请求数据并将数据转换到testarray
  requestData() {
    this._http.get('/fina/custom/detail?cuNo='+this.cuNo,(e)=>{
        this.allData=e.data.apb
        this.testarray=this.allData; 
        //this.testarray.setupDate=this.trandate(this.allData.setupDate)      
        for(var p in this.allData){
        
          if(p.search('Date')!=-1){
            console.log(p)
            this.testarray[p]=this.trandate(this.allData[p]);
            console.log(this.testarray.p)
          }
          
        }
        console.log(this.testarray)
    },()=>{
      alert('请求失败')
    })
    
  }
  ngOnChanges(it:any){        //监视事件，it监视全局变量的改变
    
    if(!!this.cuNo){
      this.requestData();
    }
    if(!!this.allData){
      this.testarray=this.allData
    }
  }
  //基本信息内的数据与testarray绑定
  //下拉框的数据
  idTypes:Array<any>
  countrys:Array<any>
  cifAreas:Array<any>
  wayNos:Array<any>
  regTypes:Array<any>
  cuTypes:Array<any>
  holdTypes:Array<any>
  outGrades:Array<any>
  ngOnInit() {
    // console.log(this.cuNo)
    // if(this.cuNo==null&&this.cuNo==undefined){
    //   this.cuNo=''
    // }else if(!!this.cuNo){
    //   this.requestData();
    // }
    //console.log(this.bo);
    this.testarray={
      cuNo:'324251513',
      cuName: '中国移动',
      engName:'china mobile',
      idTypes:[
        {value:'身份证',label:'身份证'},
        {value:'统一社会信用代码',label:'统一社会信用代码'}
      ],
      idType:'',
      countrys:[
        {value:'中华人民共和国',label:'中华人民共和国'},
        {value:'美国',label:'美国'},
        {value:'英国',label:'英国'},
        {value:'日本',label:'日本'},
        {value:'韩国',label:'韩国'},
        {value:'泰国',label:'泰国'},
        {value:'越南',label:'越南'},

      ],
      country:'',
      cifAreas:[
        {value:'1',label:'4325242'},
        {value:'2',label:'56463453'},
      ],
      cifArea:'',
      areaName:'',
      wayNos:[
        {value:'1',label:'金融类'},
        {value:'2',label:'机械类'},
        {value:'3',label:'科技类'},
        {value:'4',label:'工业类'},
        {value:'5',label:'国防类'},
        {value:'6',label:'实体类'},
      ],
      wayNo:'',
      watName:'',
      license:'4S5D6SD',
      regAddr:'中国山东省威海市',
      regTypes:[
        {value:'1',label:'国家机关/事业单位'},
        {value:'2',label:'三资企业'},
        {value:'3',label:'股份制企业'},
        {value:'4',label:'个体工商户'},
        {value:'5',label:'民营企业'},
        {value:'6',label:'其它'},
      ],
      regType:'',
      cuCorpInf:[],
      cuType:'',
      cuTypes:[],
      holdTypes:[
        {value:'1',label:'外商绝对控股'},
        {value:'2',label:'国有相对控股'},
        {value:'3',label:'集体相对控股'},
        {value:'4',label:'港澳台商相对控股'},
        {value:'5',label:'私人绝对控股'},
        {value:'6',label:'港澳台商绝对控股'},
        {value:'3',label:'私人相对控股'},
        {value:'4',label:'外商相对控股'},
        {value:'5',label:'集体绝对控股'},
        {value:'6',label:'国有绝对控股'},
      ],
      holdType:'',
      outGrades:[
        {value:'1',label:'A'},
        {value:'2',label:'AA'},
        {value:'3',label:'AAA'},
        {value:'4',label:'AAAA'},
        {value:'5',label:'AAAAA'},
      ],
      outGrade:'',
      opName:'张三',
      upOpName:'李四',
      brNo:'423GA19',
      brName:'华软金信',
      setupDate:'',
      licBegDate:'',
      licEndDate:'',
      licChkDate:'',
      idChkDate:'',
      outGradeEndDate:'',
      txDate:'',
      upDate:'',


    }
  }
  // Data Picker Initialization
  go_reset(){}
}
