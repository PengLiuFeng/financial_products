import { Component, OnInit,Input,Output,EventEmitter,OnChanges } from '@angular/core';

@Component({
  selector: 'app-right-win',
  templateUrl: './right-win.component.html',
  styleUrls: ['./right-win.component.scss']
})
export class RightWinComponent implements OnInit,OnChanges {
  @Input() isShow:any;
  @Output() isShowChange = new EventEmitter();
  @Input() position:string;//转场动画方向
  isshowdf=false;
  myIsShow=false;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(it: any) {
    this.myIsShow=true;
    if(it.isShow.currentValue){
      setTimeout(()=>{
        this.isshowdf=true;
      })
    }else{
      this.isshowdf=false;
      setTimeout(()=>{
        this.myIsShow=false;
      },300)
    }
  }
  onhides():void{
    this.isShowChange.emit(false);
  }
  onhidesNo(event: Event):void{
    event.stopPropagation();
  }
}
