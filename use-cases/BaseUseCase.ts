export class BaseUseCase {
    protected dependencies:{[key:string]:any};

    constructor(deps?:{[key:string]:any}) {
        this.dependencies = deps;
    }
}
