import { Component, OnInit } from '@angular/core';
import { Auth } from '../../../services/auth';
import { FruitItems } from '../../../services/fruit-items';
import { take, switchMap, map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { Footer } from '../../../shared/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,Footer, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: any[] = [];
  cartFruitItems: any[] = [];
  subTotalPrice = 0;
  cartShow : boolean = false;

  constructor(
    private authService: Auth,
    private fruitItemService: FruitItems,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) { }

  async ngOnInit() {
    try {
      const user: any = await firstValueFrom(this.authService.user$);
      const cartItems = user.cart || [];

      const productIds = cartItems.map((item: any) => item.productId);
      const productQuantities = cartItems.map((item: any) => item.quantity || 1); // default to 1

      if (productIds.length === 0) {
        this.cartFruitItems = [];
        this.cartShow = false;
        console.log(this.cartShow);
        return;
      }

      const allFruits: any[] = await firstValueFrom(this.fruitItemService.getFruitItems());

      this.cartFruitItems = allFruits
        .filter((fruit: any) => productIds.includes(fruit.id.toString()))
        .map((fruit: any) => {
          const index = productIds.indexOf(fruit.id.toString());
          const quantity = productQuantities[index] || 1;
          const numericPrice = parseFloat(fruit.price.split('/')[0].replace('$', '').trim());
          const itemTotal = numericPrice * quantity;

          return {
            ...fruit,
            quantity,
            numericPrice,
            itemTotal,
            productId: fruit.id.toString() // for deletion matching
          };
        });
        
        this.cartShow = true;

      this.updateSubtotal();
    } catch (err) {
      console.error('Failed to load cart items', err);
    }
  }

  deleteCartFruit(productId: any) {
    const user: any = this.authService.user$.getValue();
    if (!user || !user.cart) return;

    // Update the cart in user object
    const updatedCart = user.cart.filter((item: any) => item.productId !== productId);
    user.cart = updatedCart;
    this.authService.user$.next(user);

    // Remove item from the local list and update subtotal
    this.cartFruitItems = this.cartFruitItems.filter((item: any) => item.productId !== productId);
    this.updateSubtotal();

    // Update the backend
    this.http.patch(`http://localhost:3000/User/${user.id}`, {
      cart: updatedCart
    }).subscribe({
      next: () => console.log('Cart item removed'),
      error: err => console.error('Failed to remove cart item:', err)
    });

    // ✅ Actually trigger change detection
    this.cdr.detectChanges();
  }

   async fruitQuantityDec(id: any){
  try {
      // Update Quantity in Ui
   const selectedFruitItem = this.cartFruitItems.find((item: any)=> item.id == id)
 if (!selectedFruitItem || selectedFruitItem.quantity <= 1) return;
 selectedFruitItem.quantity--;

   selectedFruitItem.itemTotal = selectedFruitItem.quantity * selectedFruitItem.numericPrice;

//  update subTotal
this.updateSubtotal()

//Get current user
 const user: any = await firstValueFrom(this.authService.user$);

//  update quantity in user.cart
 const updatedCart = (user.cart || []).map((item:any)=>{
  if(item.productId == id){
    return {
      ...item,
      quantity : item.quantity - 1
    }
  }
  return item;
 })
 user.cart = updatedCart;
 this.authService.user$.next(user)

//  update  in backened
this.http.patch(`http://localhost:3000/User/${user.id}`,{
  cart: updatedCart
}).subscribe({
     next: () => console.log('Quantity decremented and saved'),
      error: (err) => console.error('Failed to update quantity:', err)
})
  } catch (err) {
     console.error('Error in fruitQuantityDec:', err);
  }

  }

async fruitQuantityChange(id: any, newQuantity: any) {
  try {
    const quantity = parseInt(newQuantity, 10);

    if (isNaN(quantity) || quantity < 1) {
      return; // optionally show error or set to 1
    }

    // Update in cartFruitItems
    const selectedFruitItem = this.cartFruitItems.find((item: any) => item.id == id);
    if (!selectedFruitItem) return;

    selectedFruitItem.quantity = quantity;
    selectedFruitItem.itemTotal = selectedFruitItem.numericPrice * quantity;

    this.updateSubtotal();

    // Update in user.cart
    const user: any = await firstValueFrom(this.authService.user$);
    const updatedCart = (user.cart || []).map((item: any) => {
      if (item.productId == id) {
        return {
          ...item,
          quantity: quantity
        };
      }
      return item;
    });

    user.cart = updatedCart;
    this.authService.user$.next(user);

    // PATCH to db.json
    this.http.patch(`http://localhost:3000/User/${user.id}`, {
      cart: updatedCart
    }).subscribe({
      next: () => console.log('Quantity updated via input'),
      error: (err) => console.error('Failed to update cart:', err)
    });

  } catch (err) {
    console.error('Error in fruitQuantityChange:', err);
  }
}



async fruitQuantityInc(id: any) {
  try {
    // Update quantity in UI (cartFruitItems)
    const selectedFruitItem = this.cartFruitItems.find((item: any) => item.id === id);
    if (!selectedFruitItem) return;

    selectedFruitItem.quantity++;
    selectedFruitItem.itemTotal = selectedFruitItem.quantity * selectedFruitItem.numericPrice;

    // Update subtotal
    this.updateSubtotal();

    // Get current user
    const user: any = await firstValueFrom(this.authService.user$);

    // Update quantity in user.cart
    const updatedCart = (user.cart || []).map((item: any) => {
      if (item.productId == id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });

    user.cart = updatedCart;
    this.authService.user$.next(user); // update local BehaviorSubject

    // Persist to backend
    this.http.patch(`http://localhost:3000/User/${user.id}`, {
      cart: updatedCart
    }).subscribe({
      next: () => console.log('Quantity incremented and saved'),
      error: (err) => console.error('Failed to update quantity:', err)
    });
  } catch (err) {
    console.error('Error in fruitQuantityInc:', err);
  }
}

onQuantityInputChange(event: Event, id: any) {
  const input = event.target as HTMLInputElement;
  const value = input.value;
  this.fruitQuantityChange(id, value);
}


  private updateSubtotal() {
    this.subTotalPrice = this.cartFruitItems.reduce(
      (sum: number, item: any) => sum + item.itemTotal,
      0
    );
  }
}