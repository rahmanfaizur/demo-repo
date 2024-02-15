function calculateTimeTaken() {
    const start = Date.now(); // Capture the current time before setTimeout

    setTimeout(() => {
        const end = Date.now(); // Capture the current time when the inner function runs
        const timeTaken = end - start; // Calculate the duration
        console.log(`Time taken: ${timeTaken}ms`);
    }, 2000); // Set a timeout of 2000ms (2 seconds)
}

calculateTimeTaken(); // Call the function to start the process
