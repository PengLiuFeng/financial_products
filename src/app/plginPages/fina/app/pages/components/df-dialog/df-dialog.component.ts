import { Component, OnInit,OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-df-dialog',
  templateUrl: './df-dialog.component.html',
  styleUrls: ['./df-dialog.component.scss']
})
export class DfDialogComponent implements OnInit,OnChanges {
@Input() isShow:any
  constructor() { }
  ngOnChanges(it:any){
    console.log(it)
  }
  ngOnInit() {
    let div2=document.getElementById('v-modal');
    if(!div2){
      document.querySelector("body")
      div2 = document.createElement("div");
      div2.setAttribute('id','v-modal');
      div2.setAttribute('class','v-modal');
      div2.style.display='none';
      window['vmodal']=div2;
    }
    if(!window['vmodal']){

    }
  }

}
