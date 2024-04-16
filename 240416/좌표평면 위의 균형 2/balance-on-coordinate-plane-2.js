const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(lines => lines.split(' ').map(Number));

let maxX = 0;
let maxY = 0;
arr.forEach(([x, y])=>{
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
});

let m = Number.MAX_SAFE_INTEGER;

for(let i = 2; i <= 100; i += 2){
    for(let j = 2; j <= 100; j += 2){
        let plot = [0, 0, 0, 0];

        for(let [x, y] of arr){
            if(x < i && y > j){
                plot[0] += 1;
            } else if(x > i && y > j){
                plot[1] += 1;
            } else if(x > i && y < j){
                plot[2] += 1;
            } else if(x < i && y < j){
                plot[3] += 1;
            }
        }
        m = Math.min(m, Math.max(...plot));
    }
}

console.log(m);