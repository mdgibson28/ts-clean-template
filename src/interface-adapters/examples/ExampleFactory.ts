import {AdapterFactory} from '../AdapterFactory';
import {ExampleDependencySet} from './Example';

export class ExampleFactory implements AdapterFactory {
    dependencies:ExampleDependencySet = {
        inbound: {
            state: 'in'
        },
        outbound: {
            state: 'out'
        }
    };
}
