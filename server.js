var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/fantastic-dolphin', function(request, response){
    response.send('Hello fantastic-dolphin!');
});


app.listen(process.env.PORT || 4000);