import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-df-button',
  templateUrl: './df-button.component.html',
  styleUrls: ['./df-button.component.scss']
})
export class DfButtonComponent implements OnInit {
@Input() size:string;//按钮大小
@Input() type:string;//按钮主题
  constructor() { }

  ngOnInit() {
  }

}
