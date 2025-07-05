import { Component } from '@angular/core';
import { FruitItems } from '../../../services/fruit-items';
import { OrganicProductCard } from '../organic-product-card/organic-product-card';

@Component({
  selector: 'app-organic-products',
  imports: [OrganicProductCard],
  templateUrl: './organic-products.component.html',
  styleUrl: './organic-products.component.css'
})
export class OrganicProductsComponent {
  
}
