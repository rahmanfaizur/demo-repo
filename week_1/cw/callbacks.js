function calculateArithmetic(a, b, operation) {
    const ans = operation(a,b);
    return ans;
}
function sum(a,b) {
    return a+b;
}
function minus(a,b){
    return a-b;
}
function product(a,b){
    return a*b;
}

const ask1 = calculateArithmetic(1,2,sum)
const ask2 = calculateArithmetic(1,2,product)
const ask3 = calculateArithmetic(1,2,minus)
console.log(ask1)
console.log(ask2)
console.log(ask3)