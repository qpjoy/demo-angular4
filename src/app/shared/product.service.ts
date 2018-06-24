import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 1, '这是第一个商品，是我chuangjian de ', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 1.99, 2.5, '这是第二个商品，是我chuangjian de ', ['电子产品', '硬件设备']),
    new Product(3, '第三个商品', 1.99, 3, '这是第三个商品，是我chuangjian de ', ['硬件设备']),
    new Product(4, '第四个商品', 1.99, 3.5, '这是第四个商品，是我chuangjian de ', ['电子产品', '硬件设备']),
    new Product(5, '第五个商品', 1.99, 4, '这是第五个商品，是我chuangjian de ', ['硬件设备']),
    new Product(6, '第六个商品', 1.99, 5, '这是第六个商品，是我chuangjian de ', ['图书'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-01 22:22:22', '张三', 3, '东西0不错'),
    new Comment(2, 1, '2017-02-02 23:22:22', '张四', 4, '东西1不错'),
    new Comment(3, 1, '2017-03-03 24:22:22', '张五', 3, '东西2不错'),
    new Comment(4, 2, '2017-03-04 25:22:22', '张六', 2, '东西3不错')
  ];

  constructor() {
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}

export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}

export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {

  }
}