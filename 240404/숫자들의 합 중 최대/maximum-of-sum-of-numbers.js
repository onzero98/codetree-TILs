const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

let answer = 0;
for(let i = x; i <= y; i++){
    let num = i.toString().split('').map(Number);
    let sum = 0;
    for(let n of num){
        sum += n;
    }
    answer = Math.max(answer, sum);
}

console.log(answer);