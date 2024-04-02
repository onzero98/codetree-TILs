const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(line => line.split(' ').map(Number));

let answer = 0;

for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
        for(let k = j + 1; k < n; k++){
            const [x1, y1] = arr[i];
            const [x2, y2] = arr[j];
            const [x3, y3] = arr[k];

            if((x1 === x2 || x2 === x3 || x1 === x3) && (y1 === y2 || y2 === y3 || y1 === y3)){
                const rx1 = Math.min(x1, x2, x3);
                const ry1 = Math.min(y1, y2, y3);
                const rx2 = Math.max(x1, x2, x3);
                const ry2 = Math.max(y1, y2, y3);

                const res = (rx2 - rx1) * (ry2 - ry1);
                answer = Math.max(answer, res);
            }
        }
    } 
}

console.log(answer);