import { Component, OnInit, Input } from '@angular/core';
import { GradeService } from './../../../grade.service'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() title:any;
  constructor(public grade:GradeService) { }
  ngOnInit() {
  }
  qhuser(){
    this.grade.isLogin=false;
    sessionStorage.removeItem('loginName_v');
  }

}
