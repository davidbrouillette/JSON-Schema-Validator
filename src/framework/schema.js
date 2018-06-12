import V from "./v";

export default class Schema{
    constructor(jsonSchema){
        this.id = null;
        this.title = null;
        this.description = null;
        
        this.validationObject = this.createValidationObject(jsonSchema);
    }


    createValidationObject = (jsonSchema) => {
        let valObj = null
        this.id = jsonSchema.id ? jsonSchema.id : "";
        this.title = jsonSchema.title ? jsonSchema.title : "";
        this.description = jsonSchema.description ? jsonSchema.description : "";
        
        if(jsonSchema.type === "object" && jsonSchema.properties){
            let valProps = {};
        
            for(let prop in jsonSchema.properties){
                valProps[prop] = jsonSchema.required && jsonSchema.required[prop]
                    ? V[jsonSchema.properties[prop].type].required
                    : V[jsonSchema.properties[prop].type];
            }

            valObj = V.object.properties(valProps);
            
        } else {
            valObj = V[jsonSchema.type];
        }
        
        return valObj;
    }

    validate(values){
        console.log(JSON.stringify(this.validationObject));
        return this.validationObject.validate(values);
    }



}