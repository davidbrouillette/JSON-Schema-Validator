import {
    ArrayType,
    BaseType,
    BooleanType,
    NullType,
    NumberType,
    ObjectType,
    StringType
} from "../types";

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
    }

}

export default V;
