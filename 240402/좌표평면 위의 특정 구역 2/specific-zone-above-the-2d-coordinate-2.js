const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(line => line.split(' ').map(Number));

let answer = Number.MAX_SAFE_INTEGER;

for(let i = 0; i < n; i++){
    let tmp = arr.slice();
    delete tmp[i];
    const filtered = tmp.filter(x=>x);

    let x1 = Number.MAX_SAFE_INTEGER;
    let y1 = Number.MAX_SAFE_INTEGER;
    let x2 = 0;
    let y2 = 0;

    filtered.forEach(v=>{
        let [x, y] = v;
        x1 = Math.min(x1, x);
        x2 = Math.max(x2, x);
        y1 = Math.min(y1, y);
        y2 = Math.max(y2, y);
    });

    const result = (x2 - x1) * (y2 - y1);
    answer = Math.min(answer, result);
}

console.log(answer);