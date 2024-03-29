const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const Map = Array(100).fill(0);

let endX = 0;
for(let i = 1; i <= n; i++){
    const [candy, x] = input[i].split(' ').map(Number);
    Map[x] += candy;
    endX = Math.max(endX, x);
}

let answer = 0;
for(let i = 0; i <= endX; i++){
    let candys = 0;
    for(let j = i; j < i + (2 * k) + 1; j++){
        if(j >= 100){
            continue;
        }
        candys += Map[j];
    }
    answer = Math.max(answer, candys);
}

console.log(answer)