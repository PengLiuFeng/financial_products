import { Component, ViewChild,Input, OnInit ,OnChanges} from '@angular/core';
import { MDBDatePickerComponent, IMyOptions, InputAutoFillDirective } from 'ng-uikit-pro-standard';
import { Location} from '@angular/common';
import { ParamsService } from './../../../../../params.service';
import { JibenxinxiComponent } from './../../kehuguanli/jibenxinxi/jibenxinxi.component';
import { LianxixinxiComponent } from './../../kehuguanli/lianxixinxi/lianxixinxi.component';

@Component({
  selector: 'app-zonghexinxi',
  templateUrl: './zonghexinxi.component.html',
  styleUrls: ['./zonghexinxi.component.scss']
})
export class ZonghexinxiComponent implements OnInit {
  @Input() id:any ;
  @Input() cuNo:any ;   //调用本界面的时候必须传入的值
  inputdata:any;
 //@Input() newUser:any;
  // cuNo:any=this.inputdata.cuNo;
 // cuNo:any=111;
  apps:any='jbxx';
  model: any;
  modell: any;
  bo:boolean =false;
  _http:any;
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  public myDatePickerOptions: IMyOptions = {};

constructor( private location:Location,private param:ParamsService) {
  this._http=param._http
 }
  isajax=false;    //用于判断是否请求被占用
  requestData(){
      this.isajax=true
      this._http.get('/fina/custom/detail?cuNo='+this.cuNo, (e)=>{
        this.isajax=false
            // this.inputdata.idNo=e.data.apb.idNo
            // this.inputdata.idType=e.data.apb.idType
            // this.inputdata.cuName=e.data.apb.cuName
            // this.inputdata.cuNo=e.data.apb.cuNo
            this.inputdata=e.data.apb
            console.log(this.inputdata)
      },()=>{
        this.isajax=false
      }
      )

  }
  ngOnChanges(it:any){
      if(this.cuNo!=null&&this.cuNo!=undefined){
        this.requestData()
      }
  }
  ngOnInit() {
      if(this.cuNo==null||this.cuNo==undefined){
        this.inputdata={
          idNo:'',
          idType:'',
          cuName:'',
          cuNo:'',
        }
      }
  }
  goback():void{
    this.location.back();
  }
  opens(t:any):void{
    this.apps=t;
  }
  gaibian() {
    if(this.bo==false)
      this.bo=true;
    else
      this.bo=false;
  }
  

}
