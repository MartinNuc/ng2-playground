import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router';
import {provide} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {defaultFirebase, FIREBASE_PROVIDERS} from "angularfire2/angularfire2";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    FIREBASE_PROVIDERS,
    defaultFirebase('https://u-plus-ng2.firebaseio.com'),
    provide(APP_BASE_HREF, {useValue : '/' })
]);

