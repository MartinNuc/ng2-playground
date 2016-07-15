import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

import {appRouterProviders} from './app.routes';

bootstrap(AppComponent, [
    appRouterProviders,
    FIREBASE_PROVIDERS,
    defaultFirebase({
        apiKey: "AIzaSyBBQCiNPupq4G81b6EcCShSXdOTq4_94o8",
        authDomain: "ehotel-7341a.firebaseapp.com",
        databaseURL: "https://ehotel-7341a.firebaseio.com/",
        storageBucket: "ehotel-7341a.appspot.com"
    })
]);

