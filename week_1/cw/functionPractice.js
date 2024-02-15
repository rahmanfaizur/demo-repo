//area of a rectangle!
let area = (l,b) => {
    return l*b;
}
areaRect = area(3,4);
console.log(areaRect);

//
let funName = "NoodleSan";
let revName = "";
let rev = (funName) => {
    for (i=funName.length-1; i>=0; i--){
        revName += funName[i];
    }
    return revName;
}
console.log(rev(funName));

