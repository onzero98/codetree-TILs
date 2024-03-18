const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = Array.from({length:2001}, x=>Array(2001).fill(0));

let minx = 2000;
let miny = 2000;
let maxx = 0;
let maxy = 0;

for(let i = 0; i < 2; i++){
    const [a,b,c,d] = input[i].split(' ').map(Number);
    let [x1, y1, x2, y2] = [a+1000, b+1000, c+1000, d+1000];
    
    for(let j = y1; j < y2; j++){
        for(let k = x1; k < x2; k++){
            if(i===0){
                arr[j][k] += 1;
                minx = Math.min(minx, x1);
                miny = Math.min(miny, y1);

            } else {
                arr[j][k] = 0;
            }

            if(arr[j][k] !== 0){
                maxx = Math.max(maxx, k);
                maxy = Math.max(maxy, j);
            }
        }
    }
}

const answer = (maxx - minx + 1) * (maxy - miny + 1);
console.log(answer)