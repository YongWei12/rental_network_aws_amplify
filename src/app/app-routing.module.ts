import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalCreateComponent } from './rental/rental-create.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create-rental', component: RentalCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
