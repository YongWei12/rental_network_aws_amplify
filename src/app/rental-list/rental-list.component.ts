import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Rental } from '../API.service';
import { Storage, Auth } from 'aws-amplify';
import { DialogService } from 'primeng/dynamicdialog';
import { RentalListDetailsComponent } from './rental-list-details/rental-list-details.component';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css'],
})
export class RentalListComponent implements OnInit {

  userType: 'A' | 'NA' = 'NA';  // autheticated / non autheticated user

  public rentals: Array<Rental> = [];

  constructor(private api: APIService,
    private dialogService: DialogService,) {}


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
          console.log("rental id",rental.id);
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

  async signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Error signing out:', error);
    }
  }

  viewFlatDetails(id: string): void {
    console.log("view details");
    console.log(id);
    // this.getRentalDetails(id);
    const ref = this.dialogService.open(RentalListDetailsComponent, {
      width: 'max-content',
      height: 'max-content',
      showHeader: false,
      data: { data: id },
      // contentStyle: { 'min-height': '500px', 'min-width': '500px' },
      closable: true,
      dismissableMask: true
    });
  }

  // getRentalDetails(id: string): Rental {
  //   for (var rental of this.rentals) {
  //     if(rental.id === id) {
  //       console.log(rental);
  //       var a: Array<Rental> = [];
  //       a.push(rental)
  //       return rental;
  //     }
  //     else {
  //       var b: Array<Rental> = []
  //       return ;
  //     }
  //   }
  // }
}
