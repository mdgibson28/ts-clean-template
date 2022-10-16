interface IConstructor {
    new(...args: any[]);
}

/**
 * Decorator for all entity classes. Sets up dependencies, hydrates data, and makes object immutable
 * @param dependencies
 * @param mapper
 * @constructor
 */
export function EntityFactory<T>(dependencies:{[key:string]:any}, mapper:(dependencies:{[key:string]:any}, entity:T) => T) {
    return function factory<T extends IConstructor>(entityConstructor:T) {
        return class extends entityConstructor {
            constructor(...args:any[]) {
                const me:any = super(...args);
                mapper(dependencies, me);
                Object.freeze(me);
            }
        };
    }
}
