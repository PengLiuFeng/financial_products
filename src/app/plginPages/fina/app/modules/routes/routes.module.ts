
import {ModuleWithProviders, NgModule,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule,ActivatedRoute } from '@angular/router';

import { DemoComponent } from './../../pages/demo/demo.component';

import {AppComponent} from "./../../app.component";
import {HomeComponent} from "./../../pages/home/home.component";
import {KehuxinxiComponent} from "./../../pages/home/components/kehuguanli/kehuxinxi/kehuxinxi.component";
import { JibenxinxiComponent } from './../../pages/home/components/kehuguanli/jibenxinxi/jibenxinxi.component';
import { LianxixinxiComponent } from './../../pages/home/components/kehuguanli/lianxixinxi/lianxixinxi.component';
import { GaikuangxinxiComponent } from './../../pages/home/components/kehuguanli/gaikuangxinxi/gaikuangxinxi.component';
import { ZizhixinxiComponent } from './../../pages/home/components/kehuguanli/zizhixinxi/zizhixinxi.component';
import { AddUserComponent } from './../../pages/home/components/kehuguanli/add-user/add-user.component';
import { ZonghexinxiComponent } from './../../pages/home/components/kehuguanli/zonghexinxi/zonghexinxi.component';
import { ShouxinxiangqingComponent } from './../../pages/home/components/pingjishouxin/shouxinxiangqing/shouxinxiangqing.component';
import { XinzengshouxinComponent } from './../../pages/home/components/pingjishouxin/xinzengshouxin/xinzengshouxin.component';
import { YingshouzhangkuanmingxiComponent } from './../../pages/home/components/rongzifuwu/yingshouzhangkuan/yingshouzhangkuanmingxi/yingshouzhangkuanmingxi.component';
import { XinzengyingshouzhangkuanmingxiComponent } from './../../pages/home/components/rongzifuwu/yingshouzhangkuan/xinzengyingshouzhangkuanmingxi/xinzengyingshouzhangkuanmingxi.component';
import { YszkzltjComponent } from './../../pages/home/components/rongzifuwu/yingshouzhangkuan/yszkzltj/yszkzltj.component';
import { YszkzlscComponent } from './../../pages/home/components/rongzifuwu/yingshouzhangkuan/yszkzlsc/yszkzlsc.component';
import { YszkhkComponent } from './../../pages/home/components/zijinguanli/yszkhk/yszkhk.component';
import { YszkhgComponent } from './../../pages/home/components/zijinguanli/yszkhg/yszkhg.component';

import { YszkhgXxComponent } from './../../pages/home/components/zijinguanli/yszkhg-xx/yszkhg-xx.component';
import { YszktzComponent } from './../../pages/home/components/rongzifuwu/yingshouzhangkuan/yszktz/yszktz.component';
import { YszktzZrComponent } from './../../pages/home/components/rongzifuwu/yingshouzhangkuan/yszktz-zr/yszktz-zr.component';
import { HetongqianshuComponent } from './../../pages/home/components/rongzifuwu/hetongqianshu/hetongqianshu/hetongqianshu.component';
import { HetongxqComponent } from './../../pages/home/components/rongzifuwu/hetongqianshu/hetongxq/hetongxq.component';
import { HetongDbComponent } from './../../pages/home/components/rongzifuwu/hetongqianshu/hetong-db/hetong-db.component';
import { RongzishenqingComponent } from './../../pages/home/components/rongzifuwu/rongzishenqing/rongzishenqing/rongzishenqing.component';
import { SqXxComponent } from './../../pages/home/components/rongzifuwu/rongzishenqing/sq-xx/sq-xx.component';
import { ShenqingxiangqingHeadComponent } from './../../pages/home/components/rongzifuwu/rongzishenqing/shenqingxiangqing-head/shenqingxiangqing-head.component';
import { ShenqingxiangqingBodyComponent } from './../../pages/home/components/rongzifuwu/rongzishenqing/shenqingxiangqing-body/shenqingxiangqing-body.component';
import { XinzengrongzishenqingComponent } from './../../pages/home/components/rongzifuwu/rongzishenqing/xinzengrongzishenqing/xinzengrongzishenqing.component';
import { YszkzrdjComponent } from './../../pages/home/components/rongzifuwu/yingshouzhangkuan/yszkzrdj/yszkzrdj.component';
import { PingjishouxinComponent } from './../../pages/home/components/pingjishouxin/pingjishouxin/pingjishouxin.component';
import { YszkzrqrhzComponent  } from './../../pages/home/components/rongzifuwu/yingshouzhangkuan/yszkzrqrhz/yszkzrqrhz.component';
import { ZhjymxComponent  } from './../../pages/home/components/zijinguanli/zhjymx/zhjymx.component';
import { ZjzhComponent  } from './../../pages/home/components/zijinguanli/zjzh/zjzh.component';
import { WodehetongComponent } from './../../pages/home/components/rongzifuwu/hetongqianshu/wodehetong/wodehetong.component';
import { FuwukaitongComponent } from './../../pages/home/components/rongzifuwu/hetongqianshu/fuwukaitong/fuwukaitong.component';
import { HtqsIndexComponent } from './../../pages/home/components/rongzifuwu/hetongqianshu/htqs-index/htqs-index.component';
import { HtqsListComponent } from './../../pages/home/components/rongzifuwu/hetongqianshu/htqs-index/htqs-list/htqs-list.component';

import { MygongzuotaiComponent  } from './../../pages/home/components/xitongshouye/mygongzuotai/mygongzuotai.component';
import {JkftjComponent} from './../../pages/home/components/tongjifenxi/jkftj/jkftj.component';
import { FeiyongguanliComponent } from './../../pages/home/components/zijinguanli/feiyongguanli/feiyongguanli/feiyongguanli.component';
import { FeiyongshouquComponent } from './../../pages/home/components/zijinguanli/feiyongguanli/feiyongshouqu/feiyongshouqu.component';
import { FengxianyujingComponent } from './../../pages/home/components/xitongshouye/fengxianyujing/fengxianyujing/fengxianyujing.component';
import { YujinglishiComponent } from './../../pages/home/components/xitongshouye/fengxianyujing/yujinglishi/yujinglishi.component';
import { HhfxIndexComponent } from '../../pages/home/components/rongzifuwu/daihouguanli/hhfx-index/hhfx-index.component';
import { XykhComponent } from '../../pages/home/components/rongzifuwu/daihouguanli/hhfx-index/xykh/xykh.component';
import { RzlsComponent } from '../../pages/home/components/rongzifuwu/daihouguanli/hhfx-index/rzls/rzls.component';
import { YszkdqtxComponent } from '../../pages/home/components/xitongshouye/fengxianyujing/yszkdqtx/yszkdqtx.component';
import { HkqkfxComponent } from '../../pages/home/components/rongzifuwu/daihouguanli/hhfx-index/hkqkfx/hkqkfx.component';
import { KhmyxxjrzlsComponent } from '../../pages/home/components/rongzifuwu/daihouguanli/hhfx-index/khmyxxjrzls/khmyxxjrzls.component';
import { DaikuanhuankuanheyueguizeComponent } from '../../pages/home/components/zhinengheyueguizeguanli/daikuanhuankuanheyueguize/daikuanhuankuanheyueguize.component';
import { RongzifafangheyueguizeComponent } from '../../pages/home/components/zhinengheyueguizeguanli/rongzifafangheyueguize/rongzifafangheyueguize.component';
import { YewudiaochayushenpiComponent } from '../../pages/home/components/rongzifuwu/yewudiaochayushenpi/yewudiaochayushenpi/yewudiaochayushenpi.component';

import { YonghuguanliComponent } from '../../pages/home/components/xitongguanli/yonghuguanli/yonghuguanli.component';

import { RongzifafangComponent } from './../../pages/home/components/zijinguanli/rongzifafang/rongzifafang.component';
import { ShouxinhezhuntongzhiComponent } from './../../pages/home/components/rongzifuwu/rongzishenqing/shouxinhezhuntongzhi/shouxinhezhuntongzhi.component';
import { HetongDbxqComponent } from './../../pages/home/components/rongzifuwu/hetongqianshu/hetong-dbxq/hetong-dbxq.component';
import { YewuxianpeizhiComponent } from './../../pages/home/components/chanpingongchang/yewuxianpeizhi/yewuxianpeizhi.component';
import { ChanpinxianpeizhiComponent } from './../../pages/home/components/chanpingongchang/chanpinxianpeizhi/chanpinxianpeizhi.component';
import { XinzengchanpinxianComponent } from './../../pages/home/components/chanpingongchang/xinzengchanpinxian/xinzengchanpinxian.component';
import { MaifanghuikuanComponent } from './../../pages/home/components/zijinguanli/maifanghuikuan/maifanghuikuan.component';
import { DaikuanhuankuanComponent } from './../../pages/home/components/zijinguanli/daikuanhuanhuan/daikuanhuankuan/daikuanhuankuan.component';
//import { YingshouzhangkuanhuankuanComponent } from './pages/home/components/zijinguanli/daikuanhuanhuan/yingshouzhangkuanhuankuan/yingshouzhangkuanhuankuan.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children:[
      {
        path: 'home', component: HomeComponent ,
        children:[
          { path: 'adduser', component: AddUserComponent },
          { path: 'khxx', component: KehuxinxiComponent },
          { path: 'jbxx', component: JibenxinxiComponent },
          { path: 'lxxx', component: LianxixinxiComponent },
          { path: 'gkxx', component: GaikuangxinxiComponent},
          { path: 'zzxx', component: ZizhixinxiComponent },
          { path: 'pjsx', component: PingjishouxinComponent },    //评级授信
          { path: 'sxxq', component: ShouxinxiangqingComponent },//授信详情
          { path: 'xzxq', component: XinzengshouxinComponent },   //新增授信
          { path: 'yszkmx', component: YingshouzhangkuanmingxiComponent },
          { path: 'xzyszkmx', component: XinzengyingshouzhangkuanmingxiComponent },
          { path: 'zhxx', component: ZonghexinxiComponent },  //综合信息
          { path: 'yszkzltj', component: YszkzltjComponent }, //应收账款资料提交
          { path: 'yszkzlsc', component: YszkzlscComponent }, //应收账款资料上传
          { path: 'yszkhk', component: YszkhkComponent },     //应收账款回款
          { path: 'yszkhg', component: YszkhgComponent },     //应收账款回购
          { path: 'yszkhgxx', component: YszkhgXxComponent },     //应收账款回款信息
          { path: 'yszktz', component: YszktzComponent },       //应收账款通知
          // { path: 'yszktzzr', component: YszktzZrComponent },   //应收账款回款转让通知
          { path: 'htqsList', component: HtqsListComponent },    //合同签署列表
          { path: 'htqsIndex', component: HtqsIndexComponent },    //合同签署首页
          { path: 'htqs', component: HetongqianshuComponent },//合同签署
          { path: 'htxq', component: HetongxqComponent },     //合同详情
          { path: 'htdb', component: HetongDbComponent },     //合同担保
          { path: 'htdbxq', component: HetongDbxqComponent },     //合同担保详情
          { path: 'rzsq', component: RongzishenqingComponent },//融资申请
          { path: 'rqsqxq', component: SqXxComponent },          //融资申请详情
          // { path: 'yszkzrdj', component: YszkzrdjComponent },    //
          { path: 'yszkzrqrhz', component: YszkzrqrhzComponent }, //应收账款确认回执
          { path: 'demo', component: DemoComponent },          //Demo
          { path: 'sqxq_head' ,component: ShenqingxiangqingHeadComponent} ,//融资申请详情的头部分
          { path: 'sqxq_body' ,component: ShenqingxiangqingBodyComponent} ,//融资申请详情的body部分
          { path: 'xzrzsq' ,component: XinzengrongzishenqingComponent},    //新增融资申请界面
          { path: 'zhjymx' ,component: ZhjymxComponent}, //账户交易明细
          { path: 'zjzh' ,component: ZjzhComponent},//资金账户
          { path: 'wdht' ,component: WodehetongComponent}, //我的合同界面
          { path: 'fwkt' ,component: FuwukaitongComponent},  //服务开通
          { path: 'mygzt' ,component: MygongzuotaiComponent},//我的工作台
          { path: 'jkftj' ,component: JkftjComponent},//借款方统计
          { path: 'fygl' ,component: FeiyongguanliComponent},//费用管理
          { path: 'fysq' ,component: FeiyongshouquComponent},//费用收取
          { path: 'fxyj' ,component: FengxianyujingComponent},//风险预警界面
          { path: 'yjls' ,component: YujinglishiComponent},//预警历史
          { path: 'dhfx',component:HhfxIndexComponent}, //贷后分析
          { path: 'xykh',component:XykhComponent}, //下游客户
          { path: 'rzls',component:RzlsComponent}, //融资历史
          { path: 'yszkdqtx',component:YszkdqtxComponent}, //应收账款到期提醒
          { path: 'hkqkfx',component:HkqkfxComponent}, //回款情况分析
          { path: 'khmyxxjrzls',component:KhmyxxjrzlsComponent}, //客户贸易信息及融资历史表
          { path: 'sxhztz',component:ShouxinhezhuntongzhiComponent}, //客户贸易信息及融资历史表
          { path:  'cpgc',component: YewuxianpeizhiComponent}, //业务线配置界面
          // { path:  'cpxpz',component: ChanpinxianpeizhiComponent}, //产品线界面
          // { path:  'xzcpx',component: XinzengchanpinxianComponent}, //新增产品界面
          { path: 'demo', component: DemoComponent },
          { path: 'home', component: KehuxinxiComponent },
  //我的首页
          {
            path: 'wdsy',//无组件路由
            children:[
              { path: 'mygzt' ,component: MygongzuotaiComponent},   //我的工作台
              { path: 'fxyj' ,component: FengxianyujingComponent},  //风险预警界面
              { path: 'yjls' ,component: YujinglishiComponent},     //预警历史
            ]
          },
  //产品工厂
            {
              path:'cpgc',
              children:[
                {path:'ywxpz',component:YewuxianpeizhiComponent},      //业务线配置
                {path:'cpxpz',component:ChanpinxianpeizhiComponent},   //产品线配置
              ]

            },
  //客户管理
          {
            path: 'khgl',
            children:[
              { path: 'zhxx', component: ZonghexinxiComponent },    //综合信息
              { path: 'khxx', component: KehuxinxiComponent },        //客户信息
              // { path: 'adduser', component: AddUserComponent },       //添加用户
              // { path: 'jbxx', component: JibenxinxiComponent },       //基本信息
              // { path: 'lxxx', component: LianxixinxiComponent },      //联系信息
              { path: 'pjsx', component: PingjishouxinComponent },    //评级授信
              { path: 'sxxq', component: ShouxinxiangqingComponent },//授信详情
              // { path: 'xzxq', component: XinzengshouxinComponent },   //新增授信
            ]
          },
  //合作方管理
        {
          path: 'hzfgl',
          children:[]
        },
  //融资管理
          {
            path: 'rzgl',
            children:[
              //融资申请
                  {
                    path: 'rz',
                    children:[
                      { path: 'rzsq', component: RongzishenqingComponent },            //融资申请
                      { path: 'rzsqxq', component: SqXxComponent },                    //融资申请详情
                      { path: 'sqxq_head' ,component: ShenqingxiangqingHeadComponent} ,//融资申请详情的头部分
                      { path: 'sqxq_body' ,component: ShenqingxiangqingBodyComponent} ,//融资申请详情的body部分
                      { path: 'xzrzsq' ,component: XinzengrongzishenqingComponent},    //新增融资申请界面
                      { path: 'rzls',component:RzlsComponent},                         //融资历史
                      { path: 'khmyxxjrzls',component:KhmyxxjrzlsComponent},           //客户贸易信息及融资历史表
                      {
                        path: 'rz',
                        component:''
                      },
                    ]
                  },
              //业务调查与审批
                  {
                    path: 'ywdc',component: YewudiaochayushenpiComponent
                  },
              //应收账款管理
                  {
                    path: 'yszkgl',
                    children:[
                      {
                        path: 'yszkmx', component: YingshouzhangkuanmingxiComponent,
                        children:[]
                      },//应收账款明细
                      { path: 'xzyszkmx', component: XinzengyingshouzhangkuanmingxiComponent },//新增应收账款明细
                      { path: 'yszkzltj', component: YszkzltjComponent },   //应收账款资料提交
                      { path: 'yszkzlsc', component: YszkzlscComponent },   //应收账款资料上传
                      { path: 'yszkhk', component: YszkhkComponent },       //应收账款回款
                      { path: 'yszkhg', component: YszkhgComponent },       //应收账款回购
                      { path: 'yszkhgxx', component: YszkhgXxComponent },   //应收账款回款信息
                      { path: 'yszktz', component: YszktzComponent },       //应收账款通知
                      { path: 'yszktzzr', component: YszktzZrComponent },   //应收账款回款转让通知
                      { path: 'yszkzrqrhz', component: YszkzrqrhzComponent },//应收账款确认回执
                      { path: 'yszkdqtx',component:YszkdqtxComponent},      //应收账款到期提醒
                      { path: 'yszkzrdj', component: YszkzrdjComponent },   //应收账款转让登记
                    ]
                  },
              //合同签署
                  {
                    path: 'htqs',
                    children:[
                      { path: 'htqsList', component: HtqsListComponent },   //合同签署列表
                      { path: 'htqsIndex', component: HtqsIndexComponent }, //合同签署首页
                      { path: 'htqs', component: HetongqianshuComponent },  //合同签署
                      { path: 'htxq', component: HetongxqComponent },       //合同详情
                      { path: 'htdb', component: HetongDbComponent },       //合同担保
                    ]
                  },
              //电子合同
                  {
                    path: 'dzht',
                    children:[
                      { path: 'htqsList', component: HtqsListComponent },   //合同签署列表
                      { path: 'fwkt' ,component: FuwukaitongComponent},     //服务开通
                    ]
                  },
              //资金管理
                  {
                    path: 'zjgl',
                    children:[
                      { path: 'yszkhg', component: YszkhgComponent },       //应收账款回购
                      { path: 'htqsList', component: HtqsListComponent },   //合同签署列表
                      { path: 'gkxx', component: GaikuangxinxiComponent},     //概况信息
                      { path: 'zzxx', component: ZizhixinxiComponent },       //资质信息
                      { path: 'zhjymx' ,component: ZhjymxComponent},        //账户交易明细
                      { path: 'zjzh' ,component: ZjzhComponent},            //资金账户
                      { path: 'wdht' ,component: WodehetongComponent},      //我的合同界面
                      { path: 'fygl' ,component: FeiyongguanliComponent},   //费用管理
                      { path: 'rzff' ,component: RongzifafangComponent},   //融资发放界面
                      { path: 'mfhk' ,component: MaifanghuikuanComponent},   //买方回款
                      { path: 'dkhk' ,component: DaikuanhuankuanComponent},   //贷款还款
                    ]
                  },
                  //贷后管理
                  {
                    path: 'dhgl',
                    children:[
                      { path: 'dhfx',component:HhfxIndexComponent},         //贷后分析
                    ]

                  },
            ]
          },
    //智能合约规则管理
          {
            path: 'znhygl',//贷款还款合约规则
            children:[
              {
                path: 'dkhkhygz',//贷款还款合约规则
                component: DaikuanhuankuanheyueguizeComponent,
              },
              {
                path: 'rzffhygz',//融资发放合约规则
                component: RongzifafangheyueguizeComponent,
                children:[
                ]
              },
            ]
          },
      //统计分析
          {
            path: 'tjfx',
            children:[
              {
                path:'jkftj',//借款方统计
                component:JkftjComponent
              }
            ]
          },
      //异常处理
          {
            path: 'yccl',
            children:[]
          },
      //参数管理
          {
            path: 'csgl',
            children:[]
          },
      //模型配置
          {
            path: 'mkpz',
            children:[]
          },
      //智能合约规则管理
          {
            path: 'znhygzgl',
            children:[]
          },
      //系统管理
          {
            path: 'xtgl',
            children:[
              { path: 'yhgl' ,component: YonghuguanliComponent}
            ]
          },
          { path: 'jkftj' ,component: JkftjComponent},          //借款方统计
          { path: 'fysq' ,component: FeiyongshouquComponent},   //费用收取
          { path: 'xykh',component:XykhComponent},              //下游客户
          { path: 'hkqkfx',component:HkqkfxComponent},          //回款情况分析
          
        ]
    },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // MDBBootstrapModulesPro.forRoot()

  ],
  declarations: [],
  exports: [RouterModule],
  providers: []
})
export class RoutesModule  implements OnInit{
  constructor(private router: ActivatedRoute) {
  }
  ngOnInit(){
  }
}
