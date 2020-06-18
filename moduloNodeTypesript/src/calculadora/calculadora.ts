import { Operacoes } from "./operacoes";
import { InjectableJurema } from "../serviceDecorator";

@InjectableJurema()
export class Calculadora {
  constructor(private operacoes: Operacoes) {}

  calcularSomatoria(a: number, b: number) {
    return this.operacoes.somar(a, b);
  }
}
