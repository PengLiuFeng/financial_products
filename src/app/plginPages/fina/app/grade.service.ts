import { Injectable, } from '@angular/core';
import { Observable, Subject ,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GradeService {
  /**
   * @param type 1=登陆     例：this.grades.sub.next({type:1});
   *  
   * 
  */
  sub = new Subject<any>();
  public isLogin:any=false;
  loginName="";
  vals:any=0;
  user:any;
  constructor() { }
}
