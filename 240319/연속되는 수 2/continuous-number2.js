const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = [];

for(let i = 1; i <= n; i++){
    arr.push(parseInt(input[i]));
}

let count = 0;
for(let j = 0; j < n; j++){
    if(j === 0 || arr[j] === arr[j-1]){
        count++;
    } else {
        count = 1;
    }
}

console.log(count)