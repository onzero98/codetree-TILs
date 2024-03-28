const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);

let count = 0;

for (let start = 0; start < n; start++) {
    for (let end = start; end < n; end++) {
        let sum = 0;

        for (let i = start; i <= end; i++) {
            sum += arr[i];
        }

        let avg = sum / (end - start + 1); 

        for (let i = start; i <= end; i++) {
            if (arr[i] === avg) {
                count++;
                break; 
            }
        }
    }
}

console.log(count);