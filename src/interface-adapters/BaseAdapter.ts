import {DependencySet} from '../types/DependencySet';

export interface AdapterDependencySet extends DependencySet {
    inbound?:DependencySet;
    outbound?:DependencySet;
}

export class BaseAdapter {
    constructor(protected dependencies?:AdapterDependencySet) {}
}
