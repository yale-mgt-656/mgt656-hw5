var express = require('express');
var app = express();

app.get('/vast-lemur', function(request, response){
    response.send('vast-lemur');
});

app.get('/', function(request, response){
    response.send('HW5!!!');
});


app.listen(process.env.PORT || 4000);