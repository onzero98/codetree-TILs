const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);

let answer = 0;

for(let k = 1; k <= 100; k++){
    let count = 0;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(arr[i] + arr[j] === 2 * k){
                count++;
            }
        }
    }

    answer = Math.max(answer, count);
}

console.log(answer);