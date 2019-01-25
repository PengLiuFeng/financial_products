import { Injectable } from '@angular/core';
import { Observable, Subject ,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GradeService{
  /**
   * @param type 1=登陆     例：this.grades.sub.next({type:1});
   *  
   * 
  */
  sub = new Subject<any>();
  public isLogin:any=false;
  win:{//缓存全局基础数据
    dictList:{
      
    }//下拉框
  };
  getDictList(arr:any){
    
    return{};
  }
  loginName="";
  vals:any;
  user:any;
  constructor() {
  }
}
