const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b, c, d] = input[0].split(' ').map(Number);

const answer = (c * 60 + d) - (a * 60 + b);
console.log(answer)