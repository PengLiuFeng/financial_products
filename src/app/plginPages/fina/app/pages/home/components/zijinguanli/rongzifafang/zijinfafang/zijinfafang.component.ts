import { Component, OnInit, Input } from '@angular/core';
import { ModalDirective } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-zijinfafang',
  templateUrl: './zijinfafang.component.html',
  styleUrls: ['./zijinfafang.component.scss']
})
export class ZijinfafangComponent implements OnInit {
  @Input() ZJFFDemoBasic: ModalDirective;
  inputW = "206px"
  zhsx={
    idNo:""
  }
  constructor() { }

  ngOnInit() {
  }

}
