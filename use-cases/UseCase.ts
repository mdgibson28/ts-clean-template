import {BaseUseCase} from './BaseUseCase';

interface IConstructor {
    new(...args: any[]);
}

/**
 * Decorator for all use case classes. Sets up dependencies and makes object immutable
 * @param dependencies
 * @constructor
 */
export function UseCase<T extends BaseUseCase>(dependencies:{[key:string]:any}) {
    return function factory<T extends IConstructor>(useCaseConstructor:T) {
        return class extends useCaseConstructor {
            constructor(...args:any[]) {
                const me:any = super(dependencies);
                Object.freeze(me);
            }
        };
    }
}
