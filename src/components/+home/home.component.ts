import {Component} from '@angular/core';

@Component({
    selector: 'home-component',
    styles: [ require('./home.component.scss')],
    template: `
        <h1>This is our home</h1>
    `
})
export class Home {

}