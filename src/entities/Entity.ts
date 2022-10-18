/**
 * Entities are objects that represent and hold all logic required for the purpose of your application
 * They define what your application does.
 * For example, if you had an entity class named "Comment" and you needed to add a comment to a database, the
 * Comment class would provide an interface for storing itself. The infrastructure of the application would then,
 * pass a concrete implementation of that interface to the Comment's factory at runtime. This would be configured here
 * in this file. This way, the concrete implementation can change and the entity never needs to.
 */

/*
import {TestEntityDependencies} from './myEntityDependencies';
import {TestEntityAdapter} from './myEntityAdapter';

@Entity<TestEntity>({TestEntityDependencies, TestEntityAdapter})
class TestEntity extends BaseEntity<TestEntity> {
    public name:string;
    public id:string;
}
 */

import {Constructor} from '../types/Constructor';
import {EntityFactory} from './EntityFactory';

/**
 * Decorator for all entity classes. Sets up dependencies, hydrates data, and makes object sealed
 * @param factory
 * @constructor
 */
export function Entity<T>(factory?:EntityFactory<T>) {
    return function entityFactory<T extends Constructor>(entityConstructor:T) {
        return class extends entityConstructor {
            constructor(...args:any[]) {
                const me:any = super(...args);

                if(factory && factory.adapter) {
                    factory.adapter(factory.dependencies || {}, me);
                }

                Object.seal(me);
            }
        };
    }
}
