// function strln(a){
//     return a.length;
// }
// console.log(strln("hello world"))

// function findIndexOf(str, target){
//     console.log("Original:", str)
//     console.log("Index:", str.indexOf(target));
// }
// findIndexOf("faizur rahman", "rahman");

// function getSlicej(str, start, end){
//   console.log(`Orignal String: ${str}`);
//   console.log(`After Slice: ${str.slice(start, end)}`);
// }
// getSlicej("Hello World", 0, 5);

// const first = [1,2,3];
// const second = [4,5,6];
// const final = first.concat(second);
// console.log(final);
//  function logThing(str){
//   console.log(str);
//  }
//  final.forEach(logThing);
// class animal {
//     constructor(aniName, legs, sound){
//         this.aniName = aniName;
//         this.legs = legs;
//         this.sound = sound;
//     }
// }
// function speak() {
//     console.log("Hi there, " + this.speak);
// }
// let dog = new animal("diggie", 4, "bhow bhow");
// let monkey = new animal("monkeyu", 2, "chi chi");
// console.log(dog);
// console.log(monkey);
// dog.speak();
// monkey.speak();

let currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getDay());
console.log(currentDate.getUTCHours());