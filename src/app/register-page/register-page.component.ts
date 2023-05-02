import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
  ) { 
  }

  confirmRegister(): void {
    console.log("registered");
    this.ref.close("registered");
  }
}
