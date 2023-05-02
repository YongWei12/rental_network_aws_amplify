import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
  ) { 
  }

  login(): void {
    console.log("login");
    // this.ref.close("login failed");
    this.ref.close("login success");
  }

  register(): void {
    console.log("register");
    this.ref.close("registerPage");
  }

}
