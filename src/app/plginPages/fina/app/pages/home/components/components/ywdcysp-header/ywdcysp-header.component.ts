import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ywdcysp-header',
  templateUrl: './ywdcysp-header.component.html',
  styleUrls: ['./ywdcysp-header.component.scss']
})
export class YwdcyspHeaderComponent implements OnInit {

  @Input() radioModel=''
  constructor() { }
  khh="20070801-091";//假数据
  khmc= "739835608-X";
  ngOnInit() {
  }

}
