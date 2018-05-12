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
});
