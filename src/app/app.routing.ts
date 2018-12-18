import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {ModulePreloadingStrategy} from './ModulePreloadingStrategy';

export const routes: Routes = [
  { path: '', redirectTo: 'plugin', pathMatch: 'full' },
  { path: '**', redirectTo: 'plugin' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true/**取消浏览器#号*/ , preloadingStrategy: ModulePreloadingStrategy });
