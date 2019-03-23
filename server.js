const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const { API_BASE_URL, API_KEY} = require('./config');

// Serve static files
app.use(express.static(__dirname + '/public'));
app.use(express.json());

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    if (req.method === 'OPTIONS') {
      return res.send(204);
    }
    next();
});
  
const asyncMiddleware = async (req,res,next, location) => {
    console.log(req.param.location);
    console.log(API_KEY);
    console.log(API_BASE_URL);
    let API_URL = API_BASE_URL + req.param.location + '&units=imperial&APPID=' + API_KEY;
    const data = await PromiseBasedDataRequest(API_URL);
    req.data = data.json()
    next()
}

app.get('/weather', asyncMiddleware, (req, res) => {
    data => res.json(data);
});


