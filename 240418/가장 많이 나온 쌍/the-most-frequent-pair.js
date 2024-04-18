const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const pairs = input.slice(1).map(lines => lines.split(' ').map(Number));

let sorted = pairs.map(x=>x.sort((a,b)=>a-b).join(''));
let counts = new Object();

for(let key of sorted){
    if(!counts[key]){
        counts[key] = 1;
    } else {
        counts[key] += 1;
    }
}

const answer = Math.max(...Object.values(counts));

console.log(answer)