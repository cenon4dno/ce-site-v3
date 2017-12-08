import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {i18n} from 'app/services/i18n/i18n';
import {HelloWorld} from 'ce-site-common/components';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES, HelloWorld],
  pipes: [],
  styles: [require('./home.style.scss')],
  template: require('./home.template.html')
})

export class Home {
  public contents: object;

  constructor(private langFile: i18n) {
    this.contents = langFile.lang.contents.home;
  }
}
