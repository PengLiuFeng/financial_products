import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  isLogin=false;
  loginName="";
  vals:any=0;
  user:any;
  constructor() { }
}
