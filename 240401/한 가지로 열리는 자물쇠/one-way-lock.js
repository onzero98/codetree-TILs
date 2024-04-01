const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);

let answer = 0;
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n; j++){
        for(let k = 1; k <= n; k++){
            if(Math.abs(a-i) <= 2 || Math.abs(b-j) <= 2 || Math.abs(c-k) <= 2){
                answer++;
            }
        }
    }
}


console.log(answer);