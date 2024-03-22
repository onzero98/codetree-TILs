const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let totalSum = arr.reduce((a, b) => a + b, 0); 
let answer = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

        let select2 = totalSum - arr[i] - arr[j];
        let diff = Math.abs(s - select2);

        answer = Math.min(answer, diff);
    }
}

console.log(answer);