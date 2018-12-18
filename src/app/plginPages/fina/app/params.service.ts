import { Injectable } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { BaHttpInterceptorService } from './../../../theme/services/index'
@Injectable({
  providedIn: 'root'
})
export class ParamsService {
  home:HomeComponent;
  es = {
    firstDayOfWeek: 1,
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    today: '今天',
    clear: '确定'
};
mdb_es={
  dayLabels: {
    su: '日', mo: '一', tu: '二', we: '三', th: '四', fr: '五', sa: '六'
  },
  dayLabelsFull: {
    su: "周日", mo: "周一", tu: "周二", we: "周三", th: "周四", fr: "周五",sa: "周六"
  },
  monthLabels: { 
    1: '一月', 2: '二月', 3: '三月', 4: '四月', 5: '五月', 6: '六月', 7: '七月', 8: '八月', 9: '九月', 10:'十月', 11: "十一月", 12: '十二月' 
  },
  monthLabelsFull: {
     1: "一月", 2: "二月", 3: "三月", 4: "四月", 5: "五月", 6: "六月", 7: "七月", 8:"八月", 9: "九月", 10: "十月", 11: "十一月", 12: "十二月" 
  }, 
  todayBtnTxt: "今天",
  clearBtnTxt: "清除",
  closeBtnTxt: "关闭", 
  showTodayBtn: true,
  showClearDateBtn: true
};
dq={
  url:''//当前url路径
}
  urlList={
    'customList':'/fina/custom/list'
  }
  constructor(public _http:BaHttpInterceptorService) {}
}
