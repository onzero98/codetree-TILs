const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(x=>x.split(' ').map(Number));

let result = "No";

for (let i = 0; i < n; i++) {
    let maxStart = 0; 
    let minEnd = 101; 

    for (let j = 0; j < n; j++) {
        if (i !== j) { 
            maxStart = Math.max(maxStart, arr[j][0]);
            minEnd = Math.min(minEnd, arr[j][1]);
        }
    }

    if (maxStart <= minEnd) {
        result = "Yes";
        break;
    }
}

console.log(result);