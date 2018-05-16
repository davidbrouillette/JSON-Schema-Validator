const chalk = require("chalk");
const { V } = require("../lib");

function OutputResult(fn, input, result){
    let fnO = chalk.cyan(`${fn.padEnd(35)}: `);
    let inputO = `input = ${chalk.cyan(input).padEnd(25)}: `;
    let resultO = result
        ? `result = ${chalk.green(result)}`
        : `result = ${chalk.red(result)}`;
    
    console.log(fnO + inputO + resultO) ;
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