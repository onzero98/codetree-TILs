const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const word = input[1]

let max = [];
for(let i = 0; i < n; i++){

    for(let j = i; i < n; j++){
        const w = word.slice(i, j+1);
        const remain = word.slice(j+1);

        if(remain.indexOf(w) < 0){
            max.push(w.length);
            break;
        }
    }

}

const answer = Math.max(...max)
console.log(answer)