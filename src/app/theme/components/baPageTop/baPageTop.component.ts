import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';
import {OnInit} from "@angular/core";
import {ChangeDetectorRef} from "@angular/core";

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop implements OnInit{
  public isScrolled:boolean;
  public isMenuCollapsed:boolean;
  ngOnInit() {
    this.isScrolled=false;
    this.isMenuCollapsed=false;
  }
  constructor(private _state:GlobalState,private cd: ChangeDetectorRef) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
