import {ExampleDependencies} from './ExampleDependencies';
import {Factory} from '../../foundation/decorators/Factory';
import {Adapter} from '../Adapter';
import {Dependency} from '../../foundation/decorators/Dependency';

@Factory<Example>(ExampleDependencies)
export class Example extends Adapter<Example> {

    @Dependency inbound:{state: string;};
    @Dependency outbound:{state: string;};

    public getInput():string {
        return this.inbound.state;
    }

    public getOutput():string {
        return this.outbound.state;
    }
}
