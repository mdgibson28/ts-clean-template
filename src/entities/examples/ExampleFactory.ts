import {EntityFactory, EntityFactoryAdapter} from '../EntityFactory';
import {Example} from './Example';
import {DependencySet} from '../../types/DependencySet';

export class ExampleFactory implements EntityFactory<Example> {
    dependencies:DependencySet = {
        idMaker: {
            makeId: () => {
                return '123';
            }
        }
    };
    adapter:EntityFactoryAdapter<Example> = (deps:{[key:string]:any}, entity:Example) => {
        entity.id = deps.idMaker.makeId();
        return entity;
    };
}
