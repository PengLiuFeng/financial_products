import { filter } from 'rxjs/operators';
import {AfterViewInit, Component, ElementRef, HostListener} from '@angular/core';
import {
  ActivatedRoute, NavigationCancel,
  NavigationEnd,
  NavigationStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  Routes
} from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './plginPages.menu';
import {BaHttpInterceptorService} from "../theme";
import {LoadingBarService} from "@ngx-loading-bar/core";

import { ParamsService } from './fina/app/params.service'

@Component({
  selector: 'plgin-pages',
  styleUrls: ['./pluginPages.component.scss'],
  template: `    
    <ba-sidebar></ba-sidebar>
    <ba-page-top ></ba-page-top>
    <ba-pageTop-tab  [value]="tabs">
    </ba-pageTop-tab>
    <div class="al-main">
      <div class="al-content">
          <ba-content-top></ba-content-top>
          <router-outlet></router-outlet>
      </div>
    </div>
    <!--<footer class="al-footer clearfix">-->
      <!--<div class="al-footer-right" translate>{{'general.created_with'}} <i class="ion-ios-heart"></i></div>-->
      <!--<div class="al-footer-main clearfix">-->
        <!--<div class="al-copy">&copy; <a href="http://www.baidu.com" translate>{{'general.king'}}</a> 2018</div>-->
        <!--<ul class="al-share clearfix">-->
          <!--<li><i class="socicon socicon-facebook"></i></li>-->
          <!--<li><i class="socicon socicon-twitter"></i></li>-->
          <!--<li><i class="socicon socicon-google"></i></li>-->
          <!--<li><i class="socicon socicon-github"></i></li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</footer>-->
    <ba-back-top position="100"></ba-back-top>
    <mat-progress-bar class="m-loading-bar" *ngIf="(loader.progress$|async) > 0" [value]="loader.progress$|async"></mat-progress-bar>
  `
})
export class PlginPages implements  AfterViewInit{
  tabs;
  constructor(private params:ParamsService,private routers: Router,public loader: LoadingBarService, private _elementRef:ElementRef,private router: Router,private _menuService: BaMenuService,private http: BaHttpInterceptorService) {
    this.pushTab();
  }
  //监听路由
  topage(url:string):void{
    this.params.dq.url=url;
    if(url=='/finas/home/wdsy'){
      this.routers.navigate(['/finas/home/wdsy/mygzt']);
      return;
    }else if(url=='/finas/home/khgl'){
      this.routers.navigate(['/finas/home/khgl/khxx']);
    }else if(url=='/finas/home/rzgl'){
      // this.routers.navigate(['/finas/home/rzgl/yszkgl/yszkmx']);
      this.routers.navigate(['/finas/home/rzgl/htqs/htqsList']);
    }else if(url=='/finas/home/znhygl'){
      this.routers.navigate(['/finas/home/znhygl/rzffhygz']);
    }
  }
  //监听窗口改变插件列表的长度
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.ngAfterViewInit();
    }
  ngAfterViewInit(){
    let height= this._elementRef.nativeElement.childNodes[0].querySelector('aside').clientHeight-99;
    //判断是否覆盖掉tab页
    if(this.tabs==undefined||this.tabs.length==0){
      this._elementRef.nativeElement.childNodes[0].querySelector('aside').style.top  = '66px';
      this._elementRef.nativeElement.childNodes[0].querySelector('aside').style['z-index']  = '1023';
      this._elementRef.nativeElement.childNodes[2].style.visibility  = 'hidden';
      this._elementRef.nativeElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.height=height+35+'px';
    }else {
        this._elementRef.nativeElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.height=height+'px';
    }
  }
  pushTab(){
    this.tabs=new Array();
    PAGES_MENU.plugins.forEach(item=>{
      if( this.router.url.indexOf(item.path)>-1){
        item.menu.tabs.forEach(item1=>{
          let tab={
            name:"",
            path:""
          };
          tab.name=item1.name;
          if(item1.path!=""&&item1.path!=undefined){
            tab.path="/"+item.path+item1.path
          }
          this.tabs.push(tab);
        })
      }
    })
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // set page progress bar loading to start on NavigationStart event router
        this.loader.start();
        this.topage(event.url);
      }
      if (event instanceof RouteConfigLoadStart) {
        this.loader.increment(35);
      }
      if (event instanceof RouteConfigLoadEnd) {
        this.loader.increment(75);

      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        // set page progress bar loading to end on NavigationEnd event router
        this.loader.complete();
      }
    });
    this.router.events
      .pipe(
        filter((event)=>event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        this.pushTab();
          let height= this._elementRef.nativeElement.childNodes[0].querySelector('aside').clientHeight-99;
          if(this.tabs==undefined||this.tabs.length==0){
          this._elementRef.nativeElement.childNodes[0].querySelector('aside').style.top  = '66px';
          this._elementRef.nativeElement.childNodes[0].querySelector('aside').style['z-index']  = '1023';
          this._elementRef.nativeElement.childNodes[2].style.visibility  = 'hidden';
          this._elementRef.nativeElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.height=height+35+'px';
        }else {
          this._elementRef.nativeElement.childNodes[0].querySelector('aside').style.top  = '101px';
          this._elementRef.nativeElement.childNodes[0].querySelector('aside').style['z-index']  = '1022';
          this._elementRef.nativeElement.childNodes[2].style.visibility  = 'unset';
          this._elementRef.nativeElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.height=height+'px';
        }
      });
      let plugins=[
        {
          path:PAGES_MENU.path,
          children:[]
        }
      ];
    //this.routers.push({ path: 'qloudAlgoModel', loadChildren: './plugins/DAP/dap.module#DapModule' });
    PAGES_MENU.plugins.forEach((item,index)=>{
      plugins[0].children.push(
        {
          path: item.path,
          data: {
            menu: {
              title: item.menu.title,
              icon: item.menu.icon,
              selected: false,
              expanded: false,
              order: index,
            }
          }
        }
      )
    });
    this._menuService.updateMenuByRoutes(<Routes>plugins);
    //更新左侧菜单
    // setTimeout(()=>{
    //   let plugins=[
    //     {
    //       path:PAGES_MENU.path,
    //       children:[]
    //     }
    //   ];
    //   this._menuService.updateMenuByRoutes(<Routes>plugins);
    // },3000)
  }
}

