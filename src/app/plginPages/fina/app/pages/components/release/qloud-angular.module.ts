// import { ModuleWithProviders,NgModule } from '@angular/core';
import { DfCascaderComponent } from './../df-cascader/df-cascader.component';
import { DfStepsComponent } from './../df-steps/df-steps.component';
import { DfDialogComponent } from './../df-dialog/df-dialog.component';
import { DfInputComponent } from './../df-input/df-input.component';
import { DfButtonComponent } from './../df-button/df-button.component';
import { DfButtonGroupComponent } from './../df-button-group/df-button-group.component';
import { DfSelectComponent } from './../df-select/df-select.component';
import { DfDatePickerComponent } from './../df-date-picker/df-date-picker.component';

import { BrowserModule } from '@angular/platform-browser';

export declare const DfChildModules: any;
export declare const DFMODULES_GROUP: any[];


// @NgModule({
//     imports:      [ BrowserModule ],
//     declarations: [
//         DfCascaderComponent,DfStepsComponent,DfDialogComponent,DfInputComponent,DfButtonComponent,DfButtonGroupComponent,DfSelectComponent,DfDatePickerComponent
//          // 声明我们刚刚写的组件
//     ],
// })

export class DfModule {
    static forRoot(){
        return [

            DfCascaderComponent,DfStepsComponent,DfDialogComponent,DfInputComponent,DfButtonComponent,DfButtonGroupComponent,DfSelectComponent,DfDatePickerComponent
        ]
         
        // return <ModuleWithProviders> {
        //     ngModule: DfModule,
        //     providers: [
    
        //     ],
        // }
    };
}
