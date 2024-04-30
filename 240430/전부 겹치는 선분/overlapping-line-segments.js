const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(lines => lines.split(' ').map(Number));

let maxStart = arr[0][0];
let minEnd = arr[0][1];

for (let i = 1; i < n; i++) {
  if (arr[i][0] > maxStart) 
    maxStart = arr[i][0];
  if (arr[i][1] < minEnd) 
    minEnd = arr[i][1];
}

if (maxStart <= minEnd) {
  console.log('Yes');
} else {
  console.log('No');
}