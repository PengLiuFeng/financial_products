import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shenqingxiangqing-head',
  templateUrl: './shenqingxiangqing-head.component.html',
  styleUrls: ['./shenqingxiangqing-head.component.scss']
})
export class ShenqingxiangqingHeadComponent implements OnInit {
  Client={
    name:'腾讯科技股份有限公司广州总公司',
    ID_type:'统一社会信用代码',
    ID_NO: '46DS6G1Z3DA',
  }
  testarray:any;

  constructor() { }

  ngOnInit() {
    this.testarray={
      idType:'',
      idNo:'',
      cifName:'',
    }
  }


}
