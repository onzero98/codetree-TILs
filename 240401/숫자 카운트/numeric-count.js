const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(line => line.split(' ').map(Number));

const candidates = [];
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        if (j !== i) {
            for (let k = 1; k <= 9; k++) {
                if (k !== i && k !== j) {
                    candidates.push([i, j, k]);
                }
            }
        }
    }
}

function check(cand, tries){
    const [num, c1, c2] = tries;
    const numArr = num.toString().split('').map(Number);
    let count1 = 0;
    let count2 = 0;

    for(let i = 0; i < 3; i++){
        if(cand[i] === numArr[i]){
            count1++;
        } else if(numArr.includes(cand[i])){
            count2++;
        }
    }

    return count1 === c1 && count2 === c2;
}

let answer = 0;
for(let c of candidates){
    if(arr.every(tries => check(c, tries))){
        answer++;
    }
}

console.log(answer);