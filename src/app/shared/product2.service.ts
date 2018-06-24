import { Injectable } from '@angular/core';
import {Product, ProductService} from './product.service';
import {LoggerService} from './logger.service';
// import {Product, ProductService} from './product.service';

@Injectable()
export class AnotherProductService implements ProductService{
    constructor(public logger: LoggerService) { }
    getProduct(): Product {
        return new Product(2, 'sumsung7', 4899, '最新款三星手机');
    }
}