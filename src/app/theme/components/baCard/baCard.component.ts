import {Component, ElementRef, Input} from '@angular/core';
@Component({
  selector: 'ba-card',
  templateUrl: './baCard.html',
})
export class BaCard {
  @Input() cardTitle:String;
  @Input() baCardClass:String;
  @Input() cardType:String;
    constructor(private el:ElementRef) {
    }
    getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
}
