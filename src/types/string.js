import BaseType from "./baseType";
import Validation from "../framework/validation";

export default class StringType extends BaseType{
    constructor(validators){
        super('string', [
            new Validation({
                message: value => `Expected ${value} to be of type 'string'`,
                validator: value => typeof(value) === "string"
            })
        ]);
    }


    minLength = (min) => {
        return this.addValidator(
            new Validation({
                message: value => `Expected the length of ${value} to be greater than or equal to ${min}`,
                validator: value => value.length >= min
            })
        );
    }

    maxLength = (max) => {
        return this.addValidator(
            new Validation({
                message: value => `Expected the length of ${value} to be less than or equal to ${max}`,
                validator: value => value.length <= max
            })
        );
    }

    matchesPattern = (pattern) => {
        return this.addValidator(
            new Validation({
                message: value => `Expected ${value} to match the regular expression pattern ${pattern}`,
                validator: (value) => { let re = new RegExp(pattern); return re.test(value); }
            })
        );
    }

}