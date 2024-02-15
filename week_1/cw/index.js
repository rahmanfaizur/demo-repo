// const fs = require("fs");
// //filesystem module

// fs.readFile('readme.txt', "utf-8", function(err, data) {
//     console.log(data);
// })

const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
  return new Promise(function(resolve) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

kiratsReadFile().then(onDone);