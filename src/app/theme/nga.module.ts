import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppTranslationModule } from '../app.translation.module';
import {
  BaThemeConfig
} from './theme.config';

import {
  BaThemeConfigProvider
} from './theme.configProvider';

import {
  BaBackTop,
  BaPageTopTab,
  BaCard,
  BaCheckbox,
  BaContentTop,
  BaMenuItem,
  BaMenu,
  BaMsgCenter,
  BaMultiCheckbox,
  BaPageTop,
  BaSidebar,
} from './components';

import { BaCardBlur } from './components/baCard/baCardBlur.directive';
import { baCardZoomIn } from './components/baCard/baCardZoomIn.directive';

import {
  BaScrollPosition,
  BaThemeRun
} from './directives';

import {
  BaAppPicturePipe,
  BaKameleonPicturePipe,
  BaProfilePicturePipe
} from './pipes';

import {
  BaImageLoaderService,
  BaPluginMenuLoaderservice,
  BaMenuService,
  BaHttpInterceptorService,
  BaIntervalService,
  BaTranslateService,
  BaThemePreloader,
  BaRouterHandleService,
  BaThemeSpinner
} from './services';

import {
  EmailValidator,
  EqualPasswordsValidator
} from './validators';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {BlockUIModule} from "primeng/blockui";
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {SharedModule} from "primeng/shared";
import {BaNoticeService} from "./services/baNotice/baNotice.service";
import {MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';

const NGA_COMPONENTS = [
  BaBackTop,
  BaPageTopTab,
  BaCard,
  BaCheckbox,
  BaContentTop,
  BaMenuItem,
  BaMenu,
  BaMsgCenter,
  BaMultiCheckbox,
  BaPageTop,
  BaSidebar
];

const NGA_DIRECTIVES = [
  BaScrollPosition,
  BaThemeRun,
  baCardZoomIn,
  BaCardBlur
];

const NGA_PIPES = [
  BaAppPicturePipe,
  BaKameleonPicturePipe,
  BaProfilePicturePipe
];

const NGA_SERVICES = [
  BaImageLoaderService,
  BaPluginMenuLoaderservice,
  BaThemePreloader,
  BaThemeSpinner,
  BaRouterHandleService,
  BaHttpInterceptorService,
  BaIntervalService,
  BaTranslateService,
  BaNoticeService,
  BaMenuService
];

const NGA_VALIDATORS = [
  EmailValidator,
  EqualPasswordsValidator
];

@NgModule({
  declarations: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    AppTranslationModule,
      MDBBootstrapModulesPro.forRoot(),
      BlockUIModule,
      ScrollPanelModule
  ],
  exports: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ]
})
export class NgaModule{
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        BaThemeConfigProvider,
        BaThemeConfig,
        ...NGA_VALIDATORS,
        ...NGA_SERVICES
      ],
    };
  }
}
