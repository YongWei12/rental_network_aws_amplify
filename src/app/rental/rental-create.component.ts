import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  graphqlOperation } from 'aws-amplify';
import { APIService, RentalType } from '../API.service';
import { ZenObservable } from 'zen-observable-ts';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.css']
})
export class RentalCreateComponent implements OnInit, OnDestroy {
  public createForm: FormGroup;

  private subscription: ZenObservable.Subscription | null = null;
  
  public rentalTypes = Object.values(RentalType);


  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      rentalType: ['', Validators.required],
      title: ['', Validators.required],
      photo: [''],
      pricePerMonth: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  async ngOnInit() {
    // ... subscribe to new rentals being created (if required)
  }

  public onCreate(rentalData: any) {
    this.api
      .CreateRental(rentalData)
      .then((event) => {
        console.log('Rental created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('Error creating rental...', e);
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }
}
