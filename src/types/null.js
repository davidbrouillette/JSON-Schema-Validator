import BaseType from "./baseType";
import Validator from "../framework/Validator";

export default class NullType extends BaseType{
    constructor(validators){
        super('null', [
            new Validator({
                message: value => `Expected ${value} to be of type 'null'`,
                validationMethod: value => value === null
            })
        ]);
    }

}