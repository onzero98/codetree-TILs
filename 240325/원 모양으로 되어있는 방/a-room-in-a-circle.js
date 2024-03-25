const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const room = input.slice(1).map(Number);

let min = Number.MAX_SAFE_INTEGER;

for(let i = 0; i < n; i++){
    let sum = 0;
    let idx = 0;
    for(let j = i; j < n + i; j++){
        sum += idx++ * room[j % n];
    }

    min = Math.min(min, sum);
}

console.log(min)