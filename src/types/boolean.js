
import BaseType from "./baseType";
import Validation from "../framework/validation";

export default class BooleanType extends BaseType{
    constructor(validators){
        super('boolean', [
            new Validation({
                message: value => `Expected ${value} to be of type 'boolean'`,
                validator: value => typeof(value) === "boolean"
            })
        ]);
    }

    get true(){
        return this.addValidator(
            new Validation({
                message: value => `Expected ${value} to be true`,
                validator: value => value === true
            })
        );
    }

    get false(){
        return this.addValidator(
            new Validation({
                message: value => `Expected ${value} to be false`,
                validator: value => value === false
            })
        );
    }
}