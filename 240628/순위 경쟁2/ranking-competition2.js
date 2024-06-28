const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
let changes = 0;
let student = {'A':0, 'B':0};
let rank = [true, true];
// A가 1위, B가 1위, 동시 1위

for(let i = 1; i < input.length; i++){
    const [c, s] = input[i].split(' ');

    student[c] += parseInt(s);

    let currentRank = [true, true];
    if(student['A'] > student['B']){
        currentRank = [true, false];
    }else if(student['A'] < student['B']){
        currentRank = [false, true];
    } else {
        currentRank = [true, true];
    }

    if(!rank.every((v, i)=>v === currentRank[i])){
        changes++;
        rank = currentRank;
    }
}

console.log(changes)