const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0])
const arr = Array.from(({length:n}), x=>Array(n).fill(0));

const dx = [0, -1, 0, 1]
const dy = [1, 0, -1, 0];

let cx = ~~(n/2), cy = ~~(n/2);
let dir = 0;
let steps = 1;
let index = 1;

function check(x,y){
    return x >= 0 && x < n && y >= 0 && y < n;
}

function end(){
    return !check(cx, cy);
}

while(!end()){
    for(let i = 0; i < steps; i++){
        arr[cx][cy] = index;
        index++;

        cx += dx[dir];
        cy += dy[dir];

        if(end()){
            break;
        }
    }

    dir = (dir + 1) % 4;

    if(dir === 0 || dir === 2){
        steps += 1;
    }
}

for (let i = 0; i < n; i++) {
    console.log(arr[i].join(' '));
}