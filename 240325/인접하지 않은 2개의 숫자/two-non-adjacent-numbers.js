const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);

let max = 0;

for(let i = 0; i < n; i++){
    for(j = i + 1; j < n; j++){
        if(j - i !== 1){
            let sum = arr[i] + arr[j];
            max = Math.max(max, sum);
        }
    }
}

console.log(max);