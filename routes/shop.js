/**
 * Created by mhdiqbalpradipta on 19/05/19.
 */
const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const Router = express.Router();

Router.use('/',(req, res, next) => {
    console.log("this is always run");
    next();
});

Router.get('/',(req, res, next) => {
    console.log("In the another middleware");
    //res.send('<h1>Hello from Express</h1>');
    res.sendFile(path.join(rootDir,'views','shop.html'));
});


module.exports = Router;