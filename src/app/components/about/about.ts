import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'about',
    template: require('./about.template.html'),
    styles: [require('./about.style.scss')],
    providers: [],
    directives: [],
    pipes: []
})

export class About implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
    }
}
