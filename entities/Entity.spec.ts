import {Entity, EntityFactory} from './Entity';

describe('Entity', () => {

    it('builds a new frozen entity', () => {

        const factory:EntityFactory = new EntityFactory({
            idProvider: {
                makeId():string {
                    return '123';
                }
            }
        });

        const entity:Entity = factory.make({
            name: 'Hello, world!',
            id: 'abc'
        });

        expect(entity.name).toEqual('Hello, world!');
        expect(entity.id).toEqual('123');
    });
});
