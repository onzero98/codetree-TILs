const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const n = input[1];

const answer = parseInt(n, a).toString(b);
console.log(answer);