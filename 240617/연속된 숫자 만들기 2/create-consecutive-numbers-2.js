const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[0].split(' ').map(Number);

arr.sort();

let answer = 0;
if(arr[0]+1 === arr[1] && arr[1]+1 === arr[2]){
    answer = 0;
} else if(arr[0]+2 === arr[1] || arr[1] + 2 === arr[2]){
    answer = 1;
} else {
    answer = 2;
}

console.log(answer)