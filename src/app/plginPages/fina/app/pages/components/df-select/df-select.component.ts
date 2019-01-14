import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'df-select',
  templateUrl: './df-select.component.html',
  styleUrls: ['./df-select.component.scss']
})
export class DfSelectComponent implements OnInit {

  @Input() showAllLevels:boolean;//是否显示完整路径
  @Input() options:Array<any>;//数据
  @Input()isMDBstyle:boolean;//是否采用MDB样式
  @Input() values:any;
  @Input() label:any;
  @Output() valuesChange = new EventEmitter();
  @Output() labelChange = new EventEmitter();
   isTap:boolean=false;
   isSet=true;//是否
  private bodydom:any;

  forarr(arr:Array<any>,val,lab?:any):any{
    for(let i=0;i<arr.length;i++){
      if(arr[i].children&&arr[i].children.length>0){
        if(this.showAllLevels){
          lab+=arr[i].label+'/';
          return this.forarr(arr[i].children,val,lab);
        }else{
          return this.forarr(arr[i].children,val);
        }
      }else{
        if(arr[i].value==val){
          if(this.showAllLevels){
            lab+=arr[i].label;
            return lab;
          }
          return arr[i].label;
        }
      }
    }
  }
inits(){
if(this.values){
  this.myval=this.values;
  this.myval=this.forarr(this.options,this.values,'');
  // let it=null;
  // for(let i=0;i<this.options.length;i++){
  //   it=this.options[i];
  //   if(it.children&&it.children.length>0){

  //   }else{

  //   }
  // }
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
  constructor() { }
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
    }else{
      this.inits();
    }
  }
  private removeEve(){
    //console.log('注销事件');
    this.isTap=false;
    let dom=document.querySelector('body');
    dom['i']=2;
    dom.removeEventListener('click',window['fu']);
    this.dqli.ul2={};
    this.dqli.ul1={};
  }
  // 事件定义
  onTap():void{
    if(!this.isTap){
      let _this=this;
      window['fu']=function fu(e){
        e.preventDefault();//阻止事件目标的默认动作
        if(this.i==1){
          _this.removeEve();
        }else{this.i=1;}
      }
      this.isTap=true;
      // console.log('注册事件')
      document.querySelector('body').addEventListener('click',window['fu']);
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
    if(it.children&&it.children.length>0){
    }else{
      let dqli=this.dqli;
      if(this.showAllLevels){
        this.myval=dqli.ul3['label']?(dqli.ul1['label']?(dqli.ul1['label']+(dqli.ul2['label']?('/'+dqli.ul2['label']+(dqli.ul3['label']?('/'+dqli.ul3['label']):'')):'')):''):'';
      }else{
        this.myval=dqli.ul3['label']?dqli.ul3['label']:'';
      }
      if(this.myval){
        this.valuesChange.emit(dqli.ul3['value']);
      }
      this.removeEve();
    }
  }

}
