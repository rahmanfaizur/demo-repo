let user = 1;
let promiseFaizur = new Promise((resolve,reject) => {
    setTimeout(()=>{
        if (user===0){
            console.log("Promise executed!")
            resolve()
        }
        else if (user === 1){
            reject("SOMETHING WENT WRONG!!!")
        }
    },3000);
})
promiseFaizur.then(()=>{
    console.log("the request was sucessful");
})
promiseFaizur.catch((err)=>{
    console.log("there was an error with the request", err);
})

// process.on('unhandledRejection', (error) => {
//     console.error('Unhandled Rejection:', error.message);
// });
// Handle unhandled promise rejections globally
process.on('un',(error)=>{
    console.log(error.message);
});