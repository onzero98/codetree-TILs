const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[0].split(' ').map(Number);
const result = [];

function solution(array, counts){
    let [st, nd, rd] = array;
    if(st + 1 === nd && nd + 1 === rd){
        result.push(counts);
        return;
    }

    if(st + 1 < nd){
        solution([st, st+1, nd], counts + 1);
    }
    if(nd + 1 < rd){
        solution([nd, rd-1, rd], counts + 1);
    }
}

solution(arr, 0);

const answer = Math.max(...result);
console.log(answer);