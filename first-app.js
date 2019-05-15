/**
 * Created by mhdiqbalpradipta on 29/04/19.
 */

console.log("Hallo Node");

const fs = require('fs');
fs.writeFileSync('hello.txt',"Hello Boy");

const addOne = (a) => a + 2;

console.log(addOne(10));

const hobbies = ['Sports', 'Cooking'];
hobbies.add("Miyako");