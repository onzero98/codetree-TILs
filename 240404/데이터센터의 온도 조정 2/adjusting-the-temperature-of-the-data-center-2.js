const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, c, g, h] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(lines => lines.split(' ').map(Number));
const MAX_T = 1000;

function efficiency(low, high, t) {
    if (t < low) {
        return c;
    } else if (t <= high) {
        return g;
    } else {
        return h;
    }
}

function performance(t) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += efficiency(arr[i][0], arr[i][1], t);
    }
    return total;
}

let answer = 0;
for (let t = 0; t <= MAX_T; t++) {
    answer = Math.max(answer, performance(t));
}

console.log(answer)