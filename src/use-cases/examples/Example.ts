import {UseCase} from '../UseCase';
import {BaseUseCase} from '../BaseUseCase';
import {ExampleDependencies, ExampleFactory} from './ExampleFactory';

@UseCase(new ExampleFactory())
export class Example extends BaseUseCase {

    protected dependencies:ExampleDependencies;
    protected endResult:string = 'pending';

    public achieveEndResult():void {
        this.endResult = this.dependencies.start();
    }

    public getEndResult():string {
        return this.endResult;
    }
}
