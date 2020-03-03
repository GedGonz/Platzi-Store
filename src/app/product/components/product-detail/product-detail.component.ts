import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {

     }

  fecthProduct(id: string) {
      this.productsService.getPoduct(id).subscribe(product => {
        this.product = product
      });
  }
  crearPoduct() {

    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular2',
      image: 'assets/images/banner-1.jpg',
      price: 200,
      description: 'bla bla bla'
    }
    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fecthProduct(id);

    });
  }


}
