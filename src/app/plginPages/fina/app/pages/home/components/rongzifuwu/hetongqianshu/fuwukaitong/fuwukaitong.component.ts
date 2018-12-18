import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuwukaitong',
  templateUrl: './fuwukaitong.component.html',
  styleUrls: ['./fuwukaitong.component.scss']
})
export class FuwukaitongComponent implements OnInit {

  constructor() { }
  title=[
    "融资管理",
    "电子合同",
    "服务开通"
  ]

  ngOnInit() {
  }

}
