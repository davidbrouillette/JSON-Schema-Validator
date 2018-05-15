import Validator from "../framework/validator";
import IfConditionalSchema from "../framework/ifConditionalSchema";

export default class BaseType {
    constructor(type = "any", validators = []) {
        this.id = Symbol("id");
        this.validators = [...validators];
        this.type = type;
        this.errors = [];
        this.currentcondition = null;
        this.conditional = null;
    }

    validate = (value) => {
        return this.runValidators(value);
    };

    runValidators = (value) => {
        let isValid = true;
        this.errors = [];
        this.validators.forEach((v, index, arr) => {
            let result = v.validationMethod(value);

            if (!result) {
                isValid = false;
                this.errors.push(v.message(value));
            }
        });
        
        if(this.conditional && this.conditional.if){
            let validatorsToRun = (this.conditional.evaluate(value) && this.conditional.then)
                ? this.conditional.then
                : this.conditional.else 
                    ? this.conditional.else 
                    : [];
            
            validatorsToRun.forEach((v, index, arr) => {
                let result = v.validationMethod(value);

                if (!result) {
                    isValid = false;
                    this.errors.push(v.message(value));
                }
            }) ;
        }

        return isValid;
    };

    addValidator = (validator) => {
        if(this.conditional && this.conditional.currentCondition){
            this.conditional.addConditionalValidator(validator);
        } else {
            this.validators.push(validator);
        }
        return this;
    };

    // enum
    isIn = (enumValues) => {
        return this.addValidator(
            new Validator({
                message: value => `Expected ${value} to be one of the following: ${enumValues}`,
                validationMethod: value => enumValues.includes(value)
            })
        );
    }

    enum = (enumValues) => {
        return this.isIn(enumValues);
    }

    // const
    isConstant = (constVal) => {
        return this.addValidator(
            new Validator({
                message: value => `Expected ${value} to be ${constVal}`,
                validationMethod: value => value === constVal
            })
        );
    }

    const = (constVal) => {
        return this.isConstant(constVal);
    }

    if = (condition) => {
        this.conditional = new IfConditionalSchema(condition);
        return this
    }

    get then (){
        if(this.conditional){
            this.conditional.currentCondition = "then";
            this.conditional.then = [];
        } else {
            throw new Error("'If' must be called before '.else' can be used for validation.");
        }
        return this;
    }

    get else (){
        if(this.conditional){
            this.conditional.currentCondition = "else";
            this.conditional.else = [];
        } else {
            throw new Error("'If' must be called before '.else' can be used for validation.");
        }
        return this;
    }
}
