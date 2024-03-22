const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, h, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const works = [];

for(let i = 0; i <= n - t; i++){
    let sum = 0;
    for(let j = i; j < i + t; j++){
        sum += Math.abs(h - arr[j]);
    }
    works.push(sum);
}

console.log(Math.min(...works));