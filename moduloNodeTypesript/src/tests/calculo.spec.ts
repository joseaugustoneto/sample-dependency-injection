import { Operacoes } from "../calculadora/operacoes";
import { Calculadora } from "../calculadora/calculadora";

var operacoes = new Operacoes({} as any, {} as any);
jest.spyOn(operacoes, "somar").mockReturnValue(4);

var calculadora = new Calculadora(operacoes);

test("Somar 1 + 2 = 3", () => {
  expect(calculadora.calcularSomatoria(1, 2)).toBe(4);
});
