import {IEntityDependency, IEntityFactory, IEntityFactoryAdapter} from '../IEntityFactory';
import {Example} from './Example';

export class ExampleFactory implements IEntityFactory<Example> {
    dependencies:IEntityDependency = {
        idMaker: {
            makeId: () => {
                return '123';
            }
        }
    };
    adapter:IEntityFactoryAdapter<Example> = (deps:{[key:string]:any}, entity:Example) => {
        entity.id = deps.idMaker.makeId();
        return entity;
    };
}
