import BooleanType from "../types/boolean";
import NumberType from "../types/number";

const V = {
    get boolean () {
        return new BooleanType();
    },
    get number (){
        return new NumberType();
    }

}

export default V;
