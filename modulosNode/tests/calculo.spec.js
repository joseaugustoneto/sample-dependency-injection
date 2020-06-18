const Calculadora = require("../calculadora");

var calculadora = new Calculadora();
// jest.spyOn(calculadora.operacoes, "somar").mockReturnValue(4);

test("Somar 1 + 2 = 3", () => {
  expect(calculadora.calcularSomatoria(1, 2)).toBe(3);
});
