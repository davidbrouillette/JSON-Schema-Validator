
import BaseType from "./baseType";
import Validator from "../framework/Validator";

export default class BooleanType extends BaseType{
    constructor(validators){
        super('boolean', [
            new Validator({
                message: value => `Expected ${value} to be of type 'boolean'`,
                validationMethod: value => typeof(value) === "boolean"
            })
        ]);
    }

    get true(){
        return this.addValidator(
            new Validator({
                message: value => `Expected ${value} to be true`,
                validationMethod: value => value === true
            })
        );
    }

    get false(){
        return this.addValidator(
            new Validator({
                message: value => `Expected ${value} to be false`,
                validationMethod: value => value === false
            })
        );
    }
}