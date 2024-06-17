const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [a, b, x, y] = input.split(' ').map(Number);

let min = Number.MAX_SAFE_INTEGER;

min = Math.min(min, Math.abs(b - a));
min = Math.min(min, Math.abs(x - a) + Math.abs(b - y));
min = Math.min(min, Math.abs(y - a) + Math.abs(b - x));

console.log(min);