class CustomPromise {
    constructor(executor) {
      // Initialize promise state, value, and callbacks array
      this.state = 'pending';
      this.value = undefined;
      this.callbacks = [];
      // Define the resolve function to transition to the fulfilled state
      const resolve = (value) => {
        // Check if the promise is still pending
        if (this.state === 'pending') {
          // Set the state to fulfilled
          this.state = 'fulfilled';
          // Store the resolved value
          this.value = value;
          // Execute all stored callbacks for fulfillment
          this.callbacks.forEach((callback) => callback.onFulfilled(value));
        }
      };
  
      // Define the reject function to transition to the rejected state
      const reject = (reason) => {
        // Check if the promise is still pending
        if (this.state === 'pending') {
          // Set the state to rejected
          this.state = 'rejected';
          // Store the rejection reason
          this.value = reason;
          // Execute all stored callbacks for rejection
          this.callbacks.forEach((callback) => callback.onRejected(reason));
        }
      };
  
      try {
        // Execute the executor function with the resolve and reject functions as arguments
        executor(resolve, reject);
      } catch (error) {
        // If an error occurs during execution, reject the promise
        reject(error);
      }
    }
  
    // Define the then method for handling fulfillment and rejection
    then(onFulfilled, onRejected) {
      // Return a new CustomPromise
      return new CustomPromise((resolve, reject) => {
        // Define a function to handle the execution of a callback
        const handleCallback = (callback, value, next) => {
          try {
            // Execute the callback and handle the result
            const result = callback(value);
            if (result instanceof CustomPromise) {
              // If the result is a CustomPromise, chain it
              result.then(resolve, reject);
            } else {
              // Otherwise, resolve with the result
              resolve(result);
            }
          } catch (error) {
            // If an error occurs during callback execution, reject the promise
            reject(error);
          }
        };
  
        // Check the current state of the promise
        if (this.state === 'fulfilled') {
          // If fulfilled, execute the onFulfilled callback immediately
          handleCallback(onFulfilled, this.value, resolve);
        } else if (this.state === 'rejected') {
          // If rejected, execute the onRejected callback immediately
          handleCallback(onRejected, this.value, reject);
        } else {
          // If pending, store the callbacks for later execution
          this.callbacks.push({
            onFulfilled: (value) => handleCallback(onFulfilled, value, resolve),
            onRejected: (reason) => handleCallback(onRejected, reason, reject),
          });
        }
      });
    }
  
    // Define the catch method as a shorthand for handling only rejection
    catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  }
  
  // Example usage:
  const customnewPromise = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, Custom Promise!");
      // Uncomment the line below to simulate rejection
      // reject("Something went wrong!");
    }, 1000);
  });
  
  customnewPromise
    .then((result) => {
      console.log(result);
      return "Another result";
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });

    
//PROMISE CALLED NOW!!!!!!!!!!!!!!

/// Example usage:
// const customPromise = new CustomPromise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello, Custom Promise!");
//       // Uncomment the line below to simulate rejection
//       // reject("Something went wrong!");
//     }, 1000);
//   });
  
//   customPromise
//     .then((result) => {
//       console.log(result);
//       return "Another result";
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error);
//     })
//     .then(() => {
//       // Additional then block at the end
//       console.log("Promise completed successfully or handled errors.");
//     });