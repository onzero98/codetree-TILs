const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

let sum

if(b < c || d < a){
    sum = (b - a) + (d - c);
} else {
    const min = Math.min(a, c);
    const max = Math.max(b, d);
    sum = max - min;
}

console.log(sum);