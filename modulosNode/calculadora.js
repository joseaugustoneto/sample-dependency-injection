var Operacoes = require("./operacoes");
var Soma = require("./operadores/soma");
var Subtracao = require("./operadores/subtracao");

module.exports = (function () {
  var _operacoes;

  class Calculadora {
    constructor() {
      var soma = new Soma();
      var subtracao = new Subtracao();

      _operacoes = new Operacoes(soma, subtracao);
    }

    calcularSomatoria(a, b) {
      return _operacoes.somar(a, b);
    }

    calcularSubtracao(a, b) {
      return _operacoes.subtrair(a, b);
    }
  }

  return Calculadora;
})();
