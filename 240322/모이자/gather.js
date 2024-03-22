const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);

let min = Number.MAX_SAFE_INTEGER;

for(let i = 0; i < n; i++){
    let len = 0;

    for(let j = 0; j < n; j++){
        len += Math.abs(j-i) * arr[j];
    }

    min = Math.min(min, len);
}

console.log(min)