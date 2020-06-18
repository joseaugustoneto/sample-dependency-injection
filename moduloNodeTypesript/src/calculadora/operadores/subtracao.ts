import { InjectableJurema } from "../../serviceDecorator";

@InjectableJurema()
export class Subtracao {
  constructor() {}

  subtrair(a: number, b: number) {
    return a - b;
  }
}
