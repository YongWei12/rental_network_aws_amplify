import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalCreateComponent } from './rental/rental-create.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import {ComponentTestComponent}  from './component-test/component-test.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create-rental', component: RentalCreateComponent },
  { path: 'rentals', component: RentalListComponent },
  {path: 'component-test', component: ComponentTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
