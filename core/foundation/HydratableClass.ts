export class HydratableClass<T> {
    constructor(data?:Partial<T>) {
        Object.assign(this, data);
    }
}
