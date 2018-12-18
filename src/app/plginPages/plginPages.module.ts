import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './plginPages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { PlginPages } from './plginPages.component';
import {GestureConfig, MatProgressBarModule} from "@angular/material";
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {LoadingBarModule} from "@ngx-loading-bar/core";
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  imports: [
    CommonModule,
    ScrollPanelModule,
    AppTranslationModule,
    LoadingBarModule.forRoot(),
    NgaModule,MatProgressBarModule,
    routing
  ],
  declarations: [PlginPages],
  providers:[{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: GestureConfig
  }]
})
export class PlginPagesModule {

}
