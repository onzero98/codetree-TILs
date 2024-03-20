const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);

function solution(n, m, k){
    let student = Array(n+1).fill(0);
    
    for(let i = 1; i <= m; i++){
        const num = parseInt(input[i]);
        student[num] += 1;

        if(student[num] === k){
            return num;
        }
    }

    return -1;
}

const answer = solution(n, m, k)
console.log(answer)