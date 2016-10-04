var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/eager-spider', function(request, response){
    response.send('Ces moi!');
});

app.listen(process.env.PORT || 4000);