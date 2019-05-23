/**
 * Created by mhdiqbalpradipta on 19/05/19.
 */
const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');

const Router = express.Router();

Router.use('/', (req, res, next) => {
    console.log("this is always run");
    next();
});

Router.get('/', (req, res, next) => {
    console.log('shop.js', adminData.products);
    //res.send('<h1>Hello from Express</h1>');
    const products = adminData.products;
    //res.sendFile(path.join(rootDir,'views','shop.html'));
    res.render('shop', {
        prods: products, docTitle: 'Shop', path: '/', pageTitle: 'Shop'
        , hasProducts: products.length > 0, activeShop: true,
        productCSS: true
    });
});


module.exports = Router;