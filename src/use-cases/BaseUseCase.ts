import {DependencySet} from '../types/DependencySet';

export class BaseUseCase {
    protected dependencies:DependencySet;

    constructor(deps?:DependencySet) {
        this.dependencies = deps;
    }
}
