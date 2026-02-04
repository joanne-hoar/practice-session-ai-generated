import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  allProducts: Product[] = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Tablet" },
    { id: 3, name: "Smartphone" },
    { id: 4, name: "Headphones" },
    { id: 5, name: "Mouse" },
    { id: 6, name: "Keyboard" }
  ];

  countItems = 0;

  receiveAddToCart(id: number) {
    this.countItems += 1;
    alert("Add item " + id + ", Items in cart: " + this.countItems);
  }
}
