import {UseCase} from '../UseCase';
import {dependencies} from './dependencies';
import {Dependency} from '../../foundation/decorators/Dependency';
import {Factory} from '../../foundation/decorators/Factory';
import {DependencySet} from '../../foundation/types/DependencySet';

export interface IExampleDependencies extends DependencySet {
    processor:{
        start:() => string;
    }
}

@Factory<IExampleDependencies>(dependencies)
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
