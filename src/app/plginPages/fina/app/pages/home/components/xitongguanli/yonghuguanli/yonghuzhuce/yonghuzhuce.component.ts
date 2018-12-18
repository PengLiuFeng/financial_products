import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yonghuzhuce',
  templateUrl: './yonghuzhuce.component.html',
  styleUrls: ['./yonghuzhuce.component.scss']
})
export class YonghuzhuceComponent implements OnInit {

  grxx={
    apSex:{
      vals:'',
    selects:[
      { value: '1', label: '男' },
      { value: '2', label: '女' },
    ]
    },
    apIdType:{
      vals:'',
    selects:[
      { value: '1', label: '身份证' },
      { value: '2', label: '军官证' }
    ]
  },
  brName:{
    vals:'',
  selects:[
    { value: '1', label: '北京分行' },
  ]
}
}
  constructor() { }

  ngOnInit() {
  }

}
