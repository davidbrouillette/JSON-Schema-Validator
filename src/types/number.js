import BaseType from "./baseType";
import Validator from "../framework/Validator";

export default class NumberType extends BaseType{
    constructor(validators){
        super('number', [
            new Validator({
                message: value => `Expected ${value} to be of type 'number'`,
                validationMethod: value => typeof(value) === "number"
            })
        ]);
    }

    get isInteger() {
        return this.addValidator(
            new Validator({
                message: value => `Expected ${value} to be an integer`,
                validationMethod: value => Number.isInteger(value)
            })
        );
    }

    minValue = (minVal) => {
        return this.addValidator(
            new Validator({
                message: value => `Expected ${value} to be greater than or equal to ${minVal}`,
                validationMethod: value => value >= minVal
            })
        );
    }

    minimum = (minVal) => {
        return this.minValue(minVal);
    }    

    maxValue = (maxVal) => {
        return this.addValidator(
            new Validator({
                message: value => `Expected ${value} to be less than or equal to ${maxVal}`,
                validationMethod: value => value <= maxVal
            })
        );
    }
    
    maximum = (maxVal) => {
        return this.maxValue(maxVal);
    }

    greaterThan = (boundary) => {
        return this.addValidator(
            new Validator({
                message: value => `Expected ${value} to be greater than to ${boundary}`,
                validationMethod: value => value > boundary
            })
        );
    }
    
    exclusiveMinimum = (boundary) => {
        return this.greaterThan(boundary);
    }

    lessThan = (boundary) => {
        return this.addValidator(
            new Validator({
                message: value => `Expected ${value} to be less than to ${boundary}`,
                validationMethod: value => value < boundary
            })
        );
    }

    exclusiveMaximum = (boundary) => {
        return this.lessThan(boundary);
    }

    multipleOf = (base) => {
        return this.addValidator(
            new Validator({
                message: value => `Expected ${value} to be a multiple of ${base}`,
                validationMethod: value => value % base === 0
            })
        )
    }
}