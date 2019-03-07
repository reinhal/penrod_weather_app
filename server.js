const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const fetch = require("node-fetch");
const { API_BASE_URL, API_KEY} = require('./config');

app.get('/weather/:location', (req, res) => {
    console.log(location);
    let API_URL = API_BASE_URL + req.param.location + '&units=imperial&APPID=' + API_KEY;
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        res.send({
            data
        });
    })
    .catch(err => {
        res.redirect('/error');
    });
});

// Serve static files
app.use(express.static(__dirname + '/public'));

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);

