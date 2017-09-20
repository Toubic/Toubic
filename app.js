'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

try {

    app.get('/', function (req, res) {
        res.sendFile('index.html');
    });

    // Make robots.txt public:

    app.get('/robots.txt', function (req, res) {
        res.sendFile('robots.txt');
    });

    // Send page missing message for all other routes that does not exist.

    app.get('*', function (req, res) {
        res.send('The page does not exist.');
    });

    app.listen(process.env.PORT || 3000, function () {
        console.log('Server started!');
    });
}
catch (e){
    console.log(e.message);
}