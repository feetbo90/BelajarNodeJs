/**
 * Created by mhdiqbalpradipta on 30/04/19.
 */

const http = require('http');

const express = require('express');
//const routes = require('./routes')
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

function rqListener(req, res) {}

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});


//const server = http.createServer(app);

//const server = http.createServer(routes.handler);

//server.listen(3000);

app.listen(3000);