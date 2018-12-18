import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mygongzuotai',
  templateUrl: './mygongzuotai.component.html',
  styleUrls: ['./mygongzuotai.component.scss']
})
export class MygongzuotaiComponent implements OnInit {

  title=[
    "我的首页",
    "我的工作台"
    ]
  dbrzsq="进行中";//临时展示使用
  constructor() { }
  ngOnInit() {
  }

}
