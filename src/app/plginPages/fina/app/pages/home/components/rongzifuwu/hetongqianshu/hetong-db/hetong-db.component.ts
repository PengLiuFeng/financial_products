//合同担保
import { Component, OnInit, Input } from '@angular/core';
import { IMyOptions, document } from 'ng-uikit-pro-standard';
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
@Component({
  selector: 'app-hetong-db',
  templateUrl: './hetong-db.component.html',
  styleUrls: ['./hetong-db.component.scss']
})
export class HetongDbComponent implements OnInit {
    @Input() add:boolean;
    model:any;
    models:any;
   
    //add:boolean=false;
    public myDatePickerOptions: IMyOptions = {
    dayLabels: {su: '日', mo: '一', tu: '二', we: '三', th: '四', fr: '五', sa: '六'},
    dayLabelsFull: {su: "周日", mo: "周一", tu: "周二", we: "周三", th: "周四", fr: "周五",
    sa: "周六"},
    monthLabels: { 1: '一月', 2: '二月', 3: '三月', 4: '四月', 5: '五月', 6: '六月', 7: '七月', 8: '八月', 9: '九月', 10:
    '十月', 11: "十一月", 12: '十二月' },
    monthLabelsFull: { 1: "一月", 2: "二月", 3: "三月", 4: "四月", 5: "五月", 6: "六月", 7: "七月", 8:
    "八月", 9: "九月", 10: "十月", 11: "十一月", 12: "十二月" },
    todayBtnTxt: "今天",
    clearBtnTxt: "清除",
    closeBtnTxt: "关闭",
    
    showTodayBtn: true,
    showClearDateBtn: true
  };
//   personList: Array<any> = [
//     1
//    ];
//    datapersonList:Array<any>=[1,2,3,4,5,6,7];

   tablehead=[
      '序号','保证人客户号','保证人名称','保证人证件类型','保证人证件号码','担保金额','保证担保形式','保证方式','与借款人关系','保证人状态'
   ];
   
  constructor() { 
    
  }
  //用于控制比例选择的变量
  xybl:any;
  bzbl:any;
  dybl:any;
  zybl:any;
  xyblbo:boolean=true;
  bzblbo:boolean=false;
  dyblbo:boolean=false;
  zyblbo:boolean=false;
  xinyongbili:boolean=this.add;
  qitabili:boolean=this.add;
        //下拉框内容
        cerTypes:Array<any>[];
        guarantyTypes:Array<any>[];
        guaranteeTypes:Array<any>[];
        relationLenders:Array<any>[];
        gageTypes:Array<any>[];
        InOutStss:Array<any>[];
        //以下是头文件的字段
        head:any={
            
            vouFlt:'',
            vouAmt:'',
            endDate:'',
            grtContNo:'',
        };           
        // 以下是担保人信息
        danbaoren:any={
            cifNo:'',
            cifName:'',
            cerType:'',
            cerNo:'',
            guaranteeAmt:'',
            guarantyType:'',
            guaranteeType:'',
            relationLender:'',
            statusCode:'',
        };
        danbaorens:Array<any>=[
            { cifNo:'',
            cifName:'',
            cerType:'',
            cerNo:'',
            guaranteeAmt:'',
            guarantyType:'',
            guaranteeType:'',
            relationLender:'',
            statusCode:'',}
        ];
        
        //以下是抵押物信息
        diyawu:any={
            cifNo:'',
            cifName:'',
            coreGuarantyId:'',
            gageName:'',
            gageType:'',
            maxMortagageAmt:'',
            statusCode:'',
            InOutSts:'',
            inputDate:'',
            inputBrId:'',
        };
        diyawus:Array<any>=[
            {
                cifNo:'',
                cifName:'',
                coreGuarantyId:'',
                gageName:'',
                gageType:'',
                maxMortagageAmt:'',
                statusCode:'',
                InOutSts:'',
                inputDate:'',
                inputBrId:'',
            }
        ];
        //以下是质押物信息
        zhiyawu:any={
            cifNo:'',
            cifName:'',
            coreGuarantyId:'',
            gageName:'',
            gageType:'',
            maxMortagageAmt:'',
            statusCode:'',
            InOutSts:'',
            inputDate:'',
            inputBrId:'',
        };
        zhiyawus:Array<any>=[
            {
                cifNo:'',
                cifName:'',
                coreGuarantyId:'',
                gageName:'',
                gageType:'',
                maxMortagageAmt:'',
                statusCode:'',
                InOutSts:'',
                inputDate:'',
                inputBrId:'',
            }
        ];
  
  ngOnInit() {
   
  }
  addperson( data:string ){
    // if(this.datapersonList.length>0){
    //   const person=this.datapersonList[0];
    //   this.personList.push(person);
    //   this.datapersonList.splice(0,1);
    // }
    // this.danbaorens.push(this.danbaoren)
    if(data=='danbaorenxinxi'){
        this.danbaorens.push(JSON.parse(JSON.stringify(this.danbaoren)));
    }
    if(data=='diyawuxinxi'){
        this.diyawus.push(JSON.parse(JSON.stringify(this.diyawu)));
    }
    if(data=='zhiyawuxinxi'){
        this.zhiyawus.push(JSON.parse(JSON.stringify(this.zhiyawu)));
    }
       
  }
  remove(id:any,data:string){
    // this.datapersonList.push(this.personList[id]);
    // this.personList.splice(id,1);
    if(data=='danbaorenxinxi'){
        this.danbaorens.splice(id,1);
    }
    if(data=='diyawuxinxi'){
        this.diyawus.splice(id,1);
    }
    if(data=='zhiyawuxinxi'){
        this.zhiyawus.splice(id,1);
    }
  }
  tijiao(){
      console.log(this.danbaorens);
  }
  quxiao(){}
  value:any;
  selectcheck(data : any,databo:string){
     
    if(data!=""&&data!=null){
        
        if(databo=='bzblbo'){
            this.bzblbo=true;
            this.xinyongbili=true;
        }  
        else if(databo=='xyblbo'){
            this.xyblbo=true;
            this.qitabili=true;
        }
            
        else if(databo=='dyblbo'){
            this.dyblbo=true;
            this.xinyongbili=true;
        }
           
        else if(databo=='zyblbo'){
            this.xinyongbili=true;
            this.zyblbo=true;
        }
           
    }
    else{
       
        if(databo=='bzblbo'){           
            this.bzblbo=false;

        }
        else if(databo=='xyblbo'){
            this.xyblbo=false;
            this.qitabili=false;
            this.xinyongbili=false;
        } 
        else if(databo=='dyblbo'){
            this.dyblbo=false;
        }       
        else if(databo=='zyblbo'){
            this.zyblbo=false;
        }
        
    }
    
  }
  weiyi(){
      if(this.xyblbo==true&&this.xybl!=""&&this.xybl!=null){
          this.qitabili=true;
          this.xinyongbili=false;
      }else{
          this.qitabili=false;
          this.xinyongbili=true;
      }
      if(this.bzblbo==false&&this.dyblbo==false&&this.zyblbo==false&&(this.bzbl==""||this.bzbl==null)&&(this.dybl==""||this.dybl==null)&&(this.zybl==""||this.zybl==null)){
        this.qitabili=false;
        this.xinyongbili=false;
      }else{
        this.qitabili=false;
        this.xinyongbili=true;
      }
  }
  
}
