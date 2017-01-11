var express = require('express');

var app = express();

//trata as requisições do app
//request: encapsula os dados que estão sendo recebidos
//response: encapsula o que eu quero servir como resposta pra essa requisição

app.get('/', function(request, response){

    response.send('Olá, mundo!');
});

app.listen(5050, function(){

    console.log('Executando...');
});
