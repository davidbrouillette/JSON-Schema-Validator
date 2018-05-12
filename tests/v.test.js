import V from "../src/framework/v";

describe("V tests", ()=> {
    it("V.boolean.true validates as correct", ()=>{
        let obj = V.boolean.true;
        let result = obj.validate(true);
        expect(result).toBeTruthy();
    });

    it("V.boolean.false validates as correct", ()=>{
        let obj = V.boolean.false;
        let result = obj.validate(false);
        expect(result).toBeTruthy();
    });

    it("V.boolean.true validates as error", ()=>{
        let obj = V.boolean.true;
        let result = obj.validate(false);
        expect(result).toBeFalsy();
    });

    it("V.boolean.false validates as error", ()=>{
        let obj = V.boolean.false;
        let result = obj.validate(true);
        expect(result).toBeFalsy();
    });

    it("V.number & value='123' validates as correct", ()=>{
        let obj = V.number;
        let result = obj.validate(123);
        expect(result).toBeTruthy();
    });

    it("V.number & value='ABC' validates as error", ()=>{
        let obj = V.number;
        let result = obj.validate('ABC');
        expect(result).toBeFalsy();
    });

    it("V.number.minValue(4) & value=3 validates as error", ()=>{
        let obj = V.number.minValue(4);
        let result = obj.validate(3);
        expect(result).toBeFalsy();
    });

    it("V.number.maxValue(4) & value=3 validates as correct", ()=>{
        let obj = V.number.maxValue(4);
        let result = obj.validate(3);
        expect(result).toBeTruthy();
    });

    it("V.number.minValue(4) & value=5 validates as correct", ()=>{
        let obj = V.number.minValue(4);
        let result = obj.validate(5);
        expect(result).toBeTruthy();
    });

    it("V.number.maxValue(4) & value=5 validates as error", ()=>{
        let obj = V.number.maxValue(4);
        let result = obj.validate(5);
        expect(result).toBeFalsy();
    });

    it("V.number.greaterThan(4) & value=5 validates as correct", ()=>{
        let obj = V.number.greaterThan(4);
        let result = obj.validate(5);
        expect(result).toBeTruthy();
    });

    it("V.number.lessThan(4) & value=3 validates as error", ()=>{
        let obj = V.number.lessThan(4);
        let result = obj.validate(3);
        expect(result).toBeTruthy();
    });

});
