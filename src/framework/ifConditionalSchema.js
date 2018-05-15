
export default class IfConditionalSchema {
    constructor(condition){
        this.if = condition;
        this.then = null;
        this.else = null;
        this.currentCondition = null;
    }

    evaluate = (value) => {
        return this.if(value);
    }

    addConditionalValidator = (validator) => {
        this[this.currentCondition].push(validator);
    }
}