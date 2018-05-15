import ObjectType from "../src/types/object";

describe("ObjectType tests", ()=> {
    it("'{one:1,two:2,three:3}' validates as correct", ()=>{
        let obj = new ObjectType();
        let result = obj.runValidators({one:1,two:2,three:3});
        expect(result).toBeTruthy();
    });

    it("'test' validates as error", ()=>{
        let obj = new ObjectType();
        let result = obj.runValidators('test');
        expect(result).toBeFalsy();
    });

    it("minProperties validates as correct", ()=>{
        let obj = new ObjectType();
        obj.minProperties(3);
        let result = obj.runValidators({"a":1,"b":2,"c":3,"d":4});
        expect(result).toBeTruthy();
    });

    it("minProperties validates as error", ()=>{
        let obj = new ObjectType();
        obj.minProperties(3);
        let result = obj.runValidators({"a":1,"b":2});
        expect(result).toBeFalsy();
    });
    
    
    it("maxProperties validates as correct", ()=>{
        let obj = new ObjectType();
        obj.maxProperties(3);
        let result = obj.runValidators({"a":1,"b":2});
        expect(result).toBeTruthy();
    });

    it("maxProperties validates as error", ()=>{
        let obj = new ObjectType();
        obj.maxProperties(3);
        let result = obj.runValidators({"a":1,"b":2,"c":3,"d":4});
        expect(result).toBeFalsy();
    });

    it("required validates as correct", ()=>{
        let obj = new ObjectType();
        obj.required(["a","b"]);
        let result = obj.runValidators({"a":1,"b":2,"c":3});
        expect(result).toBeTruthy();
    });

    it("required validates as error", ()=>{
        let obj = new ObjectType();
        obj.required(["a","b"]);
        let result = obj.runValidators({"a":1,"c":3,"d":4});
        expect(result).toBeFalsy();
    });
});
