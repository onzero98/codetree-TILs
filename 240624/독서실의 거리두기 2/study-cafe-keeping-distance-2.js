const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);

let arr = input[1].split('1').filter(x=>x.length > 0).map(x=>x.length);

const max = Math.max(...arr);
const min = Math.min(...arr);

const value = Math.ceil(max/2);
const answer = Math.max(min, value);
console.log(answer);