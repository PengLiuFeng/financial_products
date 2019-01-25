import { Component, OnInit,Input,Output,EventEmitter,OnChanges } from '@angular/core';
// import { Button } from 'primeng/button';

@Component({
  selector: 'app-df-cascader',
  templateUrl: './df-cascader.component.html',
  styleUrls: ['./df-cascader.component.scss']
})
export class DfCascaderComponent implements OnInit,OnChanges {
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
/*   ngOnChanges(e){
    this.inits();
  } */
 /*  optionst=[
    
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
                  }]
                }
              ]
    }
  ] */
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
  console.log('初始化')
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
isshow=2;
  constructor() { }
dqli={
  ul1:{},
  ul2:{},
  ul3:{},
}
  ngOnInit() {
    this.bodydom=document.querySelector('body');
    if(!(this.options&&this.options.length>0)){
      console.error('三级联动数据不能为Null');
    }else{
      this.inits();
    }
  }
  ngOnChanges(){
    this.inits();
  }
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
