const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const order = input[1].split('');
const arr = input.slice(2).map(x=>x.split(' ').map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let dir = 0;
let cx = ~~(n/2), cy = ~~(n/2);

function check(x, y){
    return x >= 0 && x < n && y >= 0 && y < n;
}

let sum = arr[cx][cy];

for(let o of order){
    if(o === 'F'){
        let nx = cx + dx[dir];
        let ny = cy + dy[dir];
        if(check(nx, ny)){
            sum += arr[nx][ny];
            cx = nx;
            cy = ny;
        }
    } else {
        if(o === 'R'){
            dir === 3 ? dir = 0 : dir += 1;
        } else {
            dir === 0 ? dir = 3 : dir -= 1;
        }
    }
}

console.log(sum)