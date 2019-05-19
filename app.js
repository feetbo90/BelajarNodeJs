/**
 * Created by mhdiqbalpradipta on 30/04/19.
 */

const http = require('http');

const express = require('express');
//const routes = require('./routes')
const bodyParser = require('body-parser');

function rqListener(req, res) {}

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/',(req, res, next) => {
    console.log("this is always run");
    next();
});

app.use('/add-product',(req, res, next) => {
    console.log("In the middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Button</button></form><h1>Hello add product</h1>');
    //next();
});

app.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next) => {
    console.log("In the another middleware");
    res.send('<h1>Hello from Express</h1>');
});


const server = http.createServer(app);

//const server = http.createServer(routes.handler);

//server.listen(3000);

app.listen(3000);