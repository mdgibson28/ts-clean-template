import {BaseEntity} from './BaseEntity';
import {Entity} from './Entity';

@Entity<TestEntity>(
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
class TestEntity extends BaseEntity<TestEntity> {
    public name:string;
    public id:string;
}

describe('Entity', () => {

    it('should use dependencies', () => {
        const entity:TestEntity = new TestEntity({
            name: 'Hello, world!',
            id: 'abc'
        });

        expect(entity.name).toEqual('Hello, world!');
        expect(entity.id).toEqual('123');               // set by dependency
    });

    it('should be sealed', () => {
        const entity:TestEntity = new TestEntity({
            name: 'Hello, world!',
            id: 'abc'
        });
        expect(Object.isSealed(entity)).toBe(true);
    });
});
