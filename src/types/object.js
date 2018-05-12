import BaseType from "./baseType";
import Validator from "../framework/Validator";

export default class ObjectType extends BaseType{
    constructor(validators){
        super('object', [
            new Validator({
                message: value => `Expected ${value} to be of type 'object'`,
                validationMethod: value => Object.prototype.toString.call(value) === "[object Object]"
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