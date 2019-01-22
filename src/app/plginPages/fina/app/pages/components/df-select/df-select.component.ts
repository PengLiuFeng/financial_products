import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'df-select',
  templateUrl: './df-select.component.html',
  styleUrls: ['./df-select.component.scss']
})
export class DfSelectComponent implements OnInit {

 showAllLevels:boolean=false;//是否显示完整路径
  @Input() options:Array<any>;//数据
  @Input()isMDBstyle:boolean;//是否采用MDB样式
  @Input() values:any;
  @Input() disabled:Boolean;
  @Input() label:any;
  @Output() valuesChange = new EventEmitter();
  @Output() labelChange = new EventEmitter();
  fuid:string;
   isTap:boolean=false;
   isSet=true;//是否
  private bodydom:any;

  forarr(arr:Array<any>,val,lab?:any):any{
    for(let i=0;i<arr.length;i++){
      if(arr[i].value==val){
        return arr[i].label;
      }
    }
  }
inits(){
  if(this.values){
    this.myval=this.values;
    this.myval=this.forarr(this.options,this.values,'');
  }
}

/* 
options=[
    {
      value: 'zhinan',
      label: '指南'
    }
    ]
*/
  constructor() {
    this.fuid=Math.random().toString(36).substr(2);
    console.log(this.fuid)
  }
dqli={
  ul1:{},
  ul2:{},
  ul3:{},
}
  ngOnInit() {
    
    this.bodydom=document.querySelector('body');
    if(!(this.options&&this.options.length>0)){
      console.error('下拉数据不能为Null');
      this.options=[
          {
            value: '0',
            label: '无数据',
            disabled:true
          }
        ]
    }
    this.inits();
  }
  isshow=2;
  private removeEve(){
    //console.log('注销事件');
    this.isTap=false;
    let dom=document.querySelector('body');
    this.isshow=2;
    dom.removeEventListener('click',this.fuSelect);
    this.dqli.ul2={};
    this.dqli.ul1={};
  }
  fuSelect:any;
  // 事件定义
  onTap():void{
    if(!this.isTap){
      let _this=this;
      this.fuSelect=function fu(e){
        e.preventDefault();//阻止事件目标的默认动作
        if(_this.isshow==1){
          _this.removeEve();
        }else{_this.isshow=1;}
      }
      this.isTap=true;
      // console.log('注册事件')
      document.querySelector('body').addEventListener('click',this.fuSelect);
    }else{
      this.removeEve();
    }
  }
  onEls(e):void{
    e.preventDefault();
    e.stopPropagation();//阻止事件冒泡
  }
  myval="";
  onIt(i,it){
    if(!it.disabled){
      this.dqli.ul1=it;
      this.myval=it['label'];
      this.valuesChange.emit(it['value']);
      this.removeEve();
    }
  }
  jsclass(size):any{
    if(size){
      let jsons={};
      jsons['qloud-input--'+size]=true;
      return jsons;
    }
  }
}
