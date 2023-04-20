import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.css'],
})
export class ComponentTestComponent {
  productForm: FormGroup;
  selectedImages: string[] = [];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      rentalType: ['', Validators.required],
      pricePerMonth: ['', Validators.required],
      description: ['', Validators.required],
      bedSize: ['', Validators.required],
      roomSize: ['', Validators.required],
      numberOfBathrooms: ['', Validators.required],
    });
  }

  onImageSelect(event: any): void {
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

  onSubmit(): void {
    console.log(this.productForm.value);
  }
}
