const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const A = input.slice(1, n + 1).map(line => line.split(' '));
const B = input.slice(n + 1, n + m + 1).map(line => line.split(' '));

function timeStamp(n, m, A, B) {
    let positionA = Array(1000000).fill(0);
    let positionB = Array(1000000).fill(0);
    let timeA = 1, timeB = 1;

    for(let stamp of A){
        const [d, t] = stamp;
        for(let i = 0; i < Number(t); i++){
            positionA[timeA] = positionA[timeA -1] + (d === 'R' ? 1 : -1);
            timeA++;
        }
    }

    for(let stamp of B){
        const [d, t] = stamp;
        for(let i = 0; i < Number(t); i++){
            positionB[timeB] = positionB[timeB -1] + (d === 'R' ? 1 : -1);
            timeB++;
        }
    }
    
    for(let i = 1; i < timeA; i++){
        if(positionA[i] === positionB[i]){
            return i;
        }
    }

    return -1;
}

const answer = timeStamp(n, m, A, B);
console.log(answer);