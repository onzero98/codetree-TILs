const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = input[0];
let count = 0;

for(let i = 0; i < A.length - 1; i++){
    for(let j = i + 1; j < A.length - 1; j++){
        if(A[i] === '(' && A[i+1] === '(' && A[j] === ')' && A[j+1] === ')'){
            count++;
        }
    }
}

console.log(count)