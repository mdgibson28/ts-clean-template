import {Entity} from '../Entity';
import {BaseEntity} from '../BaseEntity';
import {ExampleFactory} from './ExampleFactory';

@Entity(new ExampleFactory())
export class Example extends BaseEntity<Example> {
    public name:string;
    public id:string;
}
