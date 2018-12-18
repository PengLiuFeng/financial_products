import { Route } from '@angular/router';

import { PreloadingStrategy } from '@angular/router';
import {Observable,of} from 'rxjs';
import {Injectable} from '@angular/core';


@Injectable()
export class ModulePreloadingStrategy implements PreloadingStrategy {
    constructor() { }
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        return route.data && route.data.preload ? load() : of(null);
    }

}
