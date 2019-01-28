import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myselfpage',
  templateUrl: './myselfpage.component.html',
  styleUrls: ['./myselfpage.component.scss']
})
export class MyselfpageComponent implements OnInit {

  constructor() { }
  //表数据
  tables:any={
    head:[
      "序号","授信开始日期","授信总额度","金融产品","授信余额","授信到期日"
    ],
    body:[
      {begdata:'2018-2-4', allMoney:'￥CNY 5,000,000.00',children:'保理',childrenMoney:'￥CNY 1,000,000.00',childrenbalance:'￥CNY 500,000.00',Enddata:'2019-3-2'},
      {begdata:'2018-2-4', allMoney:'￥CNY 5,000,000.00',children:'租赁',childrenMoney:'￥CNY 1,000,000.00',childrenbalance:'￥CNY 500,000.00',Enddata:'2019-3-2'},
    ]
  }
  //文件查看和修改
  Filetables:any={
    head:[
      "序号","文件名","文件上传日期","文件类型","文件描述","重新上传"
    ],
    zhizhao:[
      {filename:"营业执照信息",uploadData:'2018-3-4',filetype:'营业执照',fileDes:'这是华软集团最新的执照信息'},
      {filename:"营业执照信息",uploadData:'2018-3-4',filetype:'营业执照',fileDes:',这是华软集团最新的执照信息,这是华软集团最新的执照信息,这是华软集团最新的执照信息'},
    ],
    caiwu:[
      {filename:"2018年财务报表",uploadData:'2018-3-4',filetype:'财务报表',fileDes:'这是华软集团最新的财务信息'},
      {filename:"2017年财务报表",uploadData:'2018-3-4',filetype:'财务报表',fileDes:',这是华软集团最新的财务信息,这是华软集团最新的财务信息,这是华软集团最新的财务信息'},
    ],
    other:[
      {filename:"公司规章",uploadData:'2018-3-4',filetype:'其它',fileDes:'这是公司章程详情'},
      {filename:"公司规章",uploadData:'2018-3-4',filetype:'其它',fileDes:',这是公司章程详情,这是公司章程详情,这是公司章程详情'},
    ]
    

  }
  FileModel={filename:"",uploadData:'',filetype:'',fileDes:''}
  addFile(t:any){
    if(t=='zhizhao'){
      this.Filetables.zhizhao.push(JSON.parse(JSON.stringify(this.FileModel)))
    }
    if(t=='caiwu'){
      this.Filetables.caiwu.push(JSON.parse(JSON.stringify(this.FileModel)))
    }
    if(t=='other'){
      this.Filetables.other.push(JSON.parse(JSON.stringify(this.FileModel)))
    }
  }
  deleteFile(t:any,i:number){
    if(t=='zhizhao'){
      if(i>2)
      this.Filetables.zhizhao.splice(i,1)
    }
    if(t=='caiwu'){
      if(i>2)
      this.Filetables.caiwu.splice(i,1)
    }
    if(t=='other'){
      if(i>2)
      this.Filetables.other.splice(i,1)
    }
  }
   //文件上传对象定义
   doc:any;
  fileUpdata(filebutton: any) {
    if(filebutton.path[1].nextSibling!=null&&filebutton.path[1].nextSibling!=undefined){
      this.doc=filebutton.path[1].nextSibling;
      this.doc.click(); 
    }
  }

  ngOnInit() {
    this.addFile('zhizhao');
    this.addFile('caiwu');
    this.addFile('other');
  }

}
