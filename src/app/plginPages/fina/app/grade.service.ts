import { Injectable } from '@angular/core';
import { Observable, Subject ,of } from 'rxjs';
import { BaHttpInterceptorService } from './../../../theme/services/index'
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
  win={//缓存全局基础数据
    dictList:{//下拉框
      
    },
    chinas:null

  };
  getChinas(){
    return new Promise((resolve,reject)=>{
      if(this.win.chinas){
        resolve(this.win.chinas);
      }else{
        this._http.get('/fina/getChinas', (e) => {
          if(e.data.t==1){
            this.win.chinas=e.data.data;
            resolve(this.win.chinas);
          }else{
            reject(e.msg);
          }
        },(e)=>{
          reject(e);
        })
      }
    })
  }
  getDictList(arr:any){
    
    return{};
  }
  loginName="";
  vals:any;
  user:any;
  constructor(private _http:BaHttpInterceptorService) {
  }
}
