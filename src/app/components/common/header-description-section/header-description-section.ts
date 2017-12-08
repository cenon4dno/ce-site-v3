import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'about',
    template: require('./header-description-section.template.html'),
    styles: [require('./header-description-section.style.scss')],
    providers: [],
    directives: [],
    pipes: []
})

export class HeaderDescriptionSection implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {}
}
