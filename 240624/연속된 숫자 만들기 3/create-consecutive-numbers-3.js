const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[0].split(' ').map(Number);

if (arr[0] + 1 === arr[1] && arr[1] + 1 === arr[2]) {
    console.log(0);
    return;
}

let max = 0;
let move = arr[2] - arr[1] - 1;
max = Math.max(max, move);

move = arr[1] - arr[0] - 1;
max = Math.max(max, move);

console.log(max);