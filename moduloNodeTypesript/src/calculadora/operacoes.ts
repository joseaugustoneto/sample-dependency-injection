import { InjectableJurema } from "../serviceDecorator";
import { Soma } from "./operadores/soma";
import { Subtracao } from "./operadores/subtracao";

@InjectableJurema()
export class Operacoes {
  constructor(private soma: Soma, private subtracao: Subtracao) {}

  somar(a: number, b: number) {
    return this.soma.somar(a, b);
  }

  subtrair(a: number, b: number) {
    return this.subtracao.subtrair(a, b);
  }
}
