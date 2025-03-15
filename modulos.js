// Criando seus próprios modulos
exports.dataHora = (function () {
    return Date();
  }());
  console.log(this.dataHora);

  var http = require('http');
  var data = this.dataHora;
  http.createServer(function (req, res) { //Acessando o mudulo HTTP e passando o return do seu modulo dentro do modulo HTTP 2º Formula.
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
  }).listen(3001);