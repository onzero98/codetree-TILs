const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

let year = 2011;
let date1 = new Date(`2011-11-11 11:11`);
let date2 = new Date(`2011-11-${a} ${b}:${c}`);

const answer = Math.ceil((date2.getTime() - date1.getTime()) / (1000 * 60));
console.log(answer)