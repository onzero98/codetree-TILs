const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

let year = 2011;
let date1 = new Date(`${year}-${m1}-${d1}`);
let date2 = new Date(`${year}-${m2}-${d2}`);

const answer = Math.ceil((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)) + 1
console.log(answer)