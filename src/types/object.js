import BaseType from "./baseType";
import Validation from "../framework/validation";

export default class ObjectType extends BaseType{
    constructor(validators){
        super('object', [
            new Validation({
                message: value => `Expected ${value} to be of type 'object'`,
                validator: value => Object.prototype.toString.call(value) === "[object Object]"
            })
        ]);
    }

    // maxProperties

    // minProperties

    // required

    // properties

    // patternProperties

    // additionalProperties

    // dependencies

    // propertyNames

}