const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);

let student = Array(n+1).fill(0);

for(let i = 1; i <= m; i++){
    const num = parseInt(input[i]);
    student[num] += 1;

    if(student[num] === k){
        console.log(num);
        break;
    }
}