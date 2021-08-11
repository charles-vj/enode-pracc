const http= require('http');
const bodyparser= require('body-parser');

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyparser.urlencoded({extended : false}));

app.use(adminRoutes);
app.use(shopRoutes);
app.use('/', (req,res,next) => {
    res.send('<h1>ye konsa page hai</h1>');
});

app.listen(3000)