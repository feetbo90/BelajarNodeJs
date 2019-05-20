/**
 * Created by mhdiqbalpradipta on 19/05/19.
 */

const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const Router = express.Router();
const products = []

Router.get('/add-product',(req, res, next) => {
    console.log("In the middleware");
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Button</button></form><h1>Hello add product</h1>');
    //next();
});

Router.post('/add-product',(req, res, next) => {
    console.log(req.body);
    products.push({title : req.body.title});
    res.redirect('/');
});

exports.routes = Router;
exports.products = products;