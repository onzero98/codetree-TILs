const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

function solution(n, A, B) {

    let total = 0;
    let excess = 0;

    for (let i = 0; i < n; i++) {
        excess += A[i] - B[i];

        if (excess > 0) {
            total += excess;
        } else {
            total += (-excess);
        }
    }

    return total;
}

const answer = solution(n, A, B)
console.log(answer);