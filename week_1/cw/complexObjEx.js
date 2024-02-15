// let users = {
//     firstName: "Benjamin",
//     age: 23,
//     isMarried: true;
// }
// console.log(users["firstName"]);

//OBJECT EXAMPLES

let users = [{
        firstName: "Benjamin",
        age: 23,
        gender: "male",
        metadata: {
            address: "21 Jump Street",
            city: "NYC"
        }
    }, {
        firstName: "Jeenie",
        age: 21,
        gender: "female"
    },{
        firstName: "Faizur",
        age: 20,
        gender: "male"
}]

for (let i =0; i<users.length; i++){
    if(users[i]["gender"] == "male"){
        console.log(users[i]["firstName"]);
    }
}
console.log(users[0].metadata.address)