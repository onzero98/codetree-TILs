const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const MAX = 100;
const n = parseInt(input[0]);
const k = 17;
const arr = input.slice(1).map(Number);

let answer = Number.MAX_SAFE_INTEGER;
for(let i = 0; i < MAX; i++){
    let cost = 0;
    for(let j = 0; j < n; j++){
        if(arr[j] < i){
            cost += (arr[j] - i) * (arr[j] - i);
        } else if(arr[j] > i + k){
            cost += (arr[j] - i - k) * (arr[j] - i - k);
        }
    }

    answer = Math.min(answer, cost);
}

console.log(answer);