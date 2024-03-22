const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(Number);
const avg = arr.reduce((a, c) => a + c, 0) / n;

let answer = 0;

for (let i = 0; i < n; i++) {
    if(arr[i] > avg){
        answer += arr[i] - avg;
    }
}

console.log(answer);