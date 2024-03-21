const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
let x = 0; y = 0;

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];
const dir = ['E', 'W', 'S', 'N'];

for(let i = 1; i <= n; i++){
    const [d, m] = input[i].split(' ');
    const move = parseInt(m);

    let md = dir.indexOf(d);

    x += dx[md] * move;
    y += dy[md] * move;
}

console.log(x, y)