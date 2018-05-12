import BaseType from "./baseType";
import Validation from "../framework/validation";

export default class ArrayType extends BaseType{
    constructor(validators){
        super('array', [
            new Validation({
                message: value => `Expected ${value} to be of type 'array'`,
                validator: value => Array.isArray(value)
            })
        ]);
    }


    // items

    // additionalItems

    // maxItems

    // minItems

    // uniqueItems

    // contains

}