import { Component } from '@angular/core';
import { APIService } from '../API.service';
import { Rental } from '../API.service';
import { Storage, Auth } from 'aws-amplify';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {


  userName: String = "";
  email: String = "";
  public rentals: Array<Rental> = [];

  public signedPhotoUrls: { [key: string]: string } = {};

  constructor(private api: APIService){}

  async getCurrentUser() {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      console.log(userData);
      console.log(userData.username);
      console.log(userData.attributes);
      console.log(userData.attributes.email);

      this.userName = userData.username;
      this.email = userData.attributes.email;
      const ownerId = userData.attributes.sub;
      
      try {
        const result = await this.api.ListRentals();
        console.log("results  " + result)
        // this.rentals =  result.items as Rental[]
        for (const rental of result.items) {
          if (rental.photo && Array.isArray(rental.photo) && rental.photo.length > 0 && ownerId === rental.username) {
            this.rentals.push(rental);
            const photoKey = rental.photo[0] as string;
            console.log(photoKey);
            console.log("rental id",rental.id);
            this.signedPhotoUrls[rental.id] = await this.getSignedPhotoUrl(photoKey);
          }
        }
      } catch (error) {
        console.error('Error fetching rentals:', error);
      }

    } catch (error) {
      console.error('Error fetching user: ', error);
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




  ngOnInit() {
    this.getCurrentUser();

  }




}
