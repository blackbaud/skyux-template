import { Component, OnInit } from '@angular/core';

import { DogListService } from './dog-list.service';

@Component({
  selector: 'bark-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss'],
  providers: [DogListService]
})
export class DogListComponent implements OnInit {
  public dogs: string[];

  public errorMessage: string;

  constructor(private svc: DogListService) { }

  public ngOnInit() {
    this.svc.getDogList()
      .subscribe(
        dogs => this.dogs = dogs,
        error => this.errorMessage = error
      );
  }
}
