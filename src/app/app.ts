/// src/app/index.ts
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FORM_PROVIDERS} from '@angular/common';
import {i18n} from './services/i18n/i18n';
import {Configuration} from './services/configuration/configuration';
import routes from './app.routes';
import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    providers: [...FORM_PROVIDERS, i18n, Configuration],
    directives: [...ROUTER_DIRECTIVES],
    pipes: [],
    styles: [require('./app.style.scss')],
    template: require('./app.template.html')
})

@RouteConfig(routes)

export class App {
    public lang: object = {};

    constructor(public i18n: i18n, private configuration: Configuration) {

        this.configuration.getConfig()
            .then((config) => {
                this.i18n.geti18nFile(config)
                    .then((lang) => {
                        this.lang = lang;
                    });
            });
    }
}
