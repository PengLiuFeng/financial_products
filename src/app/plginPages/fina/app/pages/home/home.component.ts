import { Component, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router'
import { BaHttpInterceptorService } from './../../../../../theme/services/index'
import { ParamsService } from './../../params.service'
import { GradeService } from './../../grade.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
})
export class HomeComponent implements OnInit {
  ngOnChanges() {
  }
  LSShow = false;
  loginUser = {
    userName: "user",
    pwd: "1111"
  }
  gradeCenter=new EventEmitter();
  isLogin = false;//是否登录
  treeData: Array<any> = [];
  _http: BaHttpInterceptorService;
  constructor(private routers: Router, private activer: ActivatedRoute, private params: ParamsService, public grade: GradeService) {
    //grade.isLogin = !!sessionStorage.isLogin;
    this._http = params._http;
    let sc = function () {
      document.getElementsByClassName('al-sidebar')[0].setAttribute('class', 'al-sidebar al-sidebar-fina');
      document.getElementsByClassName('al-main')[0].setAttribute('class', 'al-main fina-main-max');
    }
    setTimeout(function () {
      sc();
    }, 1000)
  }
  //登录
  Login(v) {
    //sessionStorage.isLogin = v;
    this.grade.isLogin = v;
    if (v == 1) {//前台人员
      this.grade.loginName = "前台人员";
    } else if (v == 2) {//中台人员
      this.grade.loginName = "中台人员";
    } else if (v == 3) {//后台人员
      this.grade.loginName = "后台人员";
    } else if (v == 4) {//操作员
      this.grade.loginName = "操作员";
    } else if (v == 5) {//客户
      this.grade.loginName = "客户";
    }
    //sessionStorage.loginName_v = v;
    this.grade.vals = v;
  }

  itactive = 1;
  ismenu: boolean = false;

  nodeClick(it: any): void {
    if (it.url) {
      //cache:false
      this.routers.navigate([it.url]);
    }
  }
  menuId = 0;
  init(url): void {
    // if (sessionStorage.loginName_v) {
    //   this.Login(sessionStorage.loginName_v);
    // }
    //应收账款管理
    if (url.indexOf('/finas/home/rzgl/yszkgl/') == 0) {
      if (this.menuId != 1) {
        this.itactive = 1;
        this.menuId = 1;
        this.treeData = [
          {
            label: '应收账款明细维护',
            url: '/finas/home/rzgl/yszkgl/yszkmx',
            treeid: '1'
          },
          {
            label: '应收账款资料提交',
            url: '/finas/home/rzgl/yszkgl/yszkzltj',
            treeid: '2'
          },
          {
            label: '应收账款转让通知',
            url: '/finas/home/rzgl/yszkgl/yszktz',
            treeid: '3'
          },
          {
            label: '应收账款转让登记',
            url: '/finas/home/rzgl/yszkgl/yszkzrdj',
            treeid: '4'
          },
        ]
      }
      //电子合同
    } else if (url.indexOf('/finas/home/rzgl/dzht/') == 0) {
      if (this.menuId != 2) {
        this.itactive = 1;
        this.menuId = 2;
        this.treeData = [
          {
            label: '我的合同',
            url: '/finas/home/rzgl/dzht/htqsList',
            treeid: '1'
          },
          {
            label: '服务开通',
            url: '/finas/home/rzgl/dzht/fwkt',
            treeid: '2'
          },
        ]
      }
      //资金管理
    } else if (url.indexOf('/finas/home/rzgl/zjgl') == 0) {
      if (this.menuId != 3) {
        this.itactive = 3;
        this.menuId = 3;
        this.treeData = [
          {
            label: '融资发放',
            url: '/finas/home/rzgl/zjgl/rzff',
            treeid: '1'
          },

          {
            label: '贷款还款',
            url: '/finas/home/rzgl/zjgl/dkhk',
            treeid: '2'
          },
          {
            label: '应收账款回购',
            url: '/finas/home/rzgl/zjgl/yszkhg',
            treeid: '3'
          },
          {
            label: '费用管理',
            url: '/finas/home/rzgl/zjgl/fygl',
            treeid: '4'
          },
          {
            label: '资金账户',
            url: '/finas/home/rzgl/zjgl/zjzh',
            treeid: '5'
          },
          {
            label: '买方回款',
            url: '/finas/home/rzgl/zjgl/mfhk',
            treeid: '6'
          },
        ]
      }
    } else {
      if (this.menuId != 0) {
        this.menuId = 0;
        this.treeData = []
      }
    }
  }
  ngOnInit() {
    let _href = location.href;
    let url = '';
    if (_href.indexOf('/finas/home/rzgl/yszkgl/') > 0) {
      url = '/finas/home/rzgl/yszkgl/';
    } else if (_href.indexOf('/finas/home/rzgl/dzht/') > 0) {
      url = '/finas/home/rzgl/dzht/';
    } else if (_href.indexOf('/finas/home/rzgl/zjgl') > 0) {
      url = '/finas/home/rzgl/zjgl';
    }
    this.init(url);
    setTimeout(() => {
      if (this.treeData.length > 0) {
        let it = this.treeData[this.itactive - 1];
        if (it.url != this.params.dq.url) {
          this.nodeClick(it)
        }
      }
    })
    //监听路由
    this.routers.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log(event.url)
        this.init(event.url);
        //1=前台、2=中台、3=后台、4=操作员、5=客户
        //判断当前登录身份
        let v = sessionStorage.loginName_v;
        if (v == 1) {//前台人员
        } else if (v == 2) {//中台人员
        } else if (v == 3) {//后台人员
        } else if (v == 4) {//操作员
        } else if (v == 5) {//客户

        } else {//未登录

        }
      }
    })
    this.onGetDate();
  }
  setTree(name: string): void {
    let arr = this.treeData;
    let tid: string;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].label == name) {
        tid = arr[i].treeid;
        break;
      }
    }
    this.activer['itactive'] = tid;
  }
  onGetDate() {///custom/list
    // this._http.get('/v1/index/custom/list?pageNum=1&pageSize=10&cuName=22&idType&idNo',(e)=>{
    this._http.post('/fina/dict/dictList', { "fieldName": "AP_ID_TYPE" }, (e) => {
      console.log(e)
    }, () => {

    })

    if (this.params.urlList) {
      this._http.get(this.params.urlList.customList + '?pageNum=1&pageSize=10&cuName=22&idType&idNo', (e) => {
        console.log(e)
      }, (errors) => {
        console.log(errors)
      })
    }
  }
  isAjax=false;
  loginSub() {
    this.isAjax=true;  
    this._http.post('/fina/login', this.loginUser, (e) => {
     // console.log(e);
      if(e.data.t){
        this.grade.user=e.data.user;
        this.grade.sub.next({type:1,gradesVals:e.data.user.grade});
        // this.grade.user.emit(e.data.user);
        this.Login(e.data.user.grade)
      //  this.cuNo = e.data.user.data.cardInsert//客户号
      }
    }, () => {
      this.isAjax = false;
    })
    
  }
  keyInser(ev){
    if(ev.keyCode==13){
      this.loginSub();
    }
  }
}
  /* treeData=[
     {label: '系统首页',
           url:'',
           children:[
             {
               label: '我的工作台',
               url:'/mygzt'
             },
             {
               label: '风险预警',
               url:'/fxyj',
               children:[
                 {
                 label: '预警历史',
                 url: '/yjls'
             
                 }
               ]
             }
           ]
     },
     {
       label: '客户管理',
       url:'/khxx',
       isshow:true,//设置默认展开
       children: [
         {
           label: '客户信息(董)',
           url:'/khxx',
           isshow:true,//设置默认展开
           children: [
             {
               label: '综合信息(彭)',
               url:'/zhxx',
               // children: [
               //     {
               //       label: '新增客户',
               //       url:'/adduser',
               //     },
               //     {
               //       label: '基本信息',
               //       url:'/jbxx',
               //     },
               //     {
               //       label: '联系信息',
               //       url:'/lxxx',
               //     },
               //     {
               //       label: '概况信息',
               //       url:'/gkxx',
               //     },
               //     {
               //       label: '资质信息',
               //       url:'/zzxx',
               //     },
               // ]
             }
           ]
         },
         {
           label: '评级授信',
           url:'/pjsx',
           children:[
             {
               label: '授信详情',
               url:'/sxxq',
             },
             {
               label: '新增授信',
               url:'/xzxq',
             }
           ]
         }
     ]
     },
     // {
     //   label: '合作方管理',
     //   url:'',
     // },
     {
       label: '融资管理',
       url:'',
       children:[
         {
           label: '融资申请(彭)',
           url:'/rzsq',
           children:[
           ]
         },
         {
           label: '业务调查与审批',
           url:'',
           children:[
           ]
         },
         {
           label: '应收账款管理',
           url:'',
           children:[
             {
               label: '应收账款明细维护(袁)',
               url:'/yszkmx',
             },
             {
               label: '新增应收账款明细(袁)',
               url:'/xzyszkmx',
             },
             {
               label: '应收账款资料提交(董)',
               url:'/yszkzltj',
             },
             {
               label: '应收账款转让通知(梁)',
               url:'/yszktz',
               children:[
                 {
                   label: '转让通知书',
                   url:'/yszktzzr',
                 },
                 {
                   label: '确认回执',
                   url:'/yszkzrqrhz',
                 }
               ]
             },
             {
               label: '应收账款转让登记(梁)',
               url:'/yszkzrdj',
             },
           ]
         },
         {
           label: '合同签署(董)',
           url:'/htqsList',
           children:[
             {
               label: '合同详情',
               url:'/htxq',
             },
             {
               label: '担保详情',
               url:'/htdbxq',
             },
             {
               label: '合同签署',
               url:'/htqs',
             },
             {
               label: '担保合同',
               url:'/htdb',
             },
             {
               label: '服务开通',
               url:'/fwkt',
             },
             {
               label: '我的合同',
               url:'/wdht',
             },
           ]
         },
         {
           label: '资金管理',
           url:'',
           children:[
             {
               label: '应收账款回款',
               url:'/yszkhk',
               children:[
             ]
             },{
               label: '应收账款回购',
               url:'/yszkhg',
             },
             {
               label: '资金账户',
               url:'/zjzh',
               children:[{
                 label:"账户交易明细",
                 url:'/zhjymx'
               },]
             } ,{
               label: '费用管理',
               url:'/fygl',
               children:[{
                 label:"费用收取",
                 url:'/fysq'
               },]
             } 
 
           ]
         },
         {
           label: '货后管理',
           url:'',
           children:[
             {
             label: '贷后分析',
             url:'/dhfx',
             },
             ]
           },
         //   { path: 'yszkzlsc', component: YszkzlscComponent }, //应收账款资料上传
         //   { path: 'yszktzzr', component: YszktzZrComponent },   //应收账款回款转让通知
         //   { path: 'htqs', component: HetongqianshuComponent },//合同签署
         //   { path: 'htxq', component: HetongxqComponent },     //合同详情
         //   { path: 'htdb', component: HetongDbComponent },     //合同担保
         //   { path: 'rqsqxq', component: SqXxComponent },          //融资申请详情
         // {
         //   label: '货后管理',
         //   url:'',
         //   children:[
         //   ]
         // },
         // {
         //   label: '异常处理',
         //   url:'',
         //   children:[
         //   ]
         // },
         // {
         //   label: '风险管理',
         //   url:'',
         //   children:[
         //   ]
         // },
         // {
         //   label: '系统管理',
         //   url:'',
         //   children:[
         //   ]
         // }
       ]
     },
     {label: '统计分析',
           url:'',
           children:[
             {
               label: '借款方统计',
               url:'/jkftj'
             }
           ]
     }
     // {
     //   label: '一级 2',
     //   children: [{
     //     label: '二级 2-1'
     //   }, {
     //     label: '二级 2-2'
     //   }]
     // },
   ] */
