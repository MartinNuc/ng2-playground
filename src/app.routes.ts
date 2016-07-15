import {RouterConfig, provideRouter} from '@angular/router';
import { Home } from './components/home/home.component';
import { About } from './components/about/about.component';

const routes: RouterConfig = [
    { path: '',      component: Home },
    { path: 'home',  component: Home },
    // make sure you match the component type string to the require in asyncRoutes
    { path: 'about', component: About},
    { path: '**',    component: Home }
];

export const appRouterProviders = [
    provideRouter(routes)
];