import { InjectableJurema } from "../../serviceDecorator";

@InjectableJurema()
export class Soma {
  constructor() {}

  somar(a: number, b: number) {
    return a + b;
  }
}
