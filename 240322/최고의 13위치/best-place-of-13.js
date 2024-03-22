const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(x=>x.split(' ').map(Number));

let answer = 0;
for(let i = 0; i < n; i++){

    for(let j = 0; j <= n-3; j++){
        let sum = 0;
        sum += arr[i][j];
        sum += arr[i][j+1];
        sum += arr[i][j+2];
        
        answer = Math.max(answer, sum);
    }
}

console.log(answer)