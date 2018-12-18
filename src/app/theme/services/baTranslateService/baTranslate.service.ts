import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class BaTranslateService {
  constructor(private translate: TranslateService) {
  }
  /**
   * 国际化转换
   * @param code
   */
  public i18n(code:string): any {
    return this.translate.get(code)['value'];
  }



}
