import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/RX';
import { Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];

  private keyword: string;

  private titleFilter: FormControl = new FormControl();

  constructor() {
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value => this.keyword = value
      );
  }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 1.5, '这是第一个商品，是我chuangjian de ', ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 1.99, 3.5, '这是第二个商品，是我chuangjian de ', ['电子产品', '硬件设备']),
      new Product(3, '第三个商品', 1.99, 4.5, '这是第三个商品，是我chuangjian de ', ['硬件设备']),
      new Product(4, '第四个商品', 1.99, 2.5, '这是第四个商品，是我chuangjian de ', ['电子产品', '硬件设备']),
      new Product(5, '第五个商品', 1.99, 5, '这是第五个商品，是我chuangjian de ', ['硬件设备']),
      new Product(6, '第六个商品', 1.99, 3, '这是第六个商品，是我chuangjian de ', ['图书'])
    ];

  }
  // ngOnInit() {
  //   this.products = this.productService.getProducts();
  // }

}
