import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // dataSource: Observable<any>;
  // products: Array<any> = [];
  products: Observable<any>;

  constructor(private http: Http) {
    // this.dataSource = this.http.get('/api/products')
    //   .map((res) => res.json());

    let myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', 'Basic 123456');

    this.products = this.http.get('/api/products', { headers: myHeaders })
      .map((res) => res.json());
  }

  ngOnInit() {
    // this.dataSource.subscribe(
    //   (data) => this.products = data
    // );
  }

}
