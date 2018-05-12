import NumberType from "../src/types/number";

describe("NumberType tests", ()=> {
    it("'123' validates as correct", ()=>{
        let obj = new NumberType();
        let result = obj.runValidators(123);
        expect(result).toBeTruthy();
    });

    it("'ABC' validates as error", ()=>{
        let obj = new NumberType();
        let result = obj.runValidators('ABC');
        expect(result).toBeFalsy();
    });

    it("minValue(4) & value=5 validates as correct", ()=>{
        let obj = new NumberType();
        obj.minValue(4);
        let result = obj.runValidators(5);
        expect(result).toBeTruthy();
    });

    it("maxValue(4) & value=3 validates as correct", ()=>{
        let obj = new NumberType();
        obj.maxValue(4);
        let result = obj.runValidators(3);
        expect(result).toBeTruthy();
    });

    it("minValue(4) & value=3 validates as error", ()=>{
        let obj = new NumberType();
        obj.minValue(4);
        let result = obj.runValidators(3);
        expect(result).toBeFalsy();
    });

    it("maxValue(4) & value=5 validates as error", ()=>{
        let obj = new NumberType();
        obj.maxValue(4);
        let result = obj.runValidators(5);
        expect(result).toBeFalsy();
    });

    it("minValue(5) & value=5 validates as correct", ()=>{
        let obj = new NumberType();
        obj.minValue(5);
        let result = obj.runValidators(5);
        expect(result).toBeTruthy();
    });

    it("maxValue(4) & value=4 validates as correct", ()=>{
        let obj = new NumberType();
        obj.maxValue(4);
        let result = obj.runValidators(4);
        expect(result).toBeTruthy();
    });

    it("lessThan(4) & value=3 validates as correct", ()=>{
        let obj = new NumberType();
        obj.lessThan(4);
        let result = obj.runValidators(3);
        expect(result).toBeTruthy();
    });

    it("greaterThan(4) & value=5 validates as correct", ()=>{
        let obj = new NumberType();
        obj.greaterThan(4);
        let result = obj.runValidators(5);
        expect(result).toBeTruthy();
    });

    it("lessThan(4) & value=5 validates as error", ()=>{
        let obj = new NumberType();
        obj.lessThan(4);
        let result = obj.runValidators(5);
        expect(result).toBeFalsy();
    });

    it("greaterThan(4) & value=3 validates as error", ()=>{
        let obj = new NumberType();
        obj.greaterThan(4);
        let result = obj.runValidators(3);
        expect(result).toBeFalsy();
    });

    it("lessThan(5) & value=5 validates as error", ()=>{
        let obj = new NumberType();
        obj.lessThan(5);
        let result = obj.runValidators(5);
        expect(result).toBeFalsy();
    });

    it("greaterThan(5) & value=5 validates as error", ()=>{
        let obj = new NumberType();
        obj.greaterThan(5);
        let result = obj.runValidators(5);
        expect(result).toBeFalsy();
    });

    it("multipleOf(3) & value=9 validates as correct",()=>{
        let obj = new NumberType();
        obj.multipleOf(3);
        let result = obj.runValidators(9);
        expect(result).toBeTruthy();
    });

    it("multipleOf(3) & value=11 validates as error",()=>{
        let obj = new NumberType();
        obj.multipleOf(3);
        let result = obj.runValidators(11);
        expect(result).toBeFalsy();
    });

});
