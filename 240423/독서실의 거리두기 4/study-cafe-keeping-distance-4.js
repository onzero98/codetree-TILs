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

    for(let j = i + 1; j < n; j++){
        if(tmp[j] === 1){
            continue;
        }

        let tmp2 = tmp.slice();
        tmp2[j] = 1;

        tmp2 = tmp2.map((x,idx) => x === 1 ? x = idx + 1 : x = 0).filter(x=>x);

        let min = Number.MAX_SAFE_INTEGER;
        for(let k = 0; k < tmp2.length - 1; k++){
            let diff = tmp2[k+1] - tmp2[k];
            min = Math.min(min, diff);
        }

        answer = Math.max(answer, min);
    }
}

console.log(answer);