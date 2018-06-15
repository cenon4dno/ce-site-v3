import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {i18n} from 'app/services/i18n/i18n';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES],
  pipes: [],
  styles: [require('./home.style.scss')],
  template: require('./home.template.html')
})

export class Home {
  public contents: string[];

  constructor(private langFile: i18n) {
    this.contents = langFile.lang.configs;
  }
}
