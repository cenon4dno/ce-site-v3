import {Component} from '@angular/core';
import {i18n} from 'app/services/i18n/i18n';

@Component({
    selector: 'about',
    template: require('./about.template.html'),
    styles: [require('./about.style.scss')],
    providers: [],
    directives: [],
    pipes: []
})

export class About {
    public contents: string[];
    private page: string = 'about';

    constructor(private langFile: i18n) {
        this.contents = langFile.getPageContent(this.page);
    }
}
