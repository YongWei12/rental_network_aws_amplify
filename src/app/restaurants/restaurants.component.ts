import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Restaurant, Rental } from '../API.service';
import { ZenObservable } from 'zen-observable-ts';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit, OnDestroy {
  public createForm: FormGroup;

  /* declare restaurants variable */
  public restaurants: Array<Restaurant> = [];

  public rentals : Array<Rental> = [];

  private subscription: ZenObservable.Subscription | null = null;
  private subscriptionRental: ZenObservable.Subscription | null = null;
  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  // async ngOnInit() {
  //   /* fetch restaurants when app loads */
  //   this.api.ListRestaurants().then((event) => {
  //     this.restaurants = event.items as Restaurant[];
  //   });
  // }

  async ngOnInit() {
    this.api.ListRestaurants().then(event => {
      this.restaurants = event.items as Restaurant[];
    });
    
    this.api.ListRentals().then(
      event => {
        this.rentals = event.items as Rental[];
      }
    );
  
    /* subscribe to new restaurants being created */
    this.subscription = this.api.OnCreateRestaurantListener().subscribe(
      (event: any) => {
        const newRestaurant = event.value.data.onCreateRestaurant;
        this.restaurants = [newRestaurant, ...this.restaurants];
      }
    )

    this.subscriptionRental = this.api.OnCreateRentalListener().subscribe(
      (event: any) => {
        const newRentals = event.value.data.onCreateRental;
        this.rentals = [newRentals, ...this.rentals];
      }
    )
  };

  public onCreate(restaurant: Restaurant) {
    this.api
      .CreateRestaurant(restaurant)
      .then((event) => {
        console.log('item created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating restaurant...', e);
      });
  }

  public onDelete( restaurant : Restaurant ){
    this.api.DeleteRestaurant(restaurant).then((event) => {
      console.log('item deleted');
      this.createForm.reset();
    })
    .catch((e) => {
      console.log('error creating restaurant...', e);
    });

  }


    // ...
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.subscription = null;
    }
}