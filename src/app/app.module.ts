import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SkyModule } from 'blackbaud-skyux2/dist/core';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { AppNavComponent } from '../shared/app-nav.component';
import { HomeComponent } from './home/home.component';
import { CatsComponent } from './cats/cats.component';
import { DogListComponent } from './dogs/dog-list.component';
import { DogComponent } from './dogs/{id}/dog.component';
import { NotFoundComponent } from './404/notfound.component';

@NgModule({
    declarations: [
      AppComponent,
      AppNavComponent,
      HomeComponent,
      CatsComponent,
      DogListComponent,
      DogComponent,
      NotFoundComponent
    ],
    imports: [
      BrowserModule,
      HttpModule,
      RouterModule,
      ReactiveFormsModule,
      SkyModule,
      routing
    ],
    providers: [
      appRoutingProviders
    ],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule {}
