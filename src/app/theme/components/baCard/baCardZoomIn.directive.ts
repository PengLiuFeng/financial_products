import {Directive, ElementRef,Renderer2} from '@angular/core';


@Directive({
  selector: '[baCardZoomIn]'
})
export class baCardZoomIn {

  constructor( private _el:ElementRef,private renderer:Renderer2) {

  }
  ngAfterViewInit() { // 模板中的元素已创建完成
    this.renderer.addClass(this._el.nativeElement,'zoomIn');
    this.renderer.removeClass(this._el.nativeElement,'full-invisible');
  }
}
