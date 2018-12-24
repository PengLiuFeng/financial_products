import { Component, OnInit } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-df-cascader',
  templateUrl: './df-cascader.component.html',
  styleUrls: ['./df-cascader.component.scss']
})
export class DfCascaderComponent implements OnInit {
   isTap:boolean=false;
  private bodydom:any;
  constructor() { }

  ngOnInit() {
    this.bodydom=document.querySelector('body');
  }
  private removeEve(){
    //console.log('注销事件');
    this.isTap=false;
    let dom=document.querySelector('body');
    dom['i']=2;
    dom.removeEventListener('click',window['fu']);
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
    console.log(e)
  }
}
