// function myOwnPromiseSet(duration){
//     let p = new Promise(function(resolve){
//         setTimeout(function(){
//             resolve();
//         }, duration);
//     });
//     return p;
// }

// const ans = myOwnPromiseSet(1000);
// ans.then(function(){
//     console.log("PROMISE FULFILLED!!!");
// })
// ans.catch(function(){
//     console.log("ERROR CAUGHT!!!!")
// })
function newPromiseFunction(duration) {
    let pro = new Promise((resolve) => {
        setTimeout(()=>{
            console.log("x sec passed!")
            resolve();
        }, duration)
    });
    return pro;
}
const prom = newPromiseFunction(5000);
prom.then(()=>{newPromiseFunction(2000);
    console.log("Second set!")});