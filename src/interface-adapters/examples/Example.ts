import {AdapterDependencySet, BaseAdapter} from '../BaseAdapter';
import {ExampleFactory} from './ExampleFactory';
import {Adapter} from '../Adapter';

export interface ExampleDependencySet extends AdapterDependencySet {
    inbound: {
        state:string;
    },
    outbound: {
        state: string;
    }
}

@Adapter(new ExampleFactory())
export class Example extends BaseAdapter {

    protected dependencies:ExampleDependencySet;

    public getInput():string {
        return this.dependencies.inbound.state;
    }

    public getOutput():string {
        return this.dependencies.outbound.state;
    }
}
