function faizursAsyncFunction(){
    let prom =  new Promise(function(resolve){
        setTimeout(()=>{
            console.log("Inside the promise!")
        }, 3000)
        resolve("hello there!")
    });
    return prom;
}
async function main(){
    const value = await faizursAsyncFunction();
    console.log(value);
}
main();
let i =0;
for (i =0; i<20; i++){
    console.log(`here we go! ${i}`);
}
