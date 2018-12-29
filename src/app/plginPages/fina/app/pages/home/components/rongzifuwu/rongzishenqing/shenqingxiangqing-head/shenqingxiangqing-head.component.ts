import { Component, OnInit, Input } from '@angular/core';
import { ParamsService } from './../../../../../../params.service';

@Component({
  selector: 'app-shenqingxiangqing-head',
  templateUrl: './shenqingxiangqing-head.component.html',
  styleUrls: ['./shenqingxiangqing-head.component.scss']
})
export class ShenqingxiangqingHeadComponent implements OnInit {

  testarray: any = {
    idType: '',
    idNo: '',
    cuName: '',
  };
  @Input() InputData: any;
  _http: any;
  idTypes: Array<any>;

  constructor(private param: ParamsService) {
    this._http = param._http
  }
  //请求下拉框的数据
  requestSelectData() {
    this._http.get('/fina/dict/dictListList?ids=ID_TYPE', (e) => {
        this.idTypes=e.data[0].data
    }, () => {

     })
  }
  ngOnInit() {
    this.requestSelectData() ;
  }


}
