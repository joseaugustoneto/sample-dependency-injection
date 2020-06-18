module.exports = (function () {
  var _soma, _subtracao;

  class Operacoes {
    constructor(soma, subtracao) {
      _soma = soma;
      _subtracao = subtracao;
    }

    somar(a, b) {
      return _soma.somar(a, b);
    }

    subtrair(a, b) {
      return _subtracao.subtrair(a, b);
    }
  }
  return Operacoes;
})();
