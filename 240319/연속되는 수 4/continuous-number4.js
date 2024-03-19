const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = [];

for(let i = 1; i <= n; i++){
    arr.push(parseInt(input[i]));
}

let index = 0;
let count = [];
for(let j = 0; j < n; j++){
    if(j === 0 || arr[j] > arr[j-1]){
        count[index] ? count[index] += 1 : count[index] = 1;
    } else {
        index++
        count[index] ? count[index] += 1 : count[index] = 1;
    }
}

console.log(Math.max(...count))