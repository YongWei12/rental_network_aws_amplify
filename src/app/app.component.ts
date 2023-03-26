import { Component } from '@angular/core';
import { ZenObservable } from 'zen-observable-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amplify-app';
  private subscription: ZenObservable.Subscription | null = null;



}
