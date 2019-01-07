import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-df-steps',
  templateUrl: './df-steps.component.html',
  styleUrls: ['./df-steps.component.scss']
})
export class DfStepsComponent implements OnInit {
  @Input() active:any
  @Input() options:any
  flexbasis="";
 /*  active=1;
  options=[
    {
      title:"步骤1",
      name:"填写客户信息"
    },
    {
      title:"步骤2",
      name:"尽调资料上传"
    },
    {
      title:"步骤3",
      name:"资料审核"
    },
    {
      title:"步骤4",
      name:"线下尽调"
    },
    {
      title:"步骤5",
      name:"审贷会"
    },
    {
      title:"步骤6",
      name:"授信合同签署"
    }
  ] */
  constructor() {
    if(this.options){
      let size=this.options.length;
      if(size>0){
        if(size==3){
          this.flexbasis="50%";
        }else{
          this.flexbasis=(100/size)+"%";
        }
      }

    }
  }

  ngOnInit() {

  }

}
