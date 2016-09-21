import { Input, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  template: `Hey!: {{ id }}`
})
export class DogComponent implements OnInit, OnDestroy {
 private sub: Subscription;
 public id: any;

 constructor(
   private route: ActivatedRoute
 ) { }
 ngOnInit() {
   this.sub = this.route.params.subscribe(params => {
     this.id = params['id'];
   });
 }

 ngOnDestroy() {
   this.sub.unsubscribe();
 }
}
