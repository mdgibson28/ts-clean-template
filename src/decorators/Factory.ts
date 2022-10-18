import {Constructor} from '../types/Constructor';
import {DependencySet} from '../types/DependencySet';
import {Class} from '../types/Class';

export function Factory<T extends Class>(dependencies?:DependencySet) {
    return function factory<U extends Constructor>(constructor:U) {
        return class extends constructor {
            constructor(...args:any[]) {
                super(...args);
                if (dependencies) {
                    for(let key in dependencies) {
                        Object.defineProperty(this, key, {
                            value: dependencies[key],
                            writable: false,
                            enumerable: false,
                            configurable: false
                        });
                    }
                }

                this._initialize();
            }
        };
    }
}
