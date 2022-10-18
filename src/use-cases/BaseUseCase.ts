import {DependencySet} from '../types/DependencySet';

export class BaseUseCase {
    constructor(protected dependencies?:DependencySet) {}
}
