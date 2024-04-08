const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);

let answer = Number.MAX_SAFE_INTEGER;
for(let i = 0; i < n; i++){
    const x2 = arr.slice();
    x2[i] = x2[i] * 2;

    for(let j = 0; j < n; j++){
        const before = x2.slice();
        delete before[j];
        const after = before.filter(x=>x);
        
        let diff = 0;
        for(let k = 0; k < after.length - 1; k++){
            diff += Math.abs(after[k] - after[k+1]);
        }

        answer = Math.min(answer, diff);
    }
}

console.log(answer)