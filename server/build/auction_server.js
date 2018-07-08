"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
var Product = (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, '第一个商品', 1.99, 1.5, '这是第一个商品，是我chuangjian de ', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 1.99, 3.5, '这是第二个商品，是我chuangjian de ', ['电子产品', '硬件设备']),
    new Product(3, '第三个商品', 1.99, 4.5, '这是第三个商品，是我chuangjian de ', ['硬件设备']),
    new Product(4, '第四个商品', 1.99, 2.5, '这是第四个商品，是我chuangjian de ', ['电子产品', '硬件设备']),
    new Product(5, '第五个商品', 1.99, 5, '这是第五个商品，是我chuangjian de ', ['硬件设备']),
    new Product(6, '第六个商品', 1.99, 3, '这是第六个商品，是我chuangjian de ', ['图书'])
];
app.get('/', function (req, res) {
    res.send('Hello Express!!!!');
});
app.get('/api/products', function (req, res) {
    res.json(products);
});
app.get('/api/products/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
var server = app.listen(8000, 'localhost', function () {
    console.log('服务器已启动， 地址是： http://localhost:8000');
});
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on('connection', function (websocket) {
    websocket.send('这条消息来自服务器！');
    websocket.on('message', function (message) {
        console.log('接受到消息！');
    });
});
setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (client) {
            client.send('这是定时推送！');
        });
    }
}, 2000);
