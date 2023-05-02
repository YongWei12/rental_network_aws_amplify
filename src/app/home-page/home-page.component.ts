import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '@aws-amplify/auth';
import { LoginPageComponent } from '../login-page/login-page.component';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { RegisterPageComponent } from '../register-page/register-page.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  userType: 'A' | 'NA' = 'NA';  // autheticated / non autheticated user

  user: any;

  constructor(
    private router: Router,
    private dialogService: DialogService,
    private messageService: MessageService,) {
    this.onCreate('');
    console.log(this.user);
  }

  async onCreate(rentalData: any) {
    this.user = await Auth.currentAuthenticatedUser();
    console.log("user in the function", this.user.username);
  }

  async signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out:', error);
    }
  }

  ngOnInit(): void {
  }

  loginDialog(): void {
    const ref = this.dialogService.open(LoginPageComponent, {
      width: 'max-content',
      height: 'max-content',
      showHeader: false,
      // data: { unitCode: this.state?.unitCode, detachmentId: this.state?.detachmentId },
      // contentStyle: { 'min-height': '500px', 'min-width': '500px' },
      closable: true,
      dismissableMask: true
    });

    ref.onClose.subscribe((msg: string) => {
      console.log(msg);
      if (msg === 'registerPage') {
        this.registerPage();
      }
      else if (msg === 'login success') {
        this.userType = 'A';
        this.messageService.add({
          summary: 'Login', severity: 'success', life: 5000, detail: 'Login Successfully', closable: false
        });
      }
      else if (msg === 'login failed') {
        this.messageService.add({
          summary: 'Login', severity: 'error', life: 5000, detail: 'Login Failed', closable: false
        });
      }
    })
  }

  registerPage(): void {
    const ref = this.dialogService.open(RegisterPageComponent, {
      width: 'max-content',
      height: 'max-content',
      showHeader: false,
      // data: { unitCode: this.state?.unitCode, detachmentId: this.state?.detachmentId },
      // contentStyle: { 'min-height': '500px', 'min-width': '500px' },
      closable: true,
      dismissableMask: true
    });

    ref.onClose.subscribe((msg: string) => {
      if (msg === 'registered') {
        this.messageService.add({
          summary: 'New User', severity: 'success', detail: 'You have registered successfully', closable: false
        })
      }
    })
  }

  registerFrmNav(): void {
    this.registerPage();
  }

  createRental(): void {
    this.router.navigate(['/create-rental']);
  }

  nonAuth(): void {
    this.messageService.add({
      summary: '', severity: 'success', life: 5000, detail: 'Please sign in or register to continue', closable: false
    });
  }
}
