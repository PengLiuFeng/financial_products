import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-xinzengyewuxian',
  templateUrl: './xinzengyewuxian.component.html',
  styleUrls: ['./xinzengyewuxian.component.scss']
})
export class XinzengyewuxianComponent implements OnInit {
  @Input() data:any;
  checkpage:any=this.data;
  elements: any = {id:'服务费定价', first: '', last: '', handle: ''};
    
  headElements = [' ', '平台融资额最低值', '平台融资额最高值', '费率','费率类型'];
  //以下是资产方信息
  zhichanfangdata = {
    busName: '', //业务线名称
    assCuno: '', //资产方代码
    assCunm: '', //资产方名称
    finTypes: [

    ],           //融资类型
    finType: '',     //融资类型
    busModles: [], //交易模型
    busModle: '',   //交易模型
    feePatypes: [], //服务费结算方式
    feePatype: '',   //服务费结算方式
    users: [],      //使用方
    pmMinamt: '',    //最低融资
    pmMaxamt: '',     //最高融资
    feeRate: ' ',      //费率
    feeRatypes: [],    //费率类型
    feeRatype: '',     //费率类型

  };


  //以下是资金方数据
  zhijinfangdata = {
    busName: '',  //业务线名称
    pmCores: [], //核心平台
    pmCore: '',   //核心平台
    busModles: [],  //交易模型
    busModle: '',   //交易模型
    feePatypes: [], //服务费结算方式
    feePatype: '',   //服务费结算方式
    minamt: '',    //最低融资
    maxamt: '',     //最高融资
    feeRate: '',    //费率
    feeRatypes: [], //费率类型
    feeRatype: '',   //费率类型
  };

  
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
