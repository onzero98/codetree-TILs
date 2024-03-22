const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [r, c] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(x=>x.split(' '));
let answer = 0;

function isValidJump(startR, startC, endR, endC) {
    return startR < endR && startC < endC && arr[startR][startC] !== arr[endR][endC];
}

for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
        for (let k = i + 1; k < r - 1; k++) {
            for (let l = j + 1; l < c - 1; l++) {
                if (isValidJump(0, 0, i, j) && isValidJump(i, j, k, l) && isValidJump(k, l, r - 1, c - 1)) {
                    answer++;
                }
            }
        }
    }
}

console.log(answer)