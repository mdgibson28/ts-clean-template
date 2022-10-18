import {Constructor} from '../types/Constructor';
import {BaseUseCase} from './BaseUseCase';
import {UseCaseFactory} from './UseCaseFactory';

/**
 * Decorator for all use case classes. Sets up dependencies and makes object immutable
 * @param factory
 * @constructor
 */
export function UseCase<T extends BaseUseCase>(factory?: UseCaseFactory) {
    return function useCaseFactory<T extends Constructor>(useCaseConstructor:T) {
        return class extends useCaseConstructor {
            constructor(...args:any[]) {
                super(factory.dependencies);
            }
        };
    }
}
