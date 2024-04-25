const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const MAX = 10000;
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let answer = MAX;
for(let i = 1; i <= MAX; i++){
    let flag = true;
    let wall = 1;

    let count = 0;
    for(let j = 0; j < n; j++){
        if(arr[j] > i){
            flag = false;
            break;
        }

        if(count + arr[j] > i){
            count = 0;
            wall += 1;
        }

        count += arr[j];
    }

    if(flag && wall <= m){
        answer = Math.min(answer, i);
    }
}

console.log(answer);