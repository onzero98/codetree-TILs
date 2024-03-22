const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[0].split('');
let sum = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] === '('){
        for(let j = i; j < arr.length; j++){
            if(arr[j] === ')'){
                sum++;
            }
        }
    }
}

console.log(sum)