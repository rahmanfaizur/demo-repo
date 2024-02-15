let lotNumbers = [2,3,4,5,6,9,8,7,77,55,54,56,34,51,52,10,18,90,1089,1224,1670,3350]
let evenNos = 0;
for (i=0; i<lotNumbers.length; i++){
    if (lotNumbers[i]%2==0){
        console.log(lotNumbers[i]);
        evenNos++;
    }
}
console.log(`There were ${evenNos} Even Numbers in the given array!`)