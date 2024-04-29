const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

const min = Math.min(a, c);
const max = Math.max(b, d);

console.log(max-min)