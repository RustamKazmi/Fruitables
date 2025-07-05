import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './post-product.component.html',
  styleUrl: './post-product.component.css'
})

export class PostProductComponent {
  selectedFile: File | null = null;
  base64Image: string = '';

  newProduct = {
    name: '',
    price: '',
    category: '',
    description: '',
    image: '',
  };

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result as string;
        this.newProduct.image = this.base64Image;
      };
      reader.readAsDataURL(file);
    }
  }

  postProduct() {
    const productToSend = {
      id: Date.now().toString(),
      ...this.newProduct
    };

    this.http.post('http://localhost:3000/fruitItems', productToSend).subscribe({
      next: () => {
        console.log('Product added successfully');
        this.newProduct = { name: '', price: '', category: '', description: '', image: '' };
        this.base64Image = '';
        this.selectedFile = null;
      },
      error: (err) => {
        console.error('Error adding product:', err);
      }
    });
  }
}