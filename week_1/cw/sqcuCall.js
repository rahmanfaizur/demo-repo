function square(a) {
    return a*a;
}
function cube(a) {
    return a*a*a;
}

function funcSum(a,b, fn){
    let val1 = fn(a);
    let val2 = fn(b);
    return val1 + val2;
}
console.log(funcSum(2,3,cube));