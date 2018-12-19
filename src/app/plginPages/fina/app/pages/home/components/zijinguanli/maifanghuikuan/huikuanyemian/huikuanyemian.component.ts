import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-huikuanyemian',
  templateUrl: './huikuanyemian.component.html',
  styleUrls: ['./huikuanyemian.component.scss']
})
export class HuikuanyemianComponent implements OnInit {
  elements:any=[
    {test1:'6288 0889 0011 289',test2:'活期存款账户',test3:'CNY3,000,000.00'},
    {test1:'6288 0889 0011 289',test2:'活期存款账户',test3:'CNY3,000,000.00'},
    {test1:'6288 0889 0011 289',test2:'活期存款账户',test3:'CNY3,000,000.00'},
    {test1:'6288 0889 0011 289',test2:'活期存款账户',test3:'CNY3,000,000.00'},
  ];
  huikuandata:any={
    cuName:'',             //卖方名称
    busName:'',             //买方名称
    busType:'',             //业务类型
    contNo:'',              //合同编号
    jibenxinxi:{
      traInfNo:'',          //转让通知书编号
      resAmt:'',            //指定应收账款总金额
      opAcct:'',            //买方付款账户
      acctBal:'',           //付款账户余额
      acctname:'',          //户名
      acctOpnbk:'',         //开户行
    },
    buRecei:{

    },
    huikuan:{
      busRecei:'',            //应收账款金额合计：
      resAmt:'',              //本次回款金额：
      reAcct:'',              //回款存入指定账户：
      reAcnm:'',              //指定账户名称：
      reAcbk:'',              //指定账户开户行：
      remarks:'',             //备注
    }



  }
  dataArray:any;
  allcheck:boolean=false;
  constructor() { }
  optionsSelect:any;
  ngOnInit() {
  }
  
}
