import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'ba-back-top',
  styleUrls: ['./baBackTop.scss'],
  template: `      
      <i *ngIf="showBackToTop" class="fa fa-angle-up back-top ba-back-top" title="{{'general.backtop'|translate}}" (click)="scrollToTop()"></i>

  `
})
export class BaBackTop {
    public showBackToTop:boolean = false;
    @HostListener('window:scroll', ['$event'])
    onWindowScroll($event) {
        if($event.target.documentElement.scrollTop> 300){
            this.showBackToTop = true
        }else{
            if($event.target.documentElement.scrollTop< 228){
                this.showBackToTop = false;
            }
        }
    }
    public scrollToTop(){
        var scrollDuration = 200;
        var scrollStep = -window.pageYOffset  / (scrollDuration / 20);
        var scrollInterval = setInterval(()=>{
            if(window.pageYOffset != 0){
                window.scrollBy(0, scrollStep);
            }
            else{
                clearInterval(scrollInterval);
            }
        },10);
        if(window.innerWidth <= 768){
            setTimeout(() => { window.scrollTo(0,0) });
        }
    }
}
