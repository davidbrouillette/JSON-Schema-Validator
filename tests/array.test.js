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

    it("'minItems(3)' & '[1,2,3,4]' validates as correct", ()=>{
        let obj = new ArrayType();
        obj.minItems(3);
        let result = obj.runValidators([1,2,3,4]);
        expect(result).toBeTruthy();
    });

    it("'minItems(3)' & '[1,2]' validates as error", ()=>{
        let obj = new ArrayType();
        obj.minItems(3);
        let result = obj.runValidators([1,2]);
        expect(result).toBeFalsy();
    });

    it("'maxItems(5)' & '[1,2,3]' validates as correct", ()=>{
        let obj = new ArrayType();
        obj.maxItems(5);
        let result = obj.runValidators([1,2,3]);
        expect(result).toBeTruthy();
    });

    it("'maxItems(5)' & '[1,2,3,4,5,6]' validates as error", ()=>{
        let obj = new ArrayType();
        obj.maxItems(5);
        let result = obj.runValidators([1,2,3,4,5,6]);
        expect(result).toBeFalsy();
    });

    it("'uniqueItems' validates as correct", ()=>{
        let obj = new ArrayType();
        obj.uniqueItems;
        let result = obj.runValidators([1,2,3,4,5,6]);
        expect(result).toBeTruthy();
    });

    it("'uniqueItems' validates as error", ()=>{
        let obj = new ArrayType();
        obj.uniqueItems;
        let result = obj.runValidators([1,2,3,4,2,3]);
        expect(result).toBeFalsy();
    });

    it("'contains([1,2])' validates as correct", ()=>{
        let obj = new ArrayType();
        obj.contains([1,2]);
        let result = obj.runValidators([1,2,3,4,5,6]);
        expect(result).toBeTruthy();
    });

    it("'contains([1,2])' validates as error", ()=>{
        let obj = new ArrayType();
        obj.contains([1,2]);
        let result = obj.runValidators([3,4,5,6]);
        expect(result).toBeFalsy();
    });
});
