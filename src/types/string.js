import BaseType from "./baseType";
import Validator from "../framework/Validator";

export default class StringType extends BaseType{
    constructor(validators){
        super('string', [
            new Validator({
                message: value => `Expected ${value} to be of type 'string'`,
                validationMethod: value => typeof(value) === "string"
            })
        ]);
    }


    minLength = (min) => {
        return this.addValidator(
            new Validator({
                message: value => `Expected the length of ${value} to be greater than or equal to ${min}`,
                validationMethod: value => value.length >= min
            })
        );
    }

    maxLength = (max) => {
        return this.addValidator(
            new Validator({
                message: value => `Expected the length of ${value} to be less than or equal to ${max}`,
                validationMethod: value => value.length <= max
            })
        );
    }

    matchesPattern = (pattern) => {
        let testMethod = this.isRegEx(pattern)
            ? x=>pattern.test(x)
            : x=>x.includes(pattern);

        return this.addValidator(
            new Validator({
                message: value => `Expected ${value} to match the regular expression pattern ${pattern}`,
                validationMethod: value => testMethod(value)
            })
        );
    }

    pattern = (pattern) => {
        return this.matchesPattern(pattern);
    }


    isRegEx = (value) => {
        return Object.prototype.toString.call(value) === '[object RegExp]';
    }

    isString = (value) => {
        return typeof(value) === 'string';
    }


    // format = (format) =>{
    //     return this.withFormat(format);
    // }

    /**
     * 'date-time'
     * 'email'
     * 'hostname'
     * 'ipv4'
     * 'ipv6'
     * 'uri'
     */
    // withFormat = (format) => {
    //     return this.addValidator({
    //         message: value => `Expected ${value} to be in ${format} format.`,
    //         validationMethod: value => true
    //     });
    // }

}