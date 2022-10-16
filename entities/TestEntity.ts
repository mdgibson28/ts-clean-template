import {EntityFactory} from './EntityFactory';
import {Entity} from './Entity';

@EntityFactory<TestEntity>(
    {
        idMaker: {
            makeId: () => {
                return '123';
            }
        }
    },
    (deps:{[key:string]:any}, entity:TestEntity) => {
        entity.id = deps.idMaker.makeId();
        return entity;
    }
)
export class TestEntity extends Entity<TestEntity> {
    public name:string;
    public id:string;
}
