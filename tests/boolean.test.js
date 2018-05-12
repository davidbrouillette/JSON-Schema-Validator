import BooleanType from "../src/types/boolean";

describe("BooleanType tests", ()=> {
    it("true is true validates as correct", ()=>{
        let obj = new BooleanType();
        obj.true;
        let result = obj.runValidators(true);
        expect(result).toBeTruthy();
    });

    it("false is false validates as correct", ()=>{
        let obj = new BooleanType();
        obj.false;
        let result = obj.runValidators(false);
        expect(result).toBeTruthy();
    });

    it("0 is false validates as error", ()=>{
        let obj = new BooleanType();
        obj.false;
        let result = obj.runValidators(0);
        expect(result).toBeFalsy();
    });

    it("1 is true validates as error", ()=>{
        let obj = new BooleanType();
        obj.true;
        let result = obj.runValidators(1);
        expect(result).toBeFalsy();
    });

    it("String validates as error", ()=>{
        let obj = new BooleanType();
        obj.true;
        let result = obj.runValidators("test");
        expect(result).toBeFalsy();
    });

    it("Empty Array validates as error", ()=>{
        let obj = new BooleanType();
        obj.true;
        let result = obj.runValidators([]);
        expect(result).toBeFalsy();
    });

    it("Empty Object validates as error", ()=>{
        let obj = new BooleanType();
        obj.true;
        let result = obj.runValidators({});
        expect(result).toBeFalsy();
    });

    it("Array validates as error", ()=>{
        let obj = new BooleanType();
        obj.true;
        let result = obj.runValidators([1,2,3]);
        expect(result).toBeFalsy();
    });

    it("Object validates as error", ()=>{
        let obj = new BooleanType();
        obj.true;
        let result = obj.runValidators({a:1,b:2,c:3});
        expect(result).toBeFalsy();
    });

    it("Empty string validates as error", ()=>{
        let obj = new BooleanType();
        obj.false;
        let result = obj.runValidators("");
        expect(result).toBeFalsy();
    });

    it("-0 is true validates as error", ()=>{
        let obj = new BooleanType();
        obj.true;
        let result = obj.runValidators(-0);
        expect(result).toBeFalsy();
    });

    it("null is false validates as error", ()=>{
        let obj = new BooleanType();
        obj.false;
        let result = obj.runValidators(null);
        expect(result).toBeFalsy();
    });

    it("NaN is false validates as error", ()=>{
        let obj = new BooleanType();
        obj.false;
        let result = obj.runValidators(NaN);
        expect(result).toBeFalsy();
    });

    it("undefined is false validates as error", ()=>{
        let obj = new BooleanType();
        obj.false;
        let result = obj.runValidators(undefined);
        expect(result).toBeFalsy();
    });
});
