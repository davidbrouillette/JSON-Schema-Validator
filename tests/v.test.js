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

    if("V with conditionals validates 'then' as correct", ()=>{
        let obj = V.number.lessThan(10).if(x=>x<1).then.isConstant(0);
        let result = obj.validate(0);
        expect(result).toBeTruthy();
    });

    if("V with conditionals validates 'then' as error", ()=>{
        let obj = V.number.lessThan(10).if(x=>x<1).then.isConstant(0);
        let result = obj.validate(-3);
        expect(result).toBeFalsy();
    });

    if("V with conditionals validates 'else' as correct", ()=>{
        let obj = V.number.lessThan(10).if(x=>x<1).then.isConstant(0).else.isIn([1,2,3,4]);
        let result = obj.validate(4);
        expect(result).toBeTruthy();
    });

    if("V with conditionals validates 'else' as error", ()=>{
        let obj = V.number.lessThan(10).if(x=>x<1).then.isConstant(0).else.isIn([1,2,3,4]);
        let result = obj.validate(7);
        expect(result).toBeFalsy();
    });

    it("V.array & value=['1','2'] validates as correct", ()=>{
        let obj = V.array;
        let result = obj.validate([1,2]);
        expect(result).toBeTruthy();
    });

    it("V.null & value=null validates as correct", ()=>{
        let obj = V.null;
        let result = obj.validate(null);
        expect(result).toBeTruthy();
    });

    it("V.object & value={'a':1,'b':2} validates as correct", ()=>{
        let obj = V.object;
        let result = obj.validate({'a':1,'b':2});
        expect(result).toBeTruthy();
    });

    it("V.string & value='test' validates as correct", ()=>{
        let obj = V.string;
        let result = obj.validate('test');
        expect(result).toBeTruthy();
    });
});
