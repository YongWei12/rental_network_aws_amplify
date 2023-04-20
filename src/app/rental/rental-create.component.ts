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

  selectedFiles: File[] = [];
  selectedImages: string[] = [];

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
    console.log("creating owner ID:  " + ownerId);
    console.log("create rental: " + rentalData);
  
    const uploadedPhotoKeys = [];
  
    if (this.selectedFiles.length > 0) {
      for (const file of this.selectedFiles) {
        const uniqueFilename = uuidv4() + '-' + file.name;
  
        try {
          const result = await Storage.put(uniqueFilename, file, {
            contentType: file.type,
          });
  
          uploadedPhotoKeys.push((result as any).key);
        } catch (error) {
          console.error('Error uploading file:', error);
          return;
        }
      }
    }
  
    rentalData.photo = uploadedPhotoKeys;


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

  onFilesSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);

    const files = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.selectedImages.push(reader.result as string);
        };
      }
    }
  }

}
