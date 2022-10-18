import {BaseAdapter} from './BaseAdapter';
import {AdapterFactory} from './AdapterFactory';
import {Constructor} from '../types/Constructor';

export function Adapter<T extends BaseAdapter>(factory?:AdapterFactory) {
    return function adapterFactory<T extends Constructor>(factoryConstructor:T) {
        return class extends factoryConstructor {
            constructor(...args:any[]) {
                super(factory.dependencies);
            }
        }
    }
}
