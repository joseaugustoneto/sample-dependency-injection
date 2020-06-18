import { Calculadora } from "./calculadora";
import { InjectableJurema } from "../serviceDecorator";

@InjectableJurema()
class Main {
  constructor(private calculadora: Calculadora) {
    const soma = this.calculadora.calcularSomatoria(1, 1);
    console.log(soma);
  }
}
