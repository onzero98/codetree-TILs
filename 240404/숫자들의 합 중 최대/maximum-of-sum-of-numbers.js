const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

function dsum(n){
    if(n < 10){
        return n;
    } else {
        return dsum(Math.floor(n/10)) + (n % 10);
    }
}

let answer = 0;
for(let i = x; i <= y; i++){
    answer = Math.max(answer, dsum(i));
}

console.log(answer);