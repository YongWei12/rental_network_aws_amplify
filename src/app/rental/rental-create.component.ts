import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  graphqlOperation } from 'aws-amplify';
import { APIService, RentalType } from '../API.service';
import { ZenObservable } from 'zen-observable-ts';
import { Storage, Auth } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.css']
})
export class RentalCreateComponent implements OnInit, OnDestroy {
  public createForm: FormGroup;

  private subscription: ZenObservable.Subscription | null = null;
  
  public rentalTypes = Object.values(RentalType);

  private selectedFile: File | null = null;

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      rentalType: ['', Validators.required],
      title: ['', Validators.required],
      pricePerMonth: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  async ngOnInit() {
    // ... subscribe to new rentals being created (if required)
  }

  async onCreate(rentalData: any) {
    const user = await Auth.currentAuthenticatedUser();
    const ownerId = user.attributes.sub;
    console.log("creating owner ID:  " + ownerId)
    console.log("create rental: "+ rentalData);
    if (this.selectedFile) {
      const uniqueFilename = uuidv4() + '-' + this.selectedFile.name;

      try {
        const result = await Storage.put(uniqueFilename, this.selectedFile, {
          contentType: this.selectedFile.type,
        });

        rentalData.photo = (result as any).key;
      } catch (error) {
        console.error('Error uploading file:', error);
        return;
      }
    }



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

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

}
