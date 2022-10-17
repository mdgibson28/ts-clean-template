export type IEntityFactoryAdapter<T> = (dependencies:{[key:string]:any}, entity:T) => T;
export type IEntityDependency = {[key:string]:any};

export interface IEntityFactory<T> {
    dependencies?:IEntityDependency;
    adapter?:IEntityFactoryAdapter<T>;
    preventSeal?:boolean;
}
