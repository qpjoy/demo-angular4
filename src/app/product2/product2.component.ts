import { Component, OnInit, Injector } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { AnotherProductService } from '../shared/product2.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  // providers: [{
  //   provide: ProductService, useClass: AnotherProductService
  // }]
})
export class Product2Component implements OnInit {

    product: Product;

    // constructor(private productService: ProductService) { }

    private productService: ProductService;
    constructor(private injector: Injector) {
      this.productService = injector.get(ProductService);
    }

    ngOnInit() {
        this.product = this.productService.getProduct();
    }
}