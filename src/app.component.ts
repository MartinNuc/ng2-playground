import {Component, ViewEncapsulation} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

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
export class AppComponent {
}