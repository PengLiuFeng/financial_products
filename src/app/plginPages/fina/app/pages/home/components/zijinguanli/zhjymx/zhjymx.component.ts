import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zhjymx',
  templateUrl: './zhjymx.component.html',
  styleUrls: ['./zhjymx.component.scss']
})
export class ZhjymxComponent implements OnInit {

  constructor() { }
  accType:any;
  acctSta:any;
  curType:any;
  acctUse:any;

  zhlx=[
    {label:"账户类型",disabled:"disabled"}
  ]
  zhzt=[
    {label:"账户状态",disabled:"disabled"}
  ]
  bz=[
    {label:"币种",disabled:"disabled"}
  ]
  zhyt=[
    {label:"账户用途",disabled:"disabled"}
  ]
  tableData=[
    {trsId:"1", acctNO:"6288 0889 0011 289", trsdaTime:"2018-10-21", serseqNo:"2018102100198", trsAmt:"200.000.00", trsAcbal:"300.000.00", opAcct:"", opName:"", opOpbnk:"", trsType:"网银汇款", digest:"他行转账", trsAddrs:"中国工商银行上地分行"},
    {trsId:"1", acctNO:"6288 0889 0011 289", trsdaTime:"2018-10-21", serseqNo:"2018102100198", trsAmt:"200.000.00", trsAcbal:"300.000.00", opAcct:"", opName:"", opOpbnk:"", trsType:"网银汇款", digest:"他行转账", trsAddrs:"中国工商银行上地分行"},
    {trsId:"1", acctNO:"6288 0889 0011 289", trsdaTime:"2018-10-21", serseqNo:"2018102100198", trsAmt:"200.000.00", trsAcbal:"300.000.00", opAcct:"", opName:"", opOpbnk:"", trsType:"网银汇款", digest:"他行转账", trsAddrs:"中国工商银行上地分行"},
    {trsId:"1", acctNO:"6288 0889 0011 289", trsdaTime:"2018-10-21", serseqNo:"2018102100198", trsAmt:"200.000.00", trsAcbal:"300.000.00", opAcct:"", opName:"", opOpbnk:"", trsType:"网银汇款", digest:"他行转账", trsAddrs:"中国工商银行上地分行"},
    {trsId:"1", acctNO:"6288 0889 0011 289", trsdaTime:"2018-10-21", serseqNo:"2018102100198", trsAmt:"200.000.00", trsAcbal:"300.000.00", opAcct:"", opName:"", opOpbnk:"", trsType:"网银汇款", digest:"他行转账", trsAddrs:"中国工商银行上地分行"},
    {trsId:"1", acctNO:"6288 0889 0011 289", trsdaTime:"2018-10-21", serseqNo:"2018102100198", trsAmt:"200.000.00", trsAcbal:"300.000.00", opAcct:"", opName:"", opOpbnk:"", trsType:"网银汇款", digest:"他行转账", trsAddrs:"中国工商银行上地分行"},
    {trsId:"1", acctNO:"6288 0889 0011 289", trsdaTime:"2018-10-21", serseqNo:"2018102100198", trsAmt:"200.000.00", trsAcbal:"300.000.00", opAcct:"", opName:"", opOpbnk:"", trsType:"网银汇款", digest:"他行转账", trsAddrs:"中国工商银行上地分行"},
    {trsId:"1", acctNO:"6288 0889 0011 289", trsdaTime:"2018-10-21", serseqNo:"2018102100198", trsAmt:"200.000.00", trsAcbal:"300.000.00", opAcct:"", opName:"", opOpbnk:"", trsType:"网银汇款", digest:"他行转账", trsAddrs:"中国工商银行上地分行"},
    {trsId:"1", acctNO:"6288 0889 0011 289", trsdaTime:"2018-10-21", serseqNo:"2018102100198", trsAmt:"200.000.00", trsAcbal:"300.000.00", opAcct:"", opName:"", opOpbnk:"", trsType:"网银汇款", digest:"他行转账", trsAddrs:"中国工商银行上地分行"},
    {trsId:"1", acctNO:"6288 0889 0011 289", trsdaTime:"2018-10-21", serseqNo:"2018102100198", trsAmt:"200.000.00", trsAcbal:"300.000.00", opAcct:"", opName:"", opOpbnk:"", trsType:"网银汇款", digest:"他行转账", trsAddrs:"中国工商银行上地分行"},
    {trsId:"1", acctNO:"6288 0889 0011 289", trsdaTime:"2018-10-21", serseqNo:"2018102100198", trsAmt:"200.000.00", trsAcbal:"300.000.00", opAcct:"", opName:"", opOpbnk:"", trsType:"网银汇款", digest:"他行转账", trsAddrs:"中国工商银行上地分行"},
    {trsId:"1", acctNO:"6288 0889 0011 289", trsdaTime:"2018-10-21", serseqNo:"2018102100198", trsAmt:"200.000.00", trsAcbal:"300.000.00", opAcct:"", opName:"", opOpbnk:"", trsType:"网银汇款", digest:"他行转账", trsAddrs:"中国工商银行上地分行"},
    {trsId:"1", acctNO:"6288 0889 0011 289", trsdaTime:"2018-10-21", serseqNo:"2018102100198", trsAmt:"200.000.00", trsAcbal:"300.000.00", opAcct:"", opName:"", opOpbnk:"", trsType:"网银汇款", digest:"他行转账", trsAddrs:"中国工商银行上地分行"},
    {trsId:"1", acctNO:"6288 0889 0011 289", trsdaTime:"2018-10-21", serseqNo:"2018102100198", trsAmt:"200.000.00", trsAcbal:"300.000.00", opAcct:"", opName:"", opOpbnk:"", trsType:"网银汇款", digest:"他行转账", trsAddrs:"中国工商银行上地分行"}
   ]
  ngOnInit() {
  }

}
