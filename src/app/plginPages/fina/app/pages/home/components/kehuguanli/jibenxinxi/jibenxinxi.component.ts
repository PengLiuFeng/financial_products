import { Component,Input, ViewChild,OnInit } from '@angular/core';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-jibenxinxi',
  templateUrl: './jibenxinxi.component.html',
  styleUrls: ['./jibenxinxi.component.scss']
})
export class JibenxinxiComponent implements OnInit {
  @Input() bo:boolean;
  model: any;
  modell: any;
  testarray: any;
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  
  // sft:string;
  // kh={
  //   name:'',
  //   hm:'',//证件号码
  //   zjlx:{
  //     vals:' ',
  //     selects:[
  //       { value: ' ', label: '证件类型',disabled:'1'},
  //       { value: '1', label: '身份证' },
  //       { value: '2', label: '护照' },
  //     ]
  //   }
  // }
  // Client= {
  //     Client_name:'彭刘锋',       //客户名称
  //     Client_id:'1902042',         //客户id
  //     Client_fname:'mrpeng',      //外文名称
  //     ClientCar_type:[          //证件类型
  //       {value:'1', label:'身份证'},
  //       {value:'2', label:'统一社会信用代码证'},
  //     ],
  //     ClientCountry:[
  //         { value: '1',label:'中华人民共和国'},
  //         { value:'2',label :'美利坚合众国'},
  //     ],
  //     Client_cifArea: 123845,
  //     Client_areaName:'中国上海',
  //     Client_industry:[
  //         {value : '1', label:'互联网类'},
  //         {value:'2',label:'金融类'},
  //         {value:'3', label:'工业类'},
  //     ],
    
  //     Client_district:[
  //       {value:'1',label: 100012},
  //       {value:'2',label: 100015},
  //       {value:'3',label: 100016},
  //       {value:'4',label: 100018},
  //     ],
  //     Client_license:'5DFA31Z',
  //     Client_regAddr:'中国北京',
  //     Client_regType:[
  //       {value:'1',label:'国家机关'},
  //       {value:'2',label:'事业单位'},
  //       {value:'3',label:'三资企业'},
  //       {value:'4',label:'股份制公司'},
  //       {value:'5',label:'个体工商户'},
  //       {value:'6',label:'民营企业'},
  //     ],
  //     Client_holdType:[
  //       {value:'1',label:'外商绝对控股'},
  //       {value:'2',label:'国有相对控股'},
  //       {value:'3',label:'集体相对控股'},
  //       {value:'4',label:'港澳台商相对控股'},
  //       {value:'5',label:'私人绝对控股'},
  //       {value:'6',label:'港澳台商绝对控股'},
  //     ],
  //     Client_licBegDate:'2014-3-8',
  //     Client_licEndDate:'2019-3-8',
  //     Client_licChkDate:'2016-3-8',
  //     Client_idChkDate:'2016-3-8',
  //     Client_outGrade:[
  //       {value:'1',label:'A'},
  //       {value:'2',label:'AA'},
  //       {value:'3',label:'AAA'},
  //       {value:'4',label:'AAAA'},
  //       {value:'5',label:'AAAAA'},
  //     ],

  //     Client_outGradeEndDate:'2020-6-7',
  //     Client_opName:'张三',
  //     Client_upOpName:'李四' ,
  //     Client_brNo: 5642314975 ,
  //     Client_brName :'华软金科' ,
  //     Client_txDate:'2016-3-8',
  //     Client_upDate:'2016-2-14',
  // }
  
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
  constructor() { }

  ngOnInit() {
    //console.log(this.bo);
    this.testarray={
      cuId:'324251513',
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
