const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);

const am = Math.floor(c/a);
const bm = Math.floor(c/b);

let answer = 0;
for(let i = 0; i <= am; i++){
    for(let j = 0; j <= bm; j++){
        const cur = a * i + b * j;
        if(cur > c){
            continue;
        }
        
        answer = Math.max(answer, cur);
    }
}

console.log(answer);