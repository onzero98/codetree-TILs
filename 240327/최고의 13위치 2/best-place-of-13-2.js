const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n= parseInt(input[0]);
const arr = input.slice(1).map(line=>line.split(' ').map(Number));

let counts = [];
for(let i = 0; i < n; i++){
    let stamp = 0;
    for(let j = 0; j < n-2; j++){
        let coins = arr[i][j] + arr[i][j+1] + arr[i][j+2];
        stamp = Math.max(stamp, coins);
    }
    counts.push(stamp);
}

counts.sort((a,b)=>b-a);
console.log(counts[0]+counts[1]);