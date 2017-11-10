const express = require('express');
const url = require('url');
const querystring = require('querystring');
const pug = require('pug');
const app = express();

app.get('/',function(req,res){
    res.render('index', {title : 'Hey', message: 'Hello'});
    res.sendFile('index.html');
});

app.get('/index', function(req,res){
    res.setHeader("Content-Type","text/html");
    res.write('<div class="container">Si ça marche t\'as une div avec classe et ça dedans sudo poto</div>');
    res.end();
});


app.use(function(req, res, next){
    res.status(404).send('Sorry, somethings get wrong, not found.');
});

app.listen(8080);

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })
