var express = require('express');
var app = express();

var port = process.env.PORT || 8092;
var http = require('http');
var bodyParser = require('body-parser');

var story = require('./routes/story');
var teaser = require('./routes/teaser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(errorHandler)

function errorHandler(err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
}


app.listen(port,function (err) {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log("server is listening on " + port);
});

app.post('/story',story);
app.post('/teaser',teaser);