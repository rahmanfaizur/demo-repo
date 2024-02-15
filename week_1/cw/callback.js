
let sum = (a, b, fnToCall) => { //calls a function with three inputs!
    let result = a + b; // uses the first 2 input for calculate
    console.log(3)
    fnToCall(result); //uses the third input to call a function! with the input as the result.
}
console.log()
function displayResult(data) {
    console.log("Result of the sum is: " + data);
    console.log(4)
}
function displayResultPassive(data) {
    console.log("Sum's result is: " + data);
    console.log(5)
}

// only allowed to call one function after this!
// How will you displayResult of a sum!
const ans = sum(1,2, displayResult);  //gives in three inputs, first 2 being numbers for the sum function and third as the function call for the other two!
console.log(1)
const ans1 = sum(2,4,displayResultPassive);
console.log(2)
//console.log's for knowing the order of progression of the code.