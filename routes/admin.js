/**
 * Created by mhdiqbalpradipta on 19/05/19.
 */

const express = require('express');

const Router = express.Router();

Router.use('/add-product',(req, res, next) => {
    console.log("In the middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Button</button></form><h1>Hello add product</h1>');
    //next();
});

Router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = Router;
