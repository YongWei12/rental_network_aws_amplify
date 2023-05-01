import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { APIService, Rental } from 'src/app/API.service';
import { Storage, Auth } from 'aws-amplify';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-rental-list-details',
  templateUrl: './rental-list-details.component.html',
  styleUrls: ['./rental-list-details.component.css']
})
export class RentalListDetailsComponent {

  test: string;
  public rentals: Array<Rental> = [];
  public displayRental: Array<Rental> = [];
  public signedPhotoUrls: { [key: string]: string } = {};

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private api: APIService,
  ) { 
    this.test = config.data.data;

    console.log("can see anoy", this.test);
  }

  async ngOnInit() {

    const user = await Auth.currentAuthenticatedUser();
    const ownerId = user.attributes.sub;
    console.log("list owner ID:  " + ownerId)
    try {
      const result = await this.api.ListRentals();
      console.log("results  " + result)
      this.rentals =  result.items as Rental[]
      this.rentals.forEach(x => {
        if(x.id === this.test){
          this.displayRental.push(x);
        }
      })
      for (const rental of this.displayRental) {
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

  async handleClick() {
    const stripe = await loadStripe(
      "pk_test_51L4jXPKdTSV8bg8w0fz0kimSG031Xoc5jeB4gXeGCt8x7mASfkAYLQzmJSdYNTbQtNIdeHUnJin1xprNw3958ump00e9nhhn9v"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_1L4lEGKdTSV8bg8wWWfunlGh", quantity: 1 }],
      mode: "subscription",
      successUrl: "http://localhost:3000/post",
      cancelUrl: "http://localhost:3000/cancel",
    });
  }

  booking(): void {
    console.log("booking");

    this.handleClick();

    // async function handleClick() {
    //   const stripe = await loadStripe(
    //     "pk_test_51L4jXPKdTSV8bg8w0fz0kimSG031Xoc5jeB4gXeGCt8x7mASfkAYLQzmJSdYNTbQtNIdeHUnJin1xprNw3958ump00e9nhhn9v"
    //   );
    //   const { error } = await stripe.redirectToCheckout({
    //     lineItems: [{ price: "price_1L4lEGKdTSV8bg8wWWfunlGh", quantity: 1 }],
    //     mode: "subscription",
    //     successUrl: "http://localhost:3000/post",
    //     cancelUrl: "http://localhost:3000/cancel",
    //   });
    // }
    // return (
    //   <Layout
    //     //handleClick here
    //     authText="Sign Up"
    //     username="none"
    //   >
    //     <View marginBottom="135px">
    //       <Hero handleClick={handleClick} />
    //     </View>
    //     //other components here
    //   </Layout>
    // );
  }
}
