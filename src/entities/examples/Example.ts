import {ExampleDependencies} from './ExampleDependencies';
import {Dependency} from '../../decorators/Dependency';
import {Factory} from '../../decorators/Factory';
import {Entity} from '../Entity';

@Factory(ExampleDependencies)
export class Example extends Entity<Example> {
    @Dependency idMaker: {makeId: () => string};

    public name:string;
    public id:string;

    _initialize() {
        this.id = this.idMaker.makeId();
    }
}
