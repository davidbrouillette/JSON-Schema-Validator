import {
    ArrayType,
    BaseType,
    BooleanType,
    NullType,
    NumberType,
    ObjectType,
    StringType
} from "../types";

import Schema from "./schema";

const V = {
    get array (){
        return new ArrayType();
    },
    get boolean () {
        return new BooleanType();
    },
    get number (){
        return new NumberType();
    },
    get null (){
        return new NullType();
    },
    get object (){
        return new ObjectType();
    },
    get string (){
        return new StringType();
    },
    schema: (jsonSchema) => {
        return new Schema(jsonSchema);
    }

}

export default V;
