//Escrevendo no terminal via CLI
console.log('Hello World');
console.log('Até aqui funcionou!');


//Ativando servidor web
var http = require('http'); //Inclua os modulos que serão utilizados aqui
http.createServer(function (req, res) { //Acessando o mudulo HTTP e criando o servidor.
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('PC Professor!');
}).listen(3000);