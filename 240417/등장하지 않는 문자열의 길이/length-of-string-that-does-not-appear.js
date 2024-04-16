const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const word = input[1]

let answer = 0;
for(let i = 0; i < n; i++){
    const w = word.slice(0, i+1);
    const remain = word.slice(i+1);

    answer++;
    if(remain.indexOf(w) < 0){
        break;
    }
}

console.log(answer)