import {UseCase} from '../UseCase';
import {ExampleDependencies} from './ExampleDependencies';
import {Dependency} from '../../foundation/decorators/Dependency';
import {Factory} from '../../foundation/decorators/Factory';
import {DependencySet} from '../../foundation/types/DependencySet';

export interface IExampleDependencies extends DependencySet {
    processor:{
        start:() => string;
    }
}

@Factory<IExampleDependencies>(ExampleDependencies)
export class Example extends UseCase<Example> {

    @Dependency processor: {start:() => string;};
    protected endResult:string = 'pending';

    public achieveEndResult():void {
        this.endResult = this.processor.start();
    }

    public getEndResult():string {
        return this.endResult;
    }
}
