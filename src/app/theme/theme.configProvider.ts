import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { colorHelper } from './theme.constants';

@Injectable()
export class BaThemeConfigProvider {

  private basic: any;
  private colorScheme: any;
  private dashboardColors: any;
  private conf: any;

  constructor() {
     this.basic = {
      default: '#ffffff',
      defaultText: '#666666',
      border: '#dddddd',
      borderDark: '#aaaaaa',
    };

    // main functional color scheme
    this.colorScheme = {
      primary: '#209e91',
      info: '#2dacd1',
      success: '#90b900',
      warning: '#dfb81c',
      danger: '#e85656',
    };

    // dashboard colors for charts
    this.dashboardColors = {
      blueStone: '#005562',
      surfieGreen: '#0e8174',
      silverTree: '#6eba8c',
      gossip: '#b9f2a1',
      white: '#10c4b5',
    };

    this.conf = {
      theme: {
        name: 'qloud',
      },
      colors: {
        default: this.basic.default,
        defaultText: this.basic.defaultText,
        border: this.basic.border,
        borderDark: this.basic.borderDark,

        primary: this.colorScheme.primary,
        info: this.colorScheme.info,
        success: this.colorScheme.success,
        warning: this.colorScheme.warning,
        danger: this.colorScheme.danger,

        primaryLight: colorHelper.tint(this.colorScheme.primary, 30),
        infoLight: colorHelper.tint(this.colorScheme.info, 30),
        successLight: colorHelper.tint(this.colorScheme.success, 30),
        warningLight: colorHelper.tint(this.colorScheme.warning, 30),
        dangerLight: colorHelper.tint(this.colorScheme.danger, 30),

        primaryDark: colorHelper.shade(this.colorScheme.primary, 15),
        infoDark: colorHelper.shade(this.colorScheme.info, 15),
        successDark: colorHelper.shade(this.colorScheme.success, 15),
        warningDark: colorHelper.shade(this.colorScheme.warning, 15),
        dangerDark: colorHelper.shade(this.colorScheme.danger, 15),

        dashboard: {
          blueStone: this.dashboardColors.blueStone,
          surfieGreen: this.dashboardColors.surfieGreen,
          silverTree: this.dashboardColors.silverTree,
          gossip: this.dashboardColors.gossip,
          white: this.dashboardColors.white,
        },

        custom: {
          dashboardPieChart: colorHelper.hexToRgbA(this.basic.defaultText, 0.8),
          dashboardLineChart: this.basic.defaultText,
        }
      }
    };
  }

  get() {
    return this.conf;
  }

  changeTheme(theme: any) {
    _.merge(this.get().theme, theme);
  }

  changeColors(colors: any) {
    _.merge(this.get().colors, colors);
  }
}
