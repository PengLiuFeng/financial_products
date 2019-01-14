//配置插件显示的信息
export const PAGES_MENU =
{
  // path: '',
  // plugins: [
  //   {
  //     path:"finas",
  //     menu:{
  //       icon: 'fa fa fa-bookmark',
  //       title: 'finas.menu.name',
  //       tabs:[]
  //     }
  //   }
  // ]

  //1=前台、2=中台、3=后台、4=操作员、5=客户
  path: '',
  plugins: [
    {
      path: "finas/home/wdsy",
      menu: {
        icon: 'fa fa fa-bookmark',
        title: '我的首页',
        "grade": [],
        tabs: [
          {
            "grade": [],
            "name": "我的工作台",
            "path": "/mygzt"
          },
          {
            "grade": [],
            "name": "风险预警",
            "path": "/fxyj"
          },
          /* {
            "name":"系统公告",
            "path":"/yjls"
          }, */
        ]
      }
    },
    {
      path: "finas/home/khgl",
      menu: {
        icon: 'fa fa fa-bookmark',
        title: '客户管理',
        "grade": [4, 5],
        tabs: [
          {
            "grade": [4, 5],
            "name": "客户信息",
            "path": "/khxx"
          },
          {
            "name": "评级授信",
            "grade": [4],
            "path": "/pjsx"
          },
        ]
      }
    },
    {
      path: "finas/home/rzgl",
      menu: {
        icon: 'fa fa fa-bookmark',
        title: '融资管理',
        "grade": [4, 5],
        tabs: [
          {
            "name": "应收账款管理",
            "path": "/yszkgl/yszkmx",
            "grade": [4, 5],
          },
          {
            "grade": [4, 5],
            "name": "融资申请",
            "path": "/rz/rzsq"
          },
          {
            "grade": [4],
            "name": "业务调查与审批",
            "path": "/ywdc"
          }, {
            "grade": [4, 5],
            "name": "合同签署",
            "path": "/htqs/htqsList"
          }, {
            "grade": [],
            "name": "电子合同",
            "path": "/dzht/htqsList"
          },
          {
            "grade": [4, 5],
            "name": "资金管理",
            "path": "/zjgl"
          },
          {
            "grade": [4],
            "name": "贷后管理",
            "path": "/dhgl/dhfx"
          },
        ]
      }
    },
    {
      path: "finas/home/cpgc",
      menu: {
        icon: 'fa fa fa-bookmark',
        title: '产品工厂',
        "grade": [],
        tabs: [
          {
            "grade": [],
            "name": "业务线配置",
            "path": "/ywxpz"
          },
          {
            "grade": [],
            "name": "产品线配置",
            "path": "/cpxpz"
          },
        ]
      }
    },
    /* 
          暂不开发
          {
            path:"finas/home/znhygl",
            menu:{
              icon: 'fa fa fa-bookmark',
              title: '智能合约规则管理',
              tabs:[
                {
                  "name":"融资发放合约规则",
                  "path":"/rzffhygz"
                },
                {
                  "name":"贷款还款合约规则",
                  "path":"/dkhkhygz"
                }
              ]
            }
          }, */
    //开发中
    {
      path: "finas/home/hzfgl",
      menu: {
        icon: 'fa fa fa-send',
        title: '合作方管理',
        "grade": [],
        tabs: [
          {
            "grade": [],
            "name": "平台方管理",
            "path": "/"
          },
          {
            "grade": [],
            "name": "资金方管理",
            "path": "/"
          }, {
            "name": "资产方管理",
            "path": "/"
          },
        ]
      }
    },
    /*  开发中 */
    {
      path: "finas/home/tjfx",
      menu: {
        icon: 'fa fa fa-send',
        title: '统计分析',
        "grade": [],
        tabs: [
          {
            "name": "资金方统计",
            "path": "/"
          },
          {
            "name": "借款方统计",
            "path": "/jkftj"
          }, {
            "name": "平台方统计",
            "path": "/"
          }
        ]
      }
    },
    {
      path: "finas/home/yccl",
      menu: {
        icon: 'fa fa fa-send',
        title: '异常处理',
        "grade": [],
        tabs: [
          {
            "name": "商业纠纷",
            "path": "/"
          },
          {
            "name": "错账冲销",
            "path": "/"
          }
        ]
      }
    },
    {
      path: "finas/home/csgl",
      menu: {
        icon: 'fa fa fa-send',
        title: '参数管理',
        "grade": [],
        tabs: [
          {
            "name": "业务参数",
            "path": "/"
          },
          {
            "name": "系统配置",
            "path": "/"
          }
        ]
      }
    },
    /*  开发中 */
    {
      path: "finas/home/mkpz",
      menu: {
        icon: 'fa fa fa-send',
        title: '模型配置',
        "grade": [],
        tabs: [
          {
            "name": "评级模型",
            "path": "/"
          },
          {
            "name": "风险模型",
            "path": "/"
          }
        ]
      }
    },
    /* {
      path:"finas/home/znhygzgl",
      menu:{
        icon: 'fa fa fa-send',
        title: '智能合约规则管理',
        tabs:[
          {
            "name":"融资发放合约规则",
            "path":"/"
          },
          {
            "name":"贷款还款合约规则",
            "path":"/"
          },{
            "name":"应收账款回购合约规则",
            "path":"/"
          },{
            "name":"业务费用合约规则",
            "path":"/"
          }
        ]
      }
    }, */
    {
      path: "finas/home/xtgl",
      menu: {
        icon: 'fa fa fa-send',
        title: '系统管理',
        "grade": [],
        tabs: [
          {
            "name": "用户管理",
            "path": "/yhgl"
          },
          {
            "name": "角色管理",
            "path": "/"
          }, {
            "name": "权限管理",
            "path": "/"
          }, {
            "name": "机构管理",
            "path": "/"
          }, {
            "name": "日志查看",
            "path": "/"
          }
        ]
      }
    }
    /* 
    {
      path: 'MDB',
      menu: {
        title: 'general.menu.mdb',
        tabs:[
          {
            "name":"首页",
            "path":"/home"
          },{
            "name":"样式",
            "path":"/css"
          },{
            "name":"组件",
            "path":"/components"
          },{
            "name":"高级",
            "path":"/advanced"
          },{
            "name":"导航",
            "path":"/navigation"
          },{
            "name":"表单",
            "path":"/forms"
          },{
            "name":"列表",
            "path":"/tables"
          },{
            "name":"Modals",
            "path":"/modals"
          },{
            "name":"扩展",
            "path":"/extended"
          },{
            "name":"Sections",
            "path":"/sections"
          }
        ],
        icon: 'fa fa fa-bookmark',
        selected: false,
        expanded: false,
        order: 0
      }
    } */

  ]
};
//存放插件的路由信息
export const PLUGIN_MODULE = [
  // {path: 'MDB', loadChildren: './template/MDB/app.module#AppModule', data: {preload: true} },
  { path: 'finas', loadChildren: './fina/app/app.module#AppModule', data: { preload: true } }
];
