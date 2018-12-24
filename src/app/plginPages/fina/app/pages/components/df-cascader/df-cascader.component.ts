import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-df-cascader',
  templateUrl: './df-cascader.component.html',
  styleUrls: ['./df-cascader.component.scss']
})
export class DfCascaderComponent implements OnInit {
  @Input() showAllLevels:boolean;//是否显示完整路径
  @Input() options:Array<any>;//数据
  @Input() values:any;
  @Output() valuesChange = new EventEmitter();
   isTap:boolean=false;
  private bodydom:any;
  
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

  constructor() { }
dqli={
  ul1:{},
  ul2:{},
  ul3:{},
}
  ngOnInit() {
    this.values=666;
    this.bodydom=document.querySelector('body');
    if(!(this.options&&this.options.length>0)){
      console.error('三级联动数据不能为Null');
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
      this.valuesChange.emit(this.myval);
      this.removeEve();
    }
  }
}
