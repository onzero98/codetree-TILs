const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const A = input.slice(1, n + 1).map(line => line.split(' '));
const B = input.slice(n + 1, n + m + 1).map(line => line.split(' '));

function solution(n, m, A, B){
    let moveA = Array(1000000).fill(0);
    let moveB = Array(1000000).fill(0);
    let timeA = 1, timeB = 1;

    for(let [t, d] of A){
        for(let i = 0; i < parseInt(t); i++){
            moveA[timeA] = moveA[timeA-1] + (d === 'L' ? -1 : 1);
            timeA++;
        }
    }

    for(let [t, d] of B){
        for(let i = 0; i < parseInt(t); i++){
            moveB[timeB] = moveB[timeB-1] + (d === 'L' ? -1 : 1);
            timeB++;
        }
    }

    let count = 0;
    for(let i = 1; i <= Math.max(timeA, timeB); i++){
        if(moveA[i-1] !== moveB[i-1] && moveA[i] === moveB[i]){
            count++;
        }
    }

    return count;
}

const answer = solution(n, m, A, B);
console.log(answer);