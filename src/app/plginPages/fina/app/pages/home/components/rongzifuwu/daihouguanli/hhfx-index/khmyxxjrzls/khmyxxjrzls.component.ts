import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';

@Component({
  selector: 'app-khmyxxjrzls',
  templateUrl: './khmyxxjrzls.component.html',
  styleUrls: ['./khmyxxjrzls.component.scss']
})
export class KhmyxxjrzlsComponent implements OnInit {

  goback():void{
    this.location.back();
  }
  jump:string='khmy';
  changeJump1(){
    this.jump='khmy';

  }
  changeJump2(){
    this.jump='myxx';
  }
  changeJump3(){
    this.jump='xykh';
  }
  changeJump4(){
    this.jump='rzls';
  }
  constructor(private location:Location,) {
    
   }

  ngOnInit() {
  }

}
