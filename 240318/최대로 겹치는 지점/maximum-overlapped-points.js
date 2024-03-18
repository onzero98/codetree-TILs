const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = Array(100).fill(0);
for(let i = 1; i <= n; i++){
    const [x1, x2] = input[i].split(' ').map(Number);
    for(let j = x1; j < x2; j++){
        arr[j] += 1;
    }
}

const answer = Math.max(...arr);
console.log(answer);