import ArrayType from "../src/types/array";

describe("ArrayType tests", ()=> {
    it("'[1,2,3]' validates as correct", ()=>{
        let obj = new ArrayType();
        let result = obj.runValidators([1,2,3]);
        expect(result).toBeTruthy();
    });

    it("'test' validates as error", ()=>{
        let obj = new ArrayType();
        let result = obj.runValidators('test');
        expect(result).toBeFalsy();
    });
});
