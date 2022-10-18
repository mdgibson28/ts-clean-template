import {UseCaseFactory} from '../UseCaseFactory';
import {ExampleDependencies} from './Example';

export class ExampleFactory implements UseCaseFactory {
    dependencies:ExampleDependencies = {
        start: ():string => {
            return 'success';
        }
    };
}
