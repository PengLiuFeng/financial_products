import { Component, OnInit,Input,Output,EventEmitter,OnChanges,ElementRef,Renderer2 } from '@angular/core';
import { Observable,fromEvent }from 'rxjs';
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
  constructor(private el:ElementRef,private renderer2s: Renderer2) { }
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
    /* for(let i=0;i<arr.length;i++){
      if(arr[i].children&&arr[i].children.length>0){

      }
    } */


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
          console.log(arr[i])
          return arr[i].label;
        }else{

        }
      }
    }
  }
inits(){
  if(this.values){
    this.myval=this.forarr(this.options,this.values,'');
  }
}
isshow=2;
dqli={
  ul1:{},
  ul2:{},
  ul3:{},
}
  ngOnInit() {
    fromEvent(window,'resize').subscribe((event) => {//监听页面大小变化
      　　this.removeEve();
    });
    this.bodydom=document.querySelector('body');
    if(!(this.options&&this.options.length>0)){
      console.error('三级联动数据不能为Null');
    }else{
      this.inits();
    }
  }
  ischanges=true;
  ngOnChanges(){
    if(this.ischanges){
      this.inits();
    }
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
  getWindowDimensions(){
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.body,
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
  
    return {x:x,y:y};
  }
  onEls(e):void{
    e.preventDefault();
    e.stopPropagation();//阻止事件冒泡
    let divs=this.el.nativeElement.querySelector('.qloud-cascader-menus');
    if(divs){
      let xy=this.getWindowDimensions();
      let wz=divs.getBoundingClientRect();
      let cc=wz.x+wz.width+100;
      if(cc>xy.x){
        let js=xy.x-cc;
        this.renderer2s.setStyle(this.el.nativeElement.querySelector('.popper__arrow'),'transform',`translateX(${Math.abs(js)}px)`);
        ".popper__arrow"
        this.renderer2s.setStyle(divs,'transform',`translateX(${js}px)`);
      }
    }
  }
  myval="";
  onIt(i,it){
    if(it.children&&it.children.length>0){
    }else{
      this.ischanges=false;
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
      setTimeout(()=>{
        this.ischanges=true;
      },1000)
    }
  }
}
