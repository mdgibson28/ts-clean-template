import {UseCase} from '../UseCase';
import {BaseUseCase} from '../BaseUseCase';
import {ExampleFactory} from './ExampleFactory';
import {UseCaseFactory} from '../UseCaseFactory';

export interface ExampleDependencies extends UseCaseFactory {
    start:() => string;
}

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
