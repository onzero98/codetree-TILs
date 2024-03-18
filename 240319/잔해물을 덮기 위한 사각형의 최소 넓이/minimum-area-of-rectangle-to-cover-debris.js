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

    minx = Math.min(minx, x1);
    miny = Math.min(miny, y1);
    maxx = Math.max(maxx, x2);
    maxy = Math.max(maxy, y2);

    for(let x = x1; x < x2; x++){
        for(let y = y1; y < y2; y++){
            arr[x][y] = i+1;
        }
    }
}

let area = [];
for(let x = minx; x < maxx; x++){
    for(let y = miny; y < maxy; y++){
        if(arr[x][y] == 1){
            area[maxx-x] ? area[maxx-x] += 1 : area[maxx-x] = 1;
        }
    }
}

const answer = area.filter(x=>x).length !== 0 ? Math.max(...area.filter(x=>x)) * area.filter(x=>x).length: 0;
console.log(answer);