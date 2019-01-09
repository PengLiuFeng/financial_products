import { Component, OnInit,ViewChild } from '@angular/core';
import { IMyOptions, MDBDatePickerComponent } from 'ng-uikit-pro-standard';
import { Location} from '@angular/common';
import { ParamsService } from '../../../../../../params.service';



@Component({
  selector: 'app-xinzengyingshouzhangkuanmingxi',
  templateUrl: './xinzengyingshouzhangkuanmingxi.component.html',
  styleUrls: ['./xinzengyingshouzhangkuanmingxi.component.scss']
})


export class XinzengyingshouzhangkuanmingxiComponent implements OnInit {

  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;

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
  constructor(
    private location:Location,
    public params: ParamsService
  ) { 
    this._http = params._http;
  }
  ngOnInit() { 
      let today = new Date();
      let invalidDate = new Date();
      invalidDate.setDate(today.getDate() - 1);
      this.requestTableData();
  }
  editField: string;
  client:any={
    cuName:'',
    idType:'',
    idNo: '',
    BuReceiNo:  '',
    BrNo:  '',
    BrName:  '',
    TxDate: '',
    UpDate: '',
    list:[
      {
      busName: '',
      busCouna: '',
      busCoun: '',
      busType: '',
      busNo: '',
      billAmt: '',
      billDate:'',
      busRecei: '',
      endDate:''
    }  
    ]
  }
  childArray:any={
    busName: '',
    busCouna: '',
    busCoun: '',
    busType: '',
    busNo: '',
    billAmt: '',
    billDate:'',
    busRecei: '',
    endDate:''
  }  
  
  

  _http: any;
  isAjax = false;
  tableData=[];

  requestTableData() {
    this.isAjax = true;
    this._http.post('/fina/receive/insert', (e) => {
      this.isAjax = false;
      this.tableData = e.data.pb.list
      console.log(e)
      console.log(this.tableData);

    }, () => {
      this.isAjax = false;
  
    })
  }

  saveTableData() {
    this.isAjax = true;
    this._http.post('/fina/receive/insert',this.client, (e) => {
      this.isAjax = false;
      console.log(e)
    }, () => {
      this.isAjax = false;
  
    })
  }
  remove(id: any) {
    // this.awaitingPersonList.push(this.personList[id]);
    // this.personList.splice(id, 1);
    this.client.list.splice(id,1);
  }

  goback():void{
    this.location.back();
  }
  add() {
    // if (this.awaitingPersonList.length > 0) {
    //   const person = JSON.parse(JSON.stringify(this.awaitingPersonList[0]));
    //   this.personList.push(person);
      
    // }
    this.client.list.push(JSON.parse(JSON.stringify(this.childArray)));
  }

  save(){
    this.saveTableData();
    console.log(this.client.list);
  }
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
