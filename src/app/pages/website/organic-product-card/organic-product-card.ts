import { Component } from '@angular/core';
import { FruitItems } from '../../../services/fruit-items';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-organic-product-card',
  imports: [],
  templateUrl: './organic-product-card.html',
  styleUrl: './organic-product-card.css'
})
export class OrganicProductCard {
  fruitItems: any = []

  constructor(private fruitItemService: FruitItems, private authService: Auth, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.fruitItemService.getFruitItems().subscribe((fruitItems: any) => {
      this.fruitItemService.fruitItems$ = fruitItems;
      this.fruitItems = fruitItems;
    })
  
  }
  addToCart(id: any) {
    this.authService.user$.pipe(take(1)).subscribe((user: any) => {
      if (user?.username && user?.email) {
        const existingItem = user.cart.find((item: any) => item.productId === id);

        if (existingItem) {
          existingItem.quantity = (existingItem.quantity || 1) + 1;
          return;
        }

        const updatedCart = [...(user.cart || []), { productId: id , quantity : 1}];

        // Update in memory
        user.cart = updatedCart;
        this.authService.user$.next(user);

        // Update in backend (json-server)
        this.http.patch(`http://localhost:3000/User/${user.id}`, {
          cart: updatedCart
        }).subscribe({
          next: () => console.log('Cart updated in db.json'),
          error: (err) => console.error('Failed to update cart in db.json', err)
        });

      } else {
        Swal.fire({
          title: 'Login Alert!',
          text: 'You have to login first!',
          icon: 'warning'
        });
        this.router.navigate(['login']);
      }
    });
  }
}
