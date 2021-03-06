import StringType from "../src/types/string";

describe("StringType tests", () => {
    it("'isString' evaluates true", () => {
        let obj = new StringType();
        let result = obj.isString("thisIsAString");
        expect(result).toBeTruthy();
    });

    it("'isString' evaluates false", () => {
        let obj = new StringType();
        let result = obj.isString(/[A-Z]/);
        expect(result).toBeFalsy();
    });

    it("'test' validates as correct", () => {
        let obj = new StringType();
        let result = obj.runValidators("test");
        expect(result).toBeTruthy();
    });

    it("'{one:1,two:2,three:3}' validates as error", () => {
        let obj = new StringType();
        let result = obj.runValidators({ one: 1, two: 2, three: 3 });
        expect(result).toBeFalsy();
    });

    it("minLength(3) & value='test' validates as correct", () => {
        let obj = new StringType();
        obj.minLength(3);
        let result = obj.runValidators("test");
        expect(result).toBeTruthy();
    });

    it("maxLength(6) & value='test' validates as correct", () => {
        let obj = new StringType();
        obj.maxLength(6);
        let result = obj.runValidators("test");
        expect(result).toBeTruthy();
    });

    it("minLength(3) & value='to' validates as error", () => {
        let obj = new StringType();
        obj.minLength(3);
        let result = obj.runValidators("to");
        expect(result).toBeFalsy();
    });

    it("maxLength(6) & value='testing' validates as error", () => {
        let obj = new StringType();
        obj.maxLength(6);
        let result = obj.runValidators("testing");
        expect(result).toBeFalsy();
    });

    it("matchesPattern(/([A-Z])/) & value='Testing' validates as correct", () => {
        let obj = new StringType();
        obj.matchesPattern(/([A-Z])/);
        let result = obj.runValidators("Testing");
        expect(result).toBeTruthy();
    });

    it("matchesPattern('sting') & value='Testing' validates as correct", () => {
        let obj = new StringType();
        obj.matchesPattern("sting");
        let result = obj.runValidators("Testing");
        expect(result).toBeTruthy();
    });

    it("matchesPattern(/([A-Z])/) & value='testing' validates as error", () => {
        let obj = new StringType();
        obj.matchesPattern(/([A-Z])/);
        let result = obj.runValidators("testing");
        expect(result).toBeFalsy();
    });

    it("matchesPattern('sting') & value='tired' validates as error", () => {
        let obj = new StringType();
        obj.matchesPattern("sting");
        let result = obj.runValidators("tired");
        expect(result).toBeFalsy();
    });

    it("pattern(/([A-Z])/) & value='Testing' validates as correct", () => {
        let obj = new StringType();
        obj.pattern(/([A-Z])/);
        let result = obj.runValidators("Testing");
        expect(result).toBeTruthy();
    });
});
