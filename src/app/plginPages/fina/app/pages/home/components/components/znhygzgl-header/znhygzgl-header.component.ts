import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-znhygzgl-header',
  templateUrl: './znhygzgl-header.component.html',
  styleUrls: ['./znhygzgl-header.component.scss']
})
export class ZnhygzglHeaderComponent implements OnInit {

  constructor() { }
  @ Input() radioModel:any;//准备接收数据(父组件传过来的值,判断title显示的值)

  jrcpdm = "FUN00001"
  cpmc = "国内保理业务"
  znhydm = "LNS00002"
  znhymc = "应收账款收取"

  title="应收账款收取合约规则"


  ngOnInit() {
    if (this.radioModel) {
     this.title="应收账款收取合约规则"
    } else {
      this.title="融资发放规则"
    }
  }

}
