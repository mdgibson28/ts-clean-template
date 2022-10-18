import {DependencySet} from '../types/DependencySet';

export type EntityFactoryAdapter<T> = (dependencies:DependencySet, entity:T) => T;

export interface EntityFactory<T> {
    dependencies?:DependencySet;
    adapter?:EntityFactoryAdapter<T>;
    preventSeal?:boolean;
}
