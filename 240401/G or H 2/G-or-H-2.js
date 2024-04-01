const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());
const arr = Array(101).fill(0);

for (let i = 0; i < n; i++) {
    const [x, c] = input[i].split(' ');
    arr[parseInt(x)] = c === 'G' ? 1 : 2;
}

let maxLen = 0;
for (let i = 0; i <= 100; i++) {
    for (let j = i + 1; j <= 100; j++) {

        if (arr[i] === 0 || arr[j] === 0) {
            continue;
        }

        let cntG = 0;
        let cntH = 0;
        
        for (let k = i; k <= j; k++) {
            if (arr[k] === 1) {
                cntG += 1;
            }
            if (arr[k] === 2) {
                cntH += 1;
            }
        }

        if (cntG === 0 || cntH === 0 || cntG === cntH) {
            const leng = j - i;
            maxLen = Math.max(maxLen, leng);
        }
    }
}

console.log(maxLen);