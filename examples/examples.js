const chalk = require("chalk");
const { V } = require("../lib");
const exampleSchemaJson = require("./example.schema.json");

function OutputResult(fn, input, result){
    let fnO = chalk.cyan(`${fn.padEnd(35)}: `);
    let inputO = `input = ${chalk.cyan(input).padEnd(25)}: `;
    let resultO = result
        ? `result = ${chalk.green(result)}`
        : `result = ${chalk.red(result)}`;
    
    console.log(fnO + inputO + resultO) ;
}

function Example_Object(input){
    let inputValidation = V.object.properties({
        numberProp: V.number,
        stringMinLength2: V.string.minLength(2)
    }).maxProperties(2);

    let result = inputValidation.validate(input);

    OutputResult('Example_Object', input, result);
}

function Example_IsOfTypeNumber(input){
    let inputValidation = V.number;
    
    let result = inputValidation.validate(input);
    
    OutputResult("Example_IsOfTypeNumber", input, result);
}

function Example_IsStringOfMinLength2(input){
    let inputValidation = V.string.minLength(2);
    
    let result = inputValidation.validate(input);

    OutputResult("Example_IsStringOfMinLength2", input, result);
}

function Example_IsNumberConditional(input, location){
    let inputValidation = V.number.lessThan(10)
        .if(x=>x<=2)
        .then.isConstant(2)
        .else.isInteger;

    let result = inputValidation.validate(input);
    OutputResult(`Example_IsNumberConditional (${location})`, input, result);
}

function Example_Schema(input){
    let inputValidation = V.schema(exampleSchemaJson);

    let result = inputValidation.validate(input);

    OutputResult("Example_Schema", input, result);
}


// true
Example_IsOfTypeNumber(123);

// false
Example_IsOfTypeNumber("NotANumber");

// true
Example_IsStringOfMinLength2("test");

// false
Example_IsStringOfMinLength2("t");

// true
Example_IsNumberConditional(5, "pre");

//false
Example_IsNumberConditional(123, "pre");

// true
Example_IsNumberConditional(2, "then");

// false
Example_IsNumberConditional(1, "then");

// true
Example_IsNumberConditional(7, "else");

// false
Example_IsNumberConditional(5.39, "else");

// true
Example_Object({numberProp: 5, stringMinLength2: "testString"});

// false
Example_Object({numberProp: "a", stringMinLength2: "t"});

// true
Example_Object({numberProp: 5, stringMinLength2: "testString", "anExtraProperty":"test"});

// true
Example_Schema({
    "description": "descriptionHere",
    "displayOrder": 4,
    "displayValue": "thisisDisplayValue",
    "fixedValueId": 234,
    "metadataDefinitionId": 3002565,
    "systemValue": "thisisSystemValue"
});

// false
Example_Schema({
    "description": "descriptionHere",
    "displayOrder": 4,
    "displayValue": "thisisDisplayValue",
    "fixedValueId": 234,
    "metadataDefinitionId": 3002565,
    "systemValue": 234
});