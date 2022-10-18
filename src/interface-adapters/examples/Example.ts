import {AdapterDependencySet, BaseAdapter} from '../BaseAdapter';
import {ExampleFactory} from './ExampleFactory';
import {Adapter} from '../Adapter';
import {DependencySet} from '../../types/DependencySet';

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

    protected dependencies:DependencySet;

    public getInput():string {
        return this.dependencies.inbound.state;
    }

    public getOutput():string {
        return this.dependencies.outbound.state;
    }
}
