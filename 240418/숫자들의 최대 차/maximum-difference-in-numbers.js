const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number).sort((a,b)=>a-b);

let answer = 0;

for(let i = 0; i < n; i++){
    let s = arr[i];
    let e = arr[i] + k;
    let count = 0;

    for(let j = i; j < n; j++){
        if(s <= arr[j] && arr[j] <= e){
            count++;
        } else {
            break;
        }
    }

    answer = Math.max(answer, count);
}

console.log(answer)