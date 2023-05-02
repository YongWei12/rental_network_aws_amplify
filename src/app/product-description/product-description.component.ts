import { Component, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage, Auth } from 'aws-amplify';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDescriptionComponent {


  title: string;
  description: string;
  photoUrl;
  price: string;
  availability: string;
  signedPhotoUrls: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title');
    this.description = this.route.snapshot.paramMap.get('description');
    this.price = this.route.snapshot.paramMap.get('price');
    this.availability = this.route.snapshot.paramMap.get('availability');
    this.photoUrl = this.route.snapshot.paramMap.get('photoUrl').split(',');
    console.log(this.title);
    console.log(this.photoUrl)
  
    this.getPhotos();
  }
  
  async getPhotos() {
    for (const photo of this.photoUrl) {
      try {
        console.log(photo);
        let photoUrl = await this.getSignedPhotoUrl(photo);
        console.log(photoUrl);
        this.signedPhotoUrls.push(photoUrl);
        console.log("getting signed urls")
        console.log(this.signedPhotoUrls);
      } catch {
        console.log("error getting picture ")
      }
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

