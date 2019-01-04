import { Component, OnInit, ViewChild } from '@angular/core';
import { ParamsService } from './../../../../../../params.service'
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-yingshouzhangkuanhuankuan',
  templateUrl: './yingshouzhangkuanhuankuan.component.html',
  styleUrls: ['./yingshouzhangkuanhuankuan.component.scss']
})
export class YingshouzhangkuanhuankuanComponent implements OnInit {
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  radioModel="yszkhk";
  khh="20070801-091";
  khmc="鸿雁轮胎原材料销售商";
  htbh="BL2018100100001";
  ywlx="有追索公开型保理";
  aaa:any;

  timeType=['年',"月","季"]

  tableData=[
    {busName:"北京名品汽车轮胎生产商",busCouna:"购买轮胎原材料",busCoun:"JC20181001-01",busType:"商业发票",busNo:"FP2018001",endDate:"2019-01-01",busRecei:"280,000.00",downPaymentFlt:"80",loaAmt:"224,000.00",resAmt:"220,000.00"},
    {busName:"北京名品汽车轮胎生产商",busCouna:"购买轮胎原材料",busCoun:"JC20181001-01",busType:"商业发票",busNo:"FP2018001",endDate:"2019-01-01",busRecei:"280,000.00",downPaymentFlt:"80",loaAmt:"224,000.00",resAmt:"220,000.00"},
    {busName:"北京名品汽车轮胎生产商",busCouna:"购买轮胎原材料",busCoun:"JC20181001-01",busType:"商业发票",busNo:"FP2018001",endDate:"2019-01-01",busRecei:"280,000.00",downPaymentFlt:"80",loaAmt:"224,000.00",resAmt:"220,000.00"},
    {busName:"北京名品汽车轮胎生产商",busCouna:"购买轮胎原材料",busCoun:"JC20181001-01",busType:"商业发票",busNo:"FP2018001",endDate:"2019-01-01",busRecei:"280,000.00",downPaymentFlt:"80",loaAmt:"224,000.00",resAmt:"220,000.00"},
    {busName:"北京名品汽车轮胎生产商",busCouna:"购买轮胎原材料",busCoun:"JC20181001-01",busType:"商业发票",busNo:"FP2018001",endDate:"2019-01-01",busRecei:"280,000.00",downPaymentFlt:"80",loaAmt:"224,000.00",resAmt:"220,000.00"},
    {busName:"北京名品汽车轮胎生产商",busCouna:"购买轮胎原材料",busCoun:"JC20181001-01",busType:"商业发票",busNo:"FP2018001",endDate:"2019-01-01",busRecei:"280,000.00",downPaymentFlt:"80",loaAmt:"224,000.00",resAmt:"220,000.00"},
    {busName:"北京名品汽车轮胎生产商",busCouna:"购买轮胎原材料",busCoun:"JC20181001-01",busType:"商业发票",busNo:"FP2018001",endDate:"2019-01-01",busRecei:"280,000.00",downPaymentFlt:"80",loaAmt:"224,000.00",resAmt:"220,000.00"},
    {busName:"北京名品汽车轮胎生产商",busCouna:"购买轮胎原材料",busCoun:"JC20181001-01",busType:"商业发票",busNo:"FP2018001",endDate:"2019-01-01",busRecei:"280,000.00",downPaymentFlt:"80",loaAmt:"224,000.00",resAmt:"220,000.00"},
    {busName:"北京名品汽车轮胎生产商",busCouna:"购买轮胎原材料",busCoun:"JC20181001-01",busType:"商业发票",busNo:"FP2018001",endDate:"2019-01-01",busRecei:"280,000.00",downPaymentFlt:"80",loaAmt:"224,000.00",resAmt:"220,000.00"},
    {busName:"北京名品汽车轮胎生产商",busCouna:"购买轮胎原材料",busCoun:"JC20181001-01",busType:"商业发票",busNo:"FP2018001",endDate:"2019-01-01",busRecei:"280,000.00",downPaymentFlt:"80",loaAmt:"224,000.00",resAmt:"220,000.00"}  
  ]
  _http: any;
  isAjax = false;
  constructor(public params: ParamsService) {
    this._http = params._http;
  }
  private pickeri = 2;
  private pickerdom = null;
  private picker_m = null;
  pickerFocus(e) {
    if ((!this.picker_m) || this.picker_m.getAttribute('class').indexOf('picker--opened') == -1) {
      this.picker_m = e.target.parentNode.parentNode;
      this.pickeri++;
      window['e'] = e.target;
      this.pickerdom = e.target.parentNode.parentNode.parentNode;
      this.pickerdom.style['z-index'] = this.pickeri;
    } else {
      setTimeout(() => {
        if (this.picker_m.getAttribute('class').indexOf('picker--opened') == -1) {
          this.picker_m = null;
          this.pickerdom.style['z-index'] = 0;
        }
      }, 200)
    }
  }
  ngOnInit() {
  }
  public myDatePickerOptions: IMyOptions = this.params.mdb_es;
}
