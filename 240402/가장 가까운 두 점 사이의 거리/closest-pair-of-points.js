const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(line => line.split(' ').map(Number));

let answer = Number.MAX_SAFE_INTEGER;

for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
        const [x1, y1] = arr[i];
        const [x2, y2] = arr[j];

        const res = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
        answer = Math.min(answer, res);
    } 
}

console.log(answer);