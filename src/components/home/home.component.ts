import {Component} from '@angular/core';
import {FirebaseListObservable, AngularFire} from "angularfire2/angularfire2";

@Component({
    selector: 'home-component',
    styles: [ require('./home.component.scss')],
    template: `
        <h1>This is our home</h1>
        <div *ngFor="let restaurant of restaurants | async">
            {{restaurant.name}}
        </div>
    `
})
export class Home {
    restaurants: FirebaseListObservable<any[]>;

    constructor(af: AngularFire) {
        this.restaurants = af.database.list('/restaurants');
    }
}