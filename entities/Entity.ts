
export class Entity<T> {
    constructor(data?:Partial<T>) {
        Object.assign(this, data);
    }
}
