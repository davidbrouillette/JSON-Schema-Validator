import NullType from "../src/types/null";

describe("NullType tests", ()=> {
    it("'null' validates as correct", ()=>{
        let obj = new NullType();
        let result = obj.runValidators(null);
        expect(result).toBeTruthy();
    });

    it("'{one:1,two:2,three:3}' validates as error", ()=>{
        let obj = new NullType();
        let result = obj.runValidators({one:1,two:2,three:3});
        expect(result).toBeFalsy();
    });
});
