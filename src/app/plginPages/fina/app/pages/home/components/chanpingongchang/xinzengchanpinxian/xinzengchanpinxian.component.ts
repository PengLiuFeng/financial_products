import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xinzengchanpinxian',
  templateUrl: './xinzengchanpinxian.component.html',
  styleUrls: ['./xinzengchanpinxian.component.scss']
})
export class XinzengchanpinxianComponent implements OnInit {
  constructor() { }
  chanpinxianData={
    finproNo:'',
    finproNos:[],       //产品id
    finproNm:'',        //产品名称
    finproNms:[],
    capNms:[],          //资金方
    capNm:'',
    busNames:[],        //业务线名称
    busName:'',
    curType:'',         //币种
    curTypes:[] ,
    avaiFlg:' ',        //启用标志
    avaiFlgs:[],
    rateCode:''  ,      //利率代码
    rate:'',            //利率
    limtAmt:'',         //单笔限额
    termTypes:[],       //期限类型
    termType:'',    
    term:'',            //期限
    ifupt:'',           //项目金额是否可修改
    ifupts:[],           
    margFlts:[],        //保证金比例
    margFlt:'',         
    margForms:[],       //保证金结算方式
    margForm:'',
    margPays:[],        //保证金支付方式
    margPay:'',
    repayType:'',       //还款方式
    repayTypes:[],  
    paDayps:[],           //还款日计划
    paDayp:'',
    capGo:'',           //资金流向
    capGos:[],        
    onOffs:[],           //融资款支付方式
    onOff:'',           
    downPaymentFlt:'',
    downPaymentFlts:[],  //融资额折扣比例
    ifComInt:'',          //逾期是否收取复利
    ifComInts:[],


  }

  //产品生命周期配置
  // Inputchanpinlife=[
  //   {capCode:'1',capDes:'发起'},
  //   {capCode:'2',capDes:'初审'},
  //   {capCode:'3',capDes:'终审'},
  //   {capCode:'4',capDes:'合同'},
  //   {capCode:'5',capDes:'付保证金'},
  //   {capCode:'6',capDes:'付融资款'},
  //   {capCode:'7',capDes:'还款'},
  //   {capCode:'8',capDes:'退还保证金'},
  //   {capCode:'9',capDes:'结束'},
  // ];
  Outputchanpinlife=[
    {value:false,capCode:'1',capDes:'发起'},
    {value:false,capCode:'2',capDes:'初审'},
    {value:false,capCode:'3',capDes:'终审'},
    {value:false,capCode:'4',capDes:'合同'},
    {value:false,capCode:'5',capDes:'付保证金'},
    {value:false,capCode:'6',capDes:'付融资款'},
    {value:false,capCode:'7',capDes:'还款'},
    {value:false,capCode:'8',capDes:'退还保证金'},
    {value:false,capCode:'9',capDes:'结束'},
  ]

  changeIsHidden(){
    console.log(this.Outputchanpinlife);
  }

  gs={
    vals:'',
    name:[
      { value: '1', label: '华软产融平台' },
      ]
  }
  ngOnInit() {
  }
  tijiao(){
    console.log(this.Outputchanpinlife);
  }
}
