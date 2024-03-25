const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const cp = input.slice(1).map(line => line.split(' ').map(Number));
let answer = Number.MAX_SAFE_INTEGER;

for(let i = 1; i < n - 1; i++){
    let dist = 0;
    let prevIdx = 0;

    for(let j = 1; j < n; j++){
        if(j === i){
            continue;
        }

        dist += Math.abs(cp[prevIdx][0] - cp[j][0]) + Math.abs(cp[prevIdx][1] - cp[j][1]);
        prevIdx = j;
    }

    answer = Math.min(answer, dist);
}

console.log(answer)