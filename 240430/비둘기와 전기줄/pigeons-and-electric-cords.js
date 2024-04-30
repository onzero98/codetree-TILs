const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(lines => lines.split(' ').map(Number));

let lastPositions = {};
let moves = 0;

for (let i = 0; i < n; i++) {
    const [pigeon, position] = arr[i];
    
    if (lastPositions[pigeon] !== undefined && lastPositions[pigeon] !== position) {
        moves++;
    }
    
    lastPositions[pigeon] = position;
}

console.log(moves);