import {Component} from '@angular/core';
import {i18n} from 'app/services/i18n/i18n';
import {CircleImage} from 'app/common/circle-image/circleImage';
import {Card} from 'app/common/card/card';

@Component({
  selector: 'home',
  directives: [CircleImage, Card],
  pipes: [],
  styles: [require('./home.style.scss')],
  template: require('./home.template.html')
})

export class Home {
  public contents: string[];
  public greetings: string[];
  private header: string = 'greetings';
  private page: string = 'resume';

  constructor(private langFile: i18n) {
    this.greetings = langFile.getSectionContent(this.header);
    this.contents = this.sortingOfContents(
      langFile.getPageContent(this.page)
    );
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
