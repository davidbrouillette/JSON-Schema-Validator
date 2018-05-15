import BaseType from "../src/types/baseType";
import Validator from "../src/framework/validator";

describe("BaseType tests", () => {
    it("can add validator ", () => {
        let obj = new BaseType();
        obj.addValidator(
            new Validator({
                message: (x) => `This is a test validator who was passed value ${x}`,
                validationMethod: (x) => {
                    return x ? true : false;
                }
            })
        );
        let result = obj.runValidators(true);
        let validatorsLength = obj.validators.length;
        expect(validatorsLength).toEqual(1);
    });

    it("Custom Validator can validate as true", () => {
        let obj = new BaseType();
        obj.addValidator(
            new Validator({
                message: (x) => `This is a test validator who was passed value ${x}`,
                validationMethod: (x) => {
                    return x ? true : false;
                }
            })
        );
        let result = obj.runValidators(true);
        let validatorsLength = obj.validators.length;
        expect(result).toBeTruthy();
    });

    it("Custom Validator can validate as false", () => {
        let obj = new BaseType();
        obj.addValidator(
            new Validator({
                message: (x) => `This is a test validator who was passed value ${x}`,
                validationMethod: (x) => {
                    return x ? true : false;
                }
            })
        );
        let result = obj.runValidators(false);
        let validatorsLength = obj.validators.length;
        expect(result).toBeFalsy();
    });

    it("Custom Validator can validate as true using 'validate' method", () => {
        let obj = new BaseType();
        obj.addValidator(
            new Validator({
                message: (x) => `This is a test validator who was passed value ${x}`,
                validationMethod: (x) => {
                    return x ? true : false;
                }
            })
        );
        let result = obj.validate(true);
        let validatorsLength = obj.validators.length;
        expect(result).toBeTruthy();
    });

    it("Values can be validated as correct against an enum array using 'isIn'", ()=>{
        let testEnum = [4,5,6];
        let obj = new BaseType();
        obj.isIn(testEnum);
        let result = obj.runValidators(5);
        expect(result).toBeTruthy();
    });

    it("Values can be validated as error against an enum array using 'isIn'", ()=>{
        let testEnum = [4,5,6];
        let obj = new BaseType();
        obj.isIn(testEnum);
        let result = obj.runValidators(2);
        expect(result).toBeFalsy();
    });

    it("Values can be validated as correct against an enum array using 'enum'", ()=>{
        let testEnum = [4,5,6];
        let obj = new BaseType();
        obj.enum(testEnum);
        let result = obj.runValidators(5);
        expect(result).toBeTruthy();
    });

    it("Values can be validated as correct against a constant using 'isConstant'", ()=>{
        const testConst = 5;
        let obj = new BaseType();
        obj.isConstant(testConst);
        let result = obj.runValidators(5);
        expect(result).toBeTruthy();
    });

    it("Values can be validated as error against a constant using 'isConstant'", ()=>{
        const testConst = 5;
        let obj = new BaseType();
        obj.isConstant(testConst);
        let result = obj.runValidators(3);
        expect(result).toBeFalsy();
    });

    it("Values can be validated as correct against a constant using 'const'", ()=>{
        const testConst = 5;
        let obj = new BaseType();
        obj.const(testConst);
        let result = obj.runValidators(5);
        expect(result).toBeTruthy();
    });

    it("'then' of If statement validates as correct", ()=>{
        let obj = new BaseType();
        obj.if(x=>x!==5).then.isIn([1,2,3,4]).else.isConstant(5);
        let result = obj.runValidators(5);
        expect(result).toBeTruthy();
    });

    it("'then' of If statement validates as error", ()=>{
        let obj = new BaseType();
        obj.if(x=>x!==5).then.isIn([1,2,3,4]).else.isConstant(5);
        let result = obj.runValidators(7);
        expect(result).toBeFalsy();
    });

    it("'else' of If statement validates as correct", ()=>{
        let obj = new BaseType();
        obj.if(x=>x!==5).then.isIn([1,2,3,4]).else.isConstant(5);
        let result = obj.runValidators(5);
        expect(result).toBeTruthy();
    });

    it("'else' of If statement validates as error", ()=>{
        let obj = new BaseType();
        obj.if(x=>x<5).then.isIn([1,2,3,4]).else.isConstant(5);
        let result = obj.runValidators(7);
        expect(result).toBeFalsy();
    });

    it("null 'then' of If statement validates doesn't block validation", ()=>{
        let obj = new BaseType();
        obj.isIn([1,2,3,4]);
        obj.if(x=>x<4).else.isConstant(4);
        let result = obj.runValidators(4);
        expect(result).toBeTruthy();
    });

    it("Empty 'then' of If statement validates doesn't block validation", ()=>{
        let obj = new BaseType();
        obj.isIn([1,2,3,4]);
        obj.if(x=>x<4).then.else.isConstant(4);
        let result = obj.runValidators(4);
        expect(result).toBeTruthy();
    });

    it("Empty 'then' and 'else' of If statement validates doesn't block validation", ()=>{
        let obj = new BaseType();
        obj.isIn([1,2,3,4]);
        obj.if(x=>x<5).then.else;
        let result = obj.runValidators(2);
        expect(result).toBeTruthy();
    });

    it("Null 'then' and 'else' of If statement validates doesn't block validation", ()=>{
        let obj = new BaseType();
        obj.isIn([1,2,3,4]);
        obj.if(x=>x<5);
        let result = obj.runValidators(2);
        expect(result).toBeTruthy();
    });

    it("Null 'if' of If statement validates throws error in 'then'", ()=>{
        let obj = new BaseType();
        obj.isIn([1,2,3,4]);
        expect(()=>{obj.then.isConstant(5)}).toThrowError("'If' must be called before '.else' can be used for validation.");
    });

    it("Null 'if' of If statement validates throws error in 'else'", ()=>{
        let obj = new BaseType();
        obj.isIn([1,2,3,4]);
        expect(()=>{obj.else.isConstant(5)}).toThrowError("'If' must be called before '.else' can be used for validation.");
    });
});
