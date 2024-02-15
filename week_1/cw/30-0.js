let i = 30;
let count = () => {
    if (i>=0){
        console.log(i);
        i--;
    }
}
setInterval(count, 1000);