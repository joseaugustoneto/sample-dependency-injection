import { GenericClassDecorator, Type } from "./interface";
import { Injector } from "./Injector";

export const InjectableJurema = (): GenericClassDecorator<Type<object>> => {
  return (target: Type<object>) => {
    Injector.resolve<any>(target);
  };
};
