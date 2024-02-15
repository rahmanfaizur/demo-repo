new function frFunc() {
    let frPromise = new Promise((resolve) => {
        resolve("hello there")
    })
    return frPromise;
}
async function main() {
    let valueOf = await frFunc();
    console.log(valueOf); // "hello there"
}
main();