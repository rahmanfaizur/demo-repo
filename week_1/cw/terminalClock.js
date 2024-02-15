let h = 15;
let m = 58;
let s = 0;

let sec = () => {
    if (s<10){
        console.log(`${h}:${m}:0${s}`);
    }
    else{
        console.log(`${h}:${m}:${s}`);
    }
    s++; // Increment i each time the function is called
    if (s > 60) {
        s = 0; // Reset i to 0 after it reaches 60
        m++;
        if (m>60){
            m=0;
            h++;
        }
    }
};

// Call setInterval() outside the loop to execute sec function every second
let intervalId = setInterval(sec, 1000);

// Stop the interval after a certain duration (for example, after 5 minutes)
setTimeout(() => {
    clearInterval(intervalId);
}, 5 * 60 * 1000); // 5 minutes in milliseconds
