const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);

function solution(arr){
    let min = Math.min(...arr);
    let tmp = arr.filter(x=>x !== min);

    let second = Math.min(...tmp);
    let stmp = arr.filter(x=> x === second);
    if(tmp.length < 1 || stmp.length > 1){
        return -1;
    } else {
        return arr.indexOf(second) + 1;
    }
}

const answer = solution(arr);
console.log(answer);