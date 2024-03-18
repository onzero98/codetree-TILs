const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const A = input[1];
let week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

let year = 2024;
let date1 = new Date(`${year}-${m1}-${d1}`);
let date2 = new Date(`${year}-${m2}-${d2}`);

const diff = Math.ceil((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
const daydiff = week.indexOf(A);

const answer = diff > 0 ? ~~((diff - daydiff) / 7) + 1 : 0;
console.log(answer)