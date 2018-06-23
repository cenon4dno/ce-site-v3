import { Component, Input } from '@angular/core';

@Component({
  selector: 'circle-image',
  styles: [require('./circleImage.style.scss')],
  template: require('./circleImage.template.html')
})

export class CircleImage {
  @Input() image: string;
  constructor() {}
}
