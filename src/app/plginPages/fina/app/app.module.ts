import { NgModule,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './modules/routes/routes.module';
import { CommonModule } from '@angular/common';
import { BaHttpInterceptorService } from './../../../theme/services/index'
import { CalendarModule} from 'primeng/calendar';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { KehuxinxiComponent } from './pages/home/components/kehuguanli/kehuxinxi/kehuxinxi.component';
import { DfTreeComponent } from './pages/components/df-tree/df-tree.component';
import { JibenxinxiComponent } from './pages/home/components/kehuguanli/jibenxinxi/jibenxinxi.component';
import { LianxixinxiComponent } from './pages/home/components/kehuguanli/lianxixinxi/lianxixinxi.component';
import { GaikuangxinxiComponent } from './pages/home/components/kehuguanli/gaikuangxinxi/gaikuangxinxi.component';
import { ZizhixinxiComponent } from './pages/home/components/kehuguanli/zizhixinxi/zizhixinxi.component';
import { AddUserComponent } from './pages/home/components/kehuguanli/add-user/add-user.component';
import {MDBBootstrapModulesPro, ToastModule} from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { DemoComponent } from './pages/demo/demo.component';
import { ZonghexinxiComponent } from './pages/home/components/kehuguanli/zonghexinxi/zonghexinxi.component';
import { ShouxinxiangqingComponent } from './pages/home/components/pingjishouxin/shouxinxiangqing/shouxinxiangqing.component';
import { XinzengshouxinComponent } from './pages/home/components/pingjishouxin/xinzengshouxin/xinzengshouxin.component';
import { YingshouzhangkuanmingxiComponent } from './pages/home/components/rongzifuwu/yingshouzhangkuan/yingshouzhangkuanmingxi/yingshouzhangkuanmingxi.component';
import { XinzengyingshouzhangkuanmingxiComponent } from './pages/home/components/rongzifuwu/yingshouzhangkuan/xinzengyingshouzhangkuanmingxi/xinzengyingshouzhangkuanmingxi.component';
import { YszkzltjComponent } from './pages/home/components/rongzifuwu/yingshouzhangkuan/yszkzltj/yszkzltj.component';
import { YszkzlscComponent } from './pages/home/components/rongzifuwu/yingshouzhangkuan/yszkzlsc/yszkzlsc.component';
import { RongzifafangComponent } from './pages/home/components/zijinguanli/rongzifafang/rongzifafang.component';
import { YszkhkComponent } from './pages/home/components/zijinguanli/yszkhk/yszkhk.component';
import { YszkhgComponent } from './pages/home/components/zijinguanli/yszkhg/yszkhg.component';
import { YszkhgXxComponent } from './pages/home/components/zijinguanli/yszkhg-xx/yszkhg-xx.component';
import { YszktzComponent } from './pages/home/components/rongzifuwu/yingshouzhangkuan/yszktz/yszktz.component';
import { YszktzZrComponent } from './pages/home/components/rongzifuwu/yingshouzhangkuan/yszktz-zr/yszktz-zr.component';
import { HetongqianshuComponent } from './pages/home/components/rongzifuwu/hetongqianshu/hetongqianshu/hetongqianshu.component';
import { HetongxqComponent } from './pages/home/components/rongzifuwu/hetongqianshu/hetongxq/hetongxq.component';
import { HetongDbComponent } from './pages/home/components/rongzifuwu/hetongqianshu/hetong-db/hetong-db.component';
import { RongzishenqingComponent } from './pages/home/components/rongzifuwu/rongzishenqing/rongzishenqing/rongzishenqing.component';
import { SqXxComponent } from './pages/home/components/rongzifuwu/rongzishenqing/sq-xx/sq-xx.component';
import { YszkhgTbaleComponent } from './pages/home/components/zijinguanli/yszkhg-xx/yszkhg-tbale/yszkhg-tbale.component';
import { ZrtzsHeaderComponent } from './pages/home/components/components/zrtzs-header/zrtzs-header.component';
import { ShenqingxiangqingHeadComponent } from './pages/home/components/rongzifuwu/rongzishenqing/shenqingxiangqing-head/shenqingxiangqing-head.component';
import { ShenqingxiangqingBodyComponent } from './pages/home/components/rongzifuwu/rongzishenqing/shenqingxiangqing-body/shenqingxiangqing-body.component';
import { XinzengrongzishenqingComponent } from './pages/home/components/rongzifuwu/rongzishenqing/xinzengrongzishenqing/xinzengrongzishenqing.component';
import { YszkzrdjComponent } from './pages/home/components/rongzifuwu/yingshouzhangkuan/yszkzrdj/yszkzrdj.component';
import { PingjishouxinComponent } from './pages/home/components/pingjishouxin/pingjishouxin/pingjishouxin.component';
import { YszkzrqrhzComponent  } from './pages/home/components/rongzifuwu/yingshouzhangkuan/yszkzrqrhz/yszkzrqrhz.component';

import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import { ZjzhComponent } from './pages/home/components/zijinguanli/zjzh/zjzh.component';
import { ZhjymxComponent } from './pages/home/components/zijinguanli/zhjymx/zhjymx.component';
import { WodehetongComponent } from './pages/home/components/rongzifuwu/hetongqianshu/wodehetong/wodehetong.component';
import { FuwukaitongComponent } from './pages/home/components/rongzifuwu/hetongqianshu/fuwukaitong/fuwukaitong.component';


import { HtqsIndexComponent } from './pages/home/components/rongzifuwu/hetongqianshu/htqs-index/htqs-index.component';
import { MygongzuotaiComponent } from './pages/home/components/xitongshouye/mygongzuotai/mygongzuotai.component';
import { HtqsHomeComponent } from './pages/home/components/rongzifuwu/hetongqianshu/htqs-index/htqs-home/htqs-home.component';
import { HtqsListComponent } from './pages/home/components/rongzifuwu/hetongqianshu/htqs-index/htqs-list/htqs-list.component';
import { RightWinComponent } from './pages/components/right-win/right-win.component';

import { JkftjComponent } from './pages/home/components/tongjifenxi/jkftj/jkftj.component';
import { FeiyongguanliComponent } from './pages/home/components/zijinguanli/feiyongguanli/feiyongguanli/feiyongguanli.component';
import { FeiyongshouquComponent } from './pages/home/components/zijinguanli/feiyongguanli/feiyongshouqu/feiyongshouqu.component';
import { FengxianyujingComponent } from './pages/home/components/xitongshouye/fengxianyujing/fengxianyujing/fengxianyujing.component';
import { YujinglishiComponent } from './pages/home/components/xitongshouye/fengxianyujing/yujinglishi/yujinglishi.component';

import { XykhComponent } from './pages/home/components/rongzifuwu/daihouguanli/hhfx-index/xykh/xykh.component';
import { RzlsComponent } from './pages/home/components/rongzifuwu/daihouguanli/hhfx-index/rzls/rzls.component';
import { YszkdqtxComponent } from './pages/home/components/xitongshouye/fengxianyujing/yszkdqtx/yszkdqtx.component';
import { HhfxIndexComponent } from './pages/home/components/rongzifuwu/daihouguanli/hhfx-index/hhfx-index.component';
import { HkqkfxComponent } from './pages/home/components/rongzifuwu/daihouguanli/hhfx-index/hkqkfx/hkqkfx.component';
import { KhmyxxjrzlsComponent } from './pages/home/components/rongzifuwu/daihouguanli/hhfx-index/khmyxxjrzls/khmyxxjrzls.component';
import { MyxxComponent } from './pages/home/components/rongzifuwu/daihouguanli/hhfx-index/myxx/myxx.component';
import { ShouxinhezhuntongzhiComponent } from './pages/home/components/rongzifuwu/rongzishenqing/shouxinhezhuntongzhi/shouxinhezhuntongzhi.component';
import { HetongDbxqComponent } from './pages/home/components/rongzifuwu/hetongqianshu/hetong-dbxq/hetong-dbxq.component';
import { RongzifafangheyueguizeComponent } from './pages/home/components/zhinengheyueguizeguanli/rongzifafangheyueguize/rongzifafangheyueguize.component';
import { DaikuanhuankuanheyueguizeComponent } from './pages/home/components/zhinengheyueguizeguanli/daikuanhuankuanheyueguize/daikuanhuankuanheyueguize.component';
import { ZnhygzglHeaderComponent } from './pages/home/components/components/znhygzgl-header/znhygzgl-header.component';
import { YewudiaochayushenpiComponent } from './pages/home/components/rongzifuwu/yewudiaochayushenpi/yewudiaochayushenpi/yewudiaochayushenpi.component';
import { ShenpixiangqingComponent } from './pages/home/components/rongzifuwu/yewudiaochayushenpi/shenpixiangqing/shenpixiangqing.component';
import { DaiqianjindiaobaogaoComponent } from './pages/home/components/rongzifuwu/yewudiaochayushenpi/daiqianjindiaobaogao/daiqianjindiaobaogao.component';
import { YewuxianpeizhiComponent } from './pages/home/components/chanpingongchang/yewuxianpeizhi/yewuxianpeizhi.component';
import { XinzengyewuxianComponent } from './pages/home/components/chanpingongchang/xinzengyewuxian/xinzengyewuxian.component';
import { ChanpinxianpeizhiComponent } from './pages/home/components/chanpingongchang/chanpinxianpeizhi/chanpinxianpeizhi.component';
import { XinzengchanpinxianComponent } from './pages/home/components/chanpingongchang/xinzengchanpinxian/xinzengchanpinxian.component';
import { YwdcyspHeaderComponent } from './pages/home/components/components/ywdcysp-header/ywdcysp-header.component';
import { YwdcyspPjsxComponent } from './pages/home/components/rongzifuwu/yewudiaochayushenpi/ywdcysp-pjsx/ywdcysp-pjsx.component';
import { FafangxinxiComponent } from './pages/home/components/zijinguanli/rongzifafang/fafangxinxi/fafangxinxi.component';
import { YonghuguanliComponent } from './pages/home/components/xitongguanli/yonghuguanli/yonghuguanli.component';
import { YonghuzhuceComponent } from './pages/home/components/xitongguanli/yonghuguanli/yonghuzhuce/yonghuzhuce.component';
import { BreadcrumbsComponent } from './pages/components/breadcrumbs/breadcrumbs.component';

import { MaifanghuikuanComponent } from './pages/home/components/zijinguanli/maifanghuikuan/maifanghuikuan.component';
import { HuikuanyemianComponent } from './pages/home/components/zijinguanli/maifanghuikuan/huikuanyemian/huikuanyemian.component';

@NgModule({
  declarations: [
    XykhComponent,
    RzlsComponent,
    YszkdqtxComponent,
    HhfxIndexComponent,
    HkqkfxComponent,
    KhmyxxjrzlsComponent,
    MyxxComponent,
    AppComponent,
    HomeComponent,
    KehuxinxiComponent,
    DfTreeComponent,
    JibenxinxiComponent,
    LianxixinxiComponent,
    GaikuangxinxiComponent,
    ZizhixinxiComponent,
    AddUserComponent,
    DemoComponent,
    ZonghexinxiComponent,
    ShouxinxiangqingComponent,
    XinzengshouxinComponent,
    YingshouzhangkuanmingxiComponent,
    XinzengyingshouzhangkuanmingxiComponent,
    YszkzltjComponent,
    YszkzlscComponent,
    RongzifafangComponent,
    YszkhkComponent,
    YszkhgComponent,
    YszkhgXxComponent,
    YszktzComponent,
    YszktzZrComponent,
    HetongqianshuComponent,
    HetongxqComponent,
    HetongDbComponent,
    RongzishenqingComponent,
    SqXxComponent,
    YszkhgTbaleComponent,
     ZrtzsHeaderComponent,
     ShenqingxiangqingHeadComponent,
     ShenqingxiangqingBodyComponent,
     XinzengrongzishenqingComponent,
    YszkzrdjComponent,
    PingjishouxinComponent,
    YszkzrqrhzComponent,
    ZjzhComponent,
    ZhjymxComponent,
    WodehetongComponent,
    FuwukaitongComponent,
    MaifanghuikuanComponent,
    HuikuanyemianComponent,
    MygongzuotaiComponent,
    JkftjComponent,
    HtqsIndexComponent,
    MygongzuotaiComponent,
    HtqsHomeComponent,
    HtqsListComponent,
    RightWinComponent,
    FeiyongguanliComponent,
    FeiyongshouquComponent,
    FengxianyujingComponent,
    YujinglishiComponent,
    ShouxinhezhuntongzhiComponent,
    HetongDbxqComponent,  
    RongzifafangheyueguizeComponent,
    DaikuanhuankuanheyueguizeComponent,
    ZnhygzglHeaderComponent,
    YewudiaochayushenpiComponent,
    ShenpixiangqingComponent,
    DaiqianjindiaobaogaoComponent,
    YewuxianpeizhiComponent,
    XinzengyewuxianComponent,
    ChanpinxianpeizhiComponent,
    XinzengchanpinxianComponent,
    YwdcyspHeaderComponent,
    YwdcyspPjsxComponent,
    FafangxinxiComponent,
    YonghuguanliComponent,
    YonghuzhuceComponent,
    BreadcrumbsComponent

  ],
  imports: [
    FormsModule,
    RoutesModule,
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    ToastModule.forRoot(),
    CalendarModule,
    DropdownModule,
    ButtonModule
  ],
  providers: [MDBSpinningPreloader,BaHttpInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  constructor() {
    Date.prototype['Format'] = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt)) 
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}



    let sc=function(){
      document.getElementsByClassName('al-sidebar')[0].addEventListener("click", function(){
        this.setAttribute('class','al-sidebar al-sidebar-fina');
      });
      document.getElementsByClassName('al-main')[0].addEventListener("click", function(){
        this.setAttribute('class','al-main fina-main-max');
      });
    }
    if(document.getElementsByClassName('al-sidebar')[0]){
      sc();
    }else{
      setTimeout(function(){
        sc();
      },1000)
    }
  }
  ngOnInit() {
  }
}
