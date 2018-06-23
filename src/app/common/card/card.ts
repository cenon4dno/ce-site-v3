import { Component, Input } from '@angular/core';
import {ContactList} from 'app/common/contact-list/contactList';

@Component ({
    selector: 'card',
    directives: [ContactList],
    styles: [require('./card.style.scss')],
    template: require('./card.template.html')
})

export class Card {
    @Input() cardInfo: Object;

    constructor() {}
}