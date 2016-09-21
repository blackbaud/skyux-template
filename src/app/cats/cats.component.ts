import { Component } from '@angular/core';

@Component({
  selector: 'cats',
  templateUrl: './cats.component.html'
})
export class CatsComponent {
  public cats = [
    'Robert',
    'Jason'
  ];

  constructor() {}
}
