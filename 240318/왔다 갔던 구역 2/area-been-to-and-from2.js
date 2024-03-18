const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
let visitied = {};

let index = 0;
for(let i = 1; i <= n; i++){
    const [x, dir] = input[i].split(' ');
    const nx = parseInt(x);

    for(let j = 0; j < nx; j++){
        index += dir === 'R' ? 1 : -1;
        visitied[index] = (visitied[index] || 0) + 1;
    }
}

const answer = Object.values(visitied).filter(x=>x > 1).length;
console.log(answer);