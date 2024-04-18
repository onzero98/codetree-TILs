const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const space = input[1];

let answer = 0;

for(let i = 0; i < n; i++){
    let tmp = space.slice().split('').map(Number);
    if(tmp[i] === 1){
        continue;
    }

    tmp[i] = 1;
    tmp = tmp.map((x,idx) => x === 1 ? x = idx + 1 : x = 0).filter(x=>x);
    let min = Number.MAX_SAFE_INTEGER;
    for(let j = 0; j < tmp.length - 1; j++){
        let diff = tmp[j+1] - tmp[j];
        min = Math.min(min, diff);
    }

    answer = Math.max(answer, min);
}

console.log(answer);