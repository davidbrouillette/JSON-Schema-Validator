import BaseType from "./baseType";
import Validator from "../framework/Validator";

export default class ObjectType extends BaseType{
    constructor(validators){
        super('object', [
            new Validator({
                message: value => `Expected ${value} to be of type 'object'`,
                validationMethod: value => Object.prototype.toString.call(value) === "[object Object]"
            })
        ]);
    }

   // minProperties
    minProperties = (minVal) => {
        return this.addValidator(
            new Validator({
                message: obj => `Expected object to have greater than or equal to ${minVal} properties`,
                validationMethod: obj => Object.keys(obj).length >= minVal
            })
        );
    }

    // maxProperties
    maxProperties = (maxVal) => {
        return this.addValidator(
            new Validator({
                message: obj => `Expected object to have less than or equal to ${maxVal} properties`,
                validationMethod: obj => Object.keys(obj).length <= maxVal
            })
        );
    }

    // required
    required = (requiredProps) => {
        return this.addValidator(
            new Validator({
                message: obj => `Expected object to the following properties: ${requiredProps}`,
                validationMethod: (obj) => {
                    for(let prop of requiredProps ){
                        if(!obj.hasOwnProperty(prop)){
                            return false;
                        }
                    }
                    return true;
                }
            })
        );
    }

    // properties
    properties = (props) => {
        return this.addValidator(
            new Validator({
                message: obj => `Expected object to have the correct props: ${Object.keys(props)}`,
                validationMethod: (obj) =>{
                    let isValid = true;
                    let propsToValidate = Object.keys(props);
                    
                    for(let prop of propsToValidate){
                        if(!props[prop].validate(obj[prop])){
                            isValid = false;
                        }
                    }

                    return isValid;
                }
            })
        )
    }

    // patternProperties

    // additionalProperties

    // dependencies

    // propertyNames

}