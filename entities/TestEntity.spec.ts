import {TestEntity} from './TestEntity';

describe('Entity', () => {

    it('builds a new frozen entity', () => {

        // const factory:TestEntityFactory = new TestEntityFactory({
        //     idProvider: {
        //         makeId():string {
        //             return '123';
        //         }
        //     }
        // });
        //
        // const entity:TestEntity = factory.make({
        //     name: 'Hello, world!',
        //     id: 'abc'
        // });

        const entity:TestEntity = new TestEntity({
            name: 'Hello, world!',
            id: 'abc'
        });

        expect(entity.name).toEqual('Hello, world!');
        expect(entity.id).toEqual('123');
    });
});
