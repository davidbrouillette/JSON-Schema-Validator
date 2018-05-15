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

    // minItems
    minItems = (minVal) => {
        return this.addValidator(
            new Validator({
                message: arr => `Expected array to have greater than or equal to ${minVal} elements`,
                validationMethod: arr => arr.length >= minVal
            })
        );
    }

    // maxItems
    maxItems = (maxVal) => {
        return this.addValidator(
            new Validator({
                message: arr => `Expected array to have less than or equal to ${maxVal} elements`,
                validationMethod: arr => arr.length <= maxVal
            })
        );
    }
    
    // uniqueItems
    get uniqueItems() {
        return this.addValidator(
            new Validator({
                message: arr => `Expected array elements to be unique`,
                validationMethod: (arr) => {
                    let testSet = new Set(arr);
                    return testSet.size === arr.length;
                }
            })
        );
    }


    // contains
    contains = (containArr) => {
        return this.addValidator(
            new Validator({
                message: arr => `Expected array to contain ${containArr}`,
                validationMethod: (arr) => {
                    for(let elm of containArr){
                        if(!arr.includes(elm)){
                            return false;
                        }
                    }
                    return true;
                }
            })
        );
    }

}
