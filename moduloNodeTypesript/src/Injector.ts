import "reflect-metadata";
import { Type } from "./interface";

export const Injector = new (class {
  resolve<T>(target: Type<any>): T {
    let tokens = Reflect.getMetadata("design:paramtypes", target) || [];
    console.log("target", target, " --->  ", tokens, '\n\n');
    let injections = tokens.map((token) => {
      return Injector.resolve<any>(token);
    });

    return new target(...injections);
  }
})();
