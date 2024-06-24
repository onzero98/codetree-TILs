const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);

let temp = input[1].split('1').map(x=>x.length)
delete temp[0];
delete temp[temp.length-1];
const arr = temp.slice().filter(x => x !== null)

const max = Math.max(...arr);
const min = Math.min(...arr) + 1;

const value = Math.ceil(max/2);
const answer = Math.min(min, value);
console.log(answer);