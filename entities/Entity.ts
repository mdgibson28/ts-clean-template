

interface IIdProvider {
    makeId():string;
}

export class EntityFactory {
    constructor(private deps:Partial<{idProvider:IIdProvider}>) {

    }

    public make(data:Partial<Entity>):Entity {
        const entityData:Partial<Entity> = {};
        Object.assign(entityData, data);
        entityData.id = this.deps.idProvider.makeId();

        return Object.freeze(new _Entity(entityData));
    }
}

export type Entity = _Entity;

class _Entity {
    constructor(data:Partial<Entity>) {
        Object.assign(this, data);
    }

    public name:string;
    public id:string;
}
