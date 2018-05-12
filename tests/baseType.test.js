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
});
