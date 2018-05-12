import BaseType from "./baseType";
import Validator from "../framework/Validator";

export default class ArrayType extends BaseType {
    constructor(validators) {
        super("array", [
            new Validator({
                message: (value) => `Expected ${value} to be of type 'array'`,
                validationMethod: (value) => Array.isArray(value)
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
