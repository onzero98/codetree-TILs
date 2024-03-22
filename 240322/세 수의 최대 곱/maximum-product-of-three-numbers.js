const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);

arr.sort((a, b) => b - a);

const maxProduct = Math.max(
    arr[0] * arr[1] * arr[2],
    arr[0] * arr[n - 1] * arr[n - 2] 
);

console.log(maxProduct);