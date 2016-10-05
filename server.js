var express = require('express');
var app = express();

app.get('/vast-lemur', function(request, response){
    response.send('YOU SHOULD PUT YOUR NICKNAME HERE!');
});

app.get('/', function(request, response){
    response.send('HW5!!!');
});


app.listen(process.env.PORT || 4000);