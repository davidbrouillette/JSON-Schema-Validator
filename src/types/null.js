import BaseType from "./baseType";
import Validation from "../framework/validation";

export default class NullType extends BaseType{
    constructor(validators){
        super('null', [
            new Validation({
                message: value => `Expected ${value} to be of type 'null'`,
                validator: value => value === null
            })
        ]);
    }

}