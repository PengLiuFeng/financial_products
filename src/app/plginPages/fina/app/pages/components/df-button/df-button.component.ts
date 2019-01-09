import { Component, OnInit, Input } from '@angular/core';
import { InputGroupsComponent } from 'src/app/plginPages/template/MDB/components/forms/input-groups/input-groups.component';

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
