import { Component } from '@angular/core';

@Component({
  selector: 'my-cats',
  templateUrl: './my-cats.component.html'
})
export class MyCatsComponent {
  public cats = [
    'Robert',
    'Jason'
  ];

  constructor() {
      console.log('MyCatsComponent is running!');
  }
}
