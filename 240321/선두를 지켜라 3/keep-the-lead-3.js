const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const A = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const B = input.slice(n + 1, n + m + 1).map(line => line.split(' ').map(Number));

function solution(n, m, A, B){
    let moveA = [0];
    let moveB = [0];
    let timeA = 1, timeB = 1;
    let winner = 'A';

    for(let [v, t] of A){
        for(let i = 0; i < t; i++){
            moveA.push(moveA[timeA-1] + v);
            timeA++;
        }
    }

    for(let [v, t] of B){
        for(let i = 0; i < t; i++){
            moveB.push(moveB[timeB-1] + v);
            timeB++;
        }
    }

    for(let i = 1; i < moveA.length; i++){
        if(moveA[i] !== moveB[i]){
            winner = moveA[i] < moveB[i] ? 'B' : 'A';
            break;
        }
    }

    let count = 1;
    for(let i = 1; i < moveA.length; i++){
        if(winner === 'A'){
            if(moveA[i] < moveB[i]){
                winner = 'B';
                count++;
            } else if(moveA[i] === moveB[i]){
                winner = 'AB';
                count++;
            }
        } else if(winner === 'B') {
            if(moveB[i] < moveA[i]){
                winner = 'A';
                count++;
            } else if(moveA[i] === moveB[i]){
                winner = 'AB';
                count++;
            }
        } else if (winner === 'AB'){
            if(moveA[i] < moveB[i]){
                winner = 'B';
                count++;
            } else if(moveB[i] < moveA[i]){
                winner = 'A';
                count++;
            }
        }
    }
    return count;
}

const answer = solution(n, m, A, B);
console.log(answer)