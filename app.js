/**
 * Created by mhdiqbalpradipta on 30/04/19.
 */

const http = require('http');

const express = require('express');
//const routes = require('./routes')

function rqListener(req, res) {}

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware");
    next();
});

app.use((req, res, next) => {
    console.log("In the another middleware");
    res.send('<h1>Hello from Express</h1>');
});


const server = http.createServer(app);

//const server = http.createServer(routes.handler);

//server.listen(3000);

app.listen(3000);