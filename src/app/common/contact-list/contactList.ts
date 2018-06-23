import { Component, Input } from '@angular/core';

@Component ({
    selector: 'contact-list',
    styles: [require('./contactList.style.scss')],
    template: require('./contactList.template.html')
})

export class ContactList {
    @Input() contactInfo: Object;

    constructor() {
        console.log(JSON.stringify(this.contactInfo));
    }
}