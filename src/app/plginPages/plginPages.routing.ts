import {Routes, RouterModule, NavigationEnd} from '@angular/router';
import { PlginPages } from './plginPages.component';
import { ModuleWithProviders } from '@angular/core';
import { PLUGIN_MODULE} from './plginPages.menu';

// noinspection TypeScriptValidateTypes

   export function loadRouter() {
   //return   [
     // { path: '', redirectTo: 'qloudAlgoModel', pathMatch: 'full' },
     // { path: 'qloudAlgoModel', loadChildren: './qloudAlgoModel/qloudAlgoModel.module#QloudAlgoModel' },
     // // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
     // // { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
     // { path: 'apigetway', loadChildren: './apigetway/apigetway.module#ApigetwayModule' },
     // { path: 'system', loadChildren: './system/system.module#SystemModule' },
     // { path: 'integratedservice', loadChildren: './system/system.module#SystemModule' },
     // { path: 'scheduling', loadChildren: './scheduling/scheduling.module#SchedulingModule' },
     // { path: 'cdc', loadChildren: './cdc/cdc.module#CdcModule' },
     // { path: 'aggregator', loadChildren: './aggregator/aggregator.module#AggregatorModule' },
     // { path: 'discovery', loadChildren: './discovery/discovery.module#DiscoveryModule' },
     // { path: 'flowChart', loadChildren: './flowChart/flowChart.module#FlowChartModule' },
     // { path: 'bootstrapComponents', loadChildren: './bootstrapComponents/bootstrapComponents.module#BootstrapComponent' },
     // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
     // { path: 'ui', loadChildren: './ui/ui.module#UiModule' }
     // { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
     // { path: 'maps', loadChildren: './maps/maps.module#MapsModule' }
   //];
 };

export const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: 'app/pages/login/login.module#LoginModule'
  // },
  // {
  //   path: 'register',
  //   loadChildren: 'app/pages/register/register.module#RegisterModule'
  // },
  {
    path: '',
    component: PlginPages,
    children: PLUGIN_MODULE
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
