import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private produts: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }


  addCart(product: Product) {
      this.produts = [...this.produts, product];
      this.cart.next(this.produts);
  }
}
