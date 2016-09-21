import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CatsComponent } from './cats/cats.component';
import { DogListComponent } from './dogs/dog-list.component';
import { DogComponent } from './dogs/{id}/dog.component';
import { NotFoundComponent } from './404/notfound.component';

const appRoutes: Routes = [
  { path: 'cats', component: CatsComponent },
  { path: 'dogs', component: DogListComponent },
  { path: 'dogs/:id', component: DogComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
