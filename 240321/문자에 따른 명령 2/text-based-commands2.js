const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const order = input[0].split('');
let x = 0; y = 0;

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let dir = 0;

for(let i = 0; i < order.length; i++){
    if(order[i] === 'F'){
        x += dx[dir];
        y += dy[dir];
    } else {
        if(order[i] === 'R'){
            dir = (dir + 1) % 4;
        } else {
            dir = dir - 1 < 0 ? 3 : (dir - 1) % 4;
        }
    }
}

console.log(y, x)