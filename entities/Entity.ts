/**
 * The base entity class. All Entity classes should extend this class.
 * The EntityFactory decorator uses this class to hydrate the entity with data
 */
export class Entity<T> {
    constructor(data?:Partial<T>) {
        Object.assign(this, data);
    }
}
