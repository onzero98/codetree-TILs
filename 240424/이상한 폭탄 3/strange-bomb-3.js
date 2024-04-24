const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const MAX = 1000000;
const [n, k] = input[0].split(' ').map(Number);
const num = [];

for(let i = 1; i <= n; i++){
    num.push(Number(input[i]));
}

const bomb = new Array(MAX + 1).fill(0);
const explode = new Array(n).fill(false);

let maxVal = 1;
let maxIdx = 0;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {

        if (j - i > k) {
            break;
        }

        if (num[i] !== num[j]) {
            continue;
        }

        if (!explode[i]) {
            bomb[num[i]] += 1;
            explode[i] = true;
        }

        if (!explode[j]) {
            bomb[num[j]] += 1;
            explode[j] = true;
        }
    }
}

for (let i = 0; i <= MAX; i++) {
    if (maxVal <= bomb[i]) {
        maxVal = bomb[i];
        maxIdx = i;
    }
}

console.log(maxIdx);