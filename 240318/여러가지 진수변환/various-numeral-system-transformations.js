const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, B] = input[0].split(' ').map(Number);

const answer = N.toString(B);

console.log(answer);