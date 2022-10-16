interface IConstructor {
    new(...args: any[]);
}

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
