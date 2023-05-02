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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentTestComponent } from './component-test/component-test.component';

import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Materials Modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

// Prime NG Modules
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';

import { LoginPageComponent } from './login-page/login-page.component';
import { RentalListDetailsComponent } from './rental-list/rental-list-details/rental-list-details.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RentalCreateComponent,
    HomePageComponent,
    RentalListComponent,
    ComponentTestComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RentalListDetailsComponent,
    AuthenticationComponent,
    UserProfileComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatGridListModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    DropdownModule
  ],
  providers: [DialogService,MessageService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
