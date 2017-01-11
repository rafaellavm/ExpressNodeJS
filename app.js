var express = require('express');

var app = express();

var path = require('path');

//trata as requisições do app
//request: encapsula os dados que estão sendo recebidos
//response: encapsula o que eu quero servir como resposta pra essa requisição

app.get('/', function(request, response){

    response.sendFile(__dirname + '/public/pages/index.html');
});

app.listen(5050, function(){

    console.log('Executando...');
});
