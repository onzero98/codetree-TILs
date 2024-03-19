const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let index = 0;
let count = [];

for(let i = 0; i < n; i++){
    if(i === 0 || arr[i] > t && arr[i-1] > t){
        count[index] ? count[index] += 1 : count[index] = 1;
    } else {
        index++
        count[index] ? count[index] += 1 : count[index] = 1;
    }
}

console.log(Math.max(...count))