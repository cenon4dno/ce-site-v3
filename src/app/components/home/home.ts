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
  private page: string = 'resume';

  constructor(private langFile: i18n) {
    this.contents = langFile.getPageContent(this.page);
    this.contents = this.sortingOfContents(this.contents);
  }

  private sortingOfContents(contents) {
    if (contents.length > 0) {
      contents.sort((a, b) => {
        if (a.sort < b.sort) {
          return -1;
        } else if (a.sort > b.sort) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    return contents;
  }
}
