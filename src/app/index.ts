/// src/app/index.ts
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FORM_PROVIDERS} from '@angular/common';

import '../style/app.scss';

import {i18n} from './services/i18n';         // ./services/api/index.ts
import routes from './routes';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    providers: [...FORM_PROVIDERS, i18n],
    directives: [...ROUTER_DIRECTIVES],
    pipes: [],
    styles: [require('./style.scss')],
    template: require('./template.html')
})

@RouteConfig(routes)

export class App {
    url: string = '//cenonebora.com';
    lang: object = {};

    constructor(public i18n: i18n) {
        i18n.geti18nFile()
            .then((data) => {
                console.log('language', data);
                this.lang = data;
            });
    }
}
