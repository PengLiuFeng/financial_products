import {Injectable} from '@angular/core';


@Injectable()
export class BaPluginMenuLoaderservice {
  plugin:any=null;
  public setValue(value){
    this.plugin=value;
  }
}
