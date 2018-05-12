import BaseType from "./baseType";
import Validation from "../framework/validation";

export default class NumberType extends BaseType{
    constructor(validators){
        super('number', [
            new Validation({
                message: value => `Expected ${value} to be of type 'number'`,
                validator: value => typeof(value) === "number"
            })
        ]);
    }

    minValue = (minVal) => {
        return this.addValidator(
            new Validation({
                message: value => `Expected ${value} to be greater than or equal to ${minVal}`,
                validator: value => value >= minVal
            })
        );
    }

    maxValue = (maxVal) => {
        return this.addValidator(
            new Validation({
                message: value => `Expected ${value} to be less than or equal to ${maxVal}`,
                validator: value => value <= maxVal
            })
        );
    }

    greaterThan = (boundary) => {
        return this.addValidator(
            new Validation({
                message: value => `Expected ${value} to be greater than to ${boundary}`,
                validator: value => value > boundary
            })
        );
    }

    lessThan = (boundary) => {
        return this.addValidator(
            new Validation({
                message: value => `Expected ${value} to be less than to ${boundary}`,
                validator: value => value < boundary
            })
        );
    }

    multipleOf = (base) => {
        return this.addValidator(
            new Validation({
                message: value => `Expected ${value} to be a multiple of ${base}`,
                validator: value => value % base === 0
            })
        )
    }
}