import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import{RentalCreateComponent} from './rental/rental-create.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RentalListComponent } from './rental-list/rental-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RentalCreateComponent,
    HomePageComponent,
    RentalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
