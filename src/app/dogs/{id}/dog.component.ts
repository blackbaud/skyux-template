import { Input, Component } from '@angular/core';

@Component({
  selector: 'bark-dog',
  template: `Hey!: {{ id }}`,
})
export class DogComponent {

  @Input()
  public id: string;

  constructor() {
      console.log('DogListComponent is running!');
  }
}
