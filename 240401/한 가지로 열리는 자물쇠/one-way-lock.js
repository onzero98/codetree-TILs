const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const res = arr.map(x=>x+3);

let answer = Math.pow(n,3);
if(res.every((v) => v <= n)){
    const [a, b, c] = res;
    for(let i = a; i <= n; i++){
        for(let j = b; j <= n; j++){
            for(let k = c; k <= n; k++){
                answer--;
            }
        }
    }
}

console.log(answer);