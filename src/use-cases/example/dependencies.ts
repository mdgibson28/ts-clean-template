import {IExampleDependencies} from './Example';

export const dependencies:IExampleDependencies = {
    processor: {
        start: ():string => {
            return 'success';
        }
    }
}
