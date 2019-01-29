//合同详情
import { Component, OnInit, Input,OnChanges,EventEmitter } from '@angular/core';
import { ParamsService } from './../../../../../../params.service'
import {GradeService} from './../../../../../../grade.service';
@Component({
  selector: 'app-hetongxq',
  templateUrl: './hetongxq.component.html',
  styleUrls: ['./hetongxq.component.scss']
})
export class HetongxqComponent implements OnInit, OnChanges {
  @Input() edit: boolean=false;
  @Input() InputData:any;
  @Input() demoBasic;
  @Input() isInit:any;
  editChange = new EventEmitter();
  isEdit: boolean = !this.edit;
  model:any;
  constructor(public params:ParamsService , public grade:GradeService) { }
  ngOnChanges(it:any){
    console.log(it)
  }
  optionsSelect = {
    hkfs: [],
    fffs:[],
    hbfxr: {
      j: [
        { value: '1', label: '月' },
        { value: '2', label: '季' },
        { value: '3', label: '年' },
      ],
      r: [
        { "value": "1", "label": "1日" }, { "value": "2", "label": "2日" }, { "value": "3", "label": "3日" }, { "value": "4", "label": "4日" }, { "value": "5", "label": "5日" }, { "value": "6", "label": "6日" }, { "value": "7", "label": "7日" }, { "value": "8", "label": "8日" }, { "value": "9", "label": "9日" }, { "value": "10", "label": "10日" }, { "value": "11", "label": "11日" }, { "value": "12", "label": "12日" }, { "value": "13", "label": "13日" }, { "value": "14", "label": "14日" }, { "value": "15", "label": "15日" }, { "value": "16", "label": "16日" }, { "value": "17", "label": "17日" }, { "value": "18", "label": "18日" }, { "value": "19", "label": "19日" }, { "value": "20", "label": "20日" }, { "value": "21", "label": "21日" }, { "value": "22", "label": "22日" }, { "value": "23", "label": "23日" }, { "value": "24", "label": "24日" }, { "value": "25", "label": "25日" }, { "value": "26", "label": "26日" }, { "value": "27", "label": "27日" }, { "value": "28", "label": "28日" }, { "value": "29", "label": "29日" }, { "value": "30", "label": "30日" }, { "value": "31", "label": "31日" },
        { "value": "32", "label": "每月月末日" },
        { "value": "32", "label": "到期日对日" },
        { "value": "32", "label": "按揭" },
      ]
    }
  }
  rzxxData = {
    qx: {
      val: '',
      dw: '月'
    },
    zysced:'2',//是否占用授信额度(否:2,是：1)
    yqwyjbl:{//逾期违约金比例
      zb:'%',
      dw:'月',
      vals:''
    },
    htqsrq:'',//合同签署日期
    htdqrq:'',//合同到期日期
  }
  djxxData={
    djsj:'',  //登记时间
    xgsj:'',  //修改时间
    djdw:'',  //登记单位
    dedwmc:'',//登记单位名称
    djrmc:'', //登记人名称
    xgrmc:'', //修改人名称





  }
  fkxx={
    zhTable:{
      thead:['序号','账号','账户开户行','账户名称','操作'],
      defaultData:{zh:'',khh:'',name:''},
      skData:[],
      hkData:[],
    }
  }
  onZhAdd(tTable:Array<any>):void{//添加账户
    tTable.push(JSON.parse(JSON.stringify(this.fkxx.zhTable.defaultData)));
    console.log(this.fkxx.zhTable);
  }
  onRemove(tTable:Array<any>,i):void{//删除账户
    tTable.splice(i,1);
  }
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
  pickerBlur(e){
    // e.target.style['z-index']=0;
  }
  ngOnInit() {
    
   
    this.onZhAdd(this.fkxx.zhTable.skData)
    this.onZhAdd(this.fkxx.zhTable.hkData)
    this.isEdit = !this.edit;
    if (this.isEdit) {
      console.log('可编辑时重新初始化变量');
    }
    this.optionsSelect.hkfs = [
      { value: '1', label: '一次性还本付息' },
      { value: '2', label: '等额本息' },
      { value: '3', label: '不定期不等额' },
      { value: '4', label: '按月还息，到期还本' },
      { value: '5', label: '按季还息，到期还本' },
      { value: '6', label: '按年还息，到期还本' },
    ];
    this.optionsSelect.fffs=[
      { value: '1', label: '借款方' },
      { value: '2', label: '买方' },
      { value: '3', label: '保理商' },
      { value: '4', label: '担保方' },
    ]

    this.grade.sub.subscribe(res=>{
      if(res.type=='app-hetongxq'){
        if(res.data.auSta=="申请中"){
          this.isEdit=false
        }else if(res.data.auSta=="客户准入"){
          this.isEdit=true
        }else if(res.data.auSta=="拒绝"){
          this.isEdit=true
        }
      }
    })
  }
  
  yszkTable = {
    thead: ["序号", "买方", "基础交易合同名称", "基础交易合同编号", "单据类型", "单据号码", "应收账款金额", "应收账款到期日", "资料下载", "融资比例(%)", "融资款金额", "指定收款金额","操作"],
    data: [
      { id: 1, firstName: 'Mark', lastName: 'Otto', username: '@mdo' },
      { id: 2, firstName: 'John', lastName: 'Doe', username: '@john' },
      { id: 3, firstName: 'Lessie', lastName: 'Moe', username: '@lessie' },
    ]
  }
  onHeji(v, n): string {
    n = '';
    if (v == 0) {
      n = '合计';
    } else {
      n = '一'
    }
    return n;
  }
  onRadio(e):void{
    console.log(e)
  }
  kk="13"
  exp:RegExp=/^[0-9]~$/
  oninp(e):void{
    console.log(this.kk,'-',e.target.value)
  }
}