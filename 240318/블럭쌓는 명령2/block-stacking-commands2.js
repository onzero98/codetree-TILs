const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const array = Array(n).fill(0);

for(let i = 1; i <= k; i++){
    const [a, b] = input[i].split(' ').map(Number);

    for(let j = a - 1; j < b; j++){
        array[j] += 1;
    }
}

const answer = Math.max(...array);

console.log(answer);