// read user data

const raedlineSync = require("readline-sync");
const userName = raedlineSync.question("May i know your name ")
const userAge = raedlineSync.question("May i know your age ")
const greet = raedlineSync.question("welcome bro .. ")

console.log(`Hello ${userName} and ${userAge} welcome ${greet} `);

