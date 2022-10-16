import {Entity} from './Entity';
import {EntityFactory} from './EntityFactory';

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

describe('Entity', () => {

    it('builds a new frozen entity', () => {
        const entity:TestEntity = new TestEntity({
            name: 'Hello, world!',
            id: 'abc'
        });

        expect(entity.name).toEqual('Hello, world!');
        expect(entity.id).toEqual('123');
    });
});
