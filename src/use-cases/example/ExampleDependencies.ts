import {IExampleDependencies} from './Example';

export const ExampleDependencies:IExampleDependencies = {
    processor: {
        start: ():string => {
            return 'success';
        }
    }
}
