let numberStash = [3,4,555,6,34,2,244,2543,4564,4,5643,54354,88,65,66,443,3677,43,9999999]
let biggestNum = numberStash[0];
for (i=1; i<numberStash.length; i++){
    if(biggestNum<numberStash[i]){
        biggestNum=numberStash[i];
    }
}
console.log(`The Biggest Number in the given array is: ${biggestNum}`);  // THE BASIC VIA FOR AND IF ELSE STATEMENTS ONLY!

// let numss = Math.max(...numberStash);
// console.log(numss);                                                      THIS IS VIA THE MATH FUNCTION!

// let biggestNum = numberStash.reduce((max, current) => max > current ? max : current, numberStash[0]);

// console.log(`The Biggest Number in the given array is: ${biggestNum}`);  ANOTHER WAY TO DO THE SAME!
