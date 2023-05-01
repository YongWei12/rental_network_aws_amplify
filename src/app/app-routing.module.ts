import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalCreateComponent } from './rental/rental-create.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import {ComponentTestComponent}  from './component-test/component-test.component'
import { LoginPageComponent } from './login-page/login-page.component';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthGuard } from './authentication/auth.guard';
import{AuthenticationComponent} from './authentication/authentication.component'
import {UserProfileComponent} from './user-profile/user-profile.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create-rental', component: RentalCreateComponent,  canActivate: [AuthGuard] },
  { path: 'rentals', component: RentalListComponent },
  { path: 'component-test', component: ComponentTestComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'user-profile', component: UserProfileComponent },
  // { path: 'login-page', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [
  //   DialogService
  // ],
})
export class AppRoutingModule { }
