import {Component, ViewEncapsulation} from "@angular/core";
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {Home} from "./components/home/home.component";
import {About} from "./components/about/about.component";

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    directives: [
        ...ROUTER_DIRECTIVES,
    ],
    template: `
    This is our app.
    
    <a [routerLink]="['./']">Home</a>
    <a [routerLink]="['./about']">About</a>
    
    <router-outlet></router-outlet>
  `
})
@Routes([
    {path: '/', component: Home},
    {path: '/about', component: About},
])
export class AppComponent {
}