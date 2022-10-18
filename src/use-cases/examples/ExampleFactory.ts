import {UseCaseFactory} from '../UseCaseFactory';

export interface ExampleDependencies extends UseCaseFactory {
    start:() => string;
}
export class ExampleFactory implements UseCaseFactory {
    dependencies:ExampleDependencies = {
        start: ():string => {
            return 'success';
        }
    };
}
