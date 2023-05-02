import { Component } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import awsExports from '../../aws-exports';
import { Amplify } from 'aws-amplify';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
  }

}
