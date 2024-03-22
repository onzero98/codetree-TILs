const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let count = 0;
let index = 0;

while(index < n){
    if(arr[index] === 1){
        count++;
        index += 2 * m + 1;
    } else {
        index++;
    }
}

console.log(count);