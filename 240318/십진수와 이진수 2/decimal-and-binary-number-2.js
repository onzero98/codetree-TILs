const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input[0];

const answer = parseInt(n, 2) * 17;
console.log(answer.toString(2));