
export default class TypeBase{
    constructor(type='any', validators=[]){
        this.id = Symbol('id');
        this.validators = [...validators];
        this.type = type;
        this.errors = [];
    }

    validate = (value) => {
        return this.runValidators(value);
    }

    runValidators = (value) => {
        let isValid = true;
        this.errors = []
        this.validators.forEach((v,index,arr)=>{
            let result = v.validator(value);
            
            if(!result){
                isValid = false;
                this.errors.push(v.message(value));
            }
        });

        return isValid;
    }

    addValidator = (validator) => {
        this.validators.push(validator);
        return this;
    }

    // enum

    // const
}