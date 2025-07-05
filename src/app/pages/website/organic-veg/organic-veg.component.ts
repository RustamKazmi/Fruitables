import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-organic-veg',
  imports: [],
  templateUrl: './organic-veg.component.html',
  styleUrl: './organic-veg.component.css'
})
export class OrganicVegComponent {
@ViewChild('carousel', { static: false }) carousel!: ElementRef;

  items = [
    { name: 'Parsely', id:1, price: 7.99, img: '/img/vegetable-item-1.jpg' },
    { name: 'Cabbage', id:2, price: 7.99, img: '/img/vegetable-item-2.jpg' },
    { name: 'Banana', id:3, price: 7.99, img: '/img/vegetable-item-3.png' },
    { name: 'Parsely', id:4, price: 7.99, img: '/img/vegetable-item-4.jpg' },
    { name: 'Potato', id:5, price: 7.99, img: '/img/vegetable-item-5.jpg' },
    { name: 'Coriander', id:6, price: 7.99, img: '/img/vegetable-item-6.jpg' },
  ]
  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

}
