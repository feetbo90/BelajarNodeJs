/**
 * Created by mhdiqbalpradipta on 30/04/19.
 */

const http = require('http');
const path = require('path');
const express = require('express');
//const routes = require('./routes')
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');
const expressHbs = require('express-handlebars');
function rqListener(req, res) {}

const app = express();

app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/',defaultLayout: 'main-layout',
    extname: 'hbs'}));
app.set('view engine', 'hbs');
//app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir,'public')));
app.use('/admin',adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
//    res.status(404).sendFile(path.join(rootDir, 'views','404.html'));
    res.status(404).render('404' ,{ pageTitle: 'Page Not Found'});
});


//const server = http.createServer(app);

//const server = http.createServer(routes.handler);

//server.listen(3000);

app.listen(3000);