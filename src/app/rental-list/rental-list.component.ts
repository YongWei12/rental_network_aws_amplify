import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Rental } from '../API.service';
import { Storage, Auth } from 'aws-amplify';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css'],
})
export class RentalListComponent implements OnInit {
  public rentals: Array<Rental> = [];

  constructor(private api: APIService) {}


  public signedPhotoUrls: { [key: string]: string } = {};
  
  async ngOnInit() {

    const user = await Auth.currentAuthenticatedUser();
    const ownerId = user.attributes.sub;
    console.log("list owner ID:  " + ownerId)
    try {
      const result = await this.api.ListRentals();
      console.log("results  " + result)
      this.rentals =  result.items as Rental[]
      for (const rental of this.rentals) {
        if (rental.photo && Array.isArray(rental.photo) && rental.photo.length > 0) {
          const photoKey = rental.photo[0] as string;
          console.log(photoKey);
          this.signedPhotoUrls[rental.id] = await this.getSignedPhotoUrl(photoKey);
        }
      }
    } catch (error) {
      console.error('Error fetching rentals:', error);
    }
  }

  async getSignedPhotoUrl(photoKey: string) {
    try {
      const signedUrl = await Storage.get(photoKey);
      return signedUrl as string;
    } catch (error) {
      console.error('Error fetching signed URL:', error);
      return '';
    }
  }
}
