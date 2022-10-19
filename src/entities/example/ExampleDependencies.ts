import {IExampleDependencies} from './Example';

export const ExampleDependencies:IExampleDependencies = {
    idMaker: {
        makeId: ():string => {
            return '123';
        }
    }
}
