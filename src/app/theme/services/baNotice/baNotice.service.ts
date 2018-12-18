import {Injectable} from '@angular/core';
import { ToastService } from 'ng-uikit-pro-standard';

@Injectable()
export class BaNoticeService {
  constructor(private toastrService: ToastService,) {}
  public notice(type,message,title?){
    const options = { toastClass: 'opacity',timeOut:3000 };
    if(type=="error"){
      this.opacityShowError(message,title,options);
    }else if(type=="success"){
      this.opacityShowSuccess(message,title,options)
    }else if(type=="warning"){
      this.opacityShowWarning(message,title,options)
    }else{
      this.opacityShowInfo(message,title,options)

    }
  }
  opacityShowSuccess(message,title?,options?) {
    this.toastrService.success(message, title, options);
  }

  opacityShowError(message,title?,options?) {
    this.toastrService.error(message, title, options);
  }

  opacityShowInfo(message,title?,options?) {
    this.toastrService.info(message, title, options);
  }

  opacityShowWarning(message,title?,options?){
    this.toastrService.warning(message, title, options);
  }
}
