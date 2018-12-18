import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'df-tree',
  templateUrl: './df-tree.component.html',
  styleUrls: ['./df-tree.component.scss']
})
export class DfTreeComponent implements OnInit {
  @Input() data:any
  @Input() itactive:any
  @Input() pads:number=0
  @Input() nodeClick:Function
  @Output() dataChange = new EventEmitter();
  constructor(private routers: Router,public activer:ActivatedRoute) {
  }
  ngOnInit() {
    this.activer['itactive']=this.itactive;

    if(!this.data[0].treeid){
      window['tree']=this;
      var bls=function (arr,j){
        for(var i=0;i<arr.length;i++){
          arr[i].treeid=''+j+(i+1);
          if(arr[i].children&&arr[i].children.length>0){
            bls(arr[i].children,j+''+(i+1));
          }
        }
      }
      bls(this.data,'');
    }
  }
  onTo(id:any):void{
    this.activer['itactive']=id;
  }
  onSelect(it: any): void {
    this.activer['itactive']=it.treeid;
    it.isshow=!it.isshow;
    if(it.children){
      it.children.forEach(itt => {
        itt.isshow=false;
      });
    }
    if(typeof this.nodeClick=="function"){
      this.nodeClick(it);
    }
	}

}
/* 
示例

<df-tree [data]="data" [nodeClick]="点击子节点执行的函数"></df-tree>
data数据结构
data=[
      {
        label: '客户管理',
        url:'/khxx',
        isshow:true,//设置默认展开
        children: [//子节点
          {
            label: '客户信息',
            url:'/khxx',
            isshow:true,//设置默认展开
          }
        ]
      }
    ]

*/