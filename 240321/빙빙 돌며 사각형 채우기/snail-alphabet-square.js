const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = Array.from(({length:n}), x=>Array(m).fill(0));

const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0];
let dir = 0;

let x = 0, y = 0;
let index = 65
arr[x][y] = 'A';

for(let i = 1; i < n * m; i++){
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    if(!(0 <= nx && nx < n && 0 <= ny && ny < m) || arr[nx][ny] !== 0){
        dir = (dir + 1) % 4;
        nx = x + dx[dir];
        ny = y + dy[dir];
    } 

    x = nx;
    y = ny;

    index >= 90 ? index = 65 : index++;
    arr[x][y] = String.fromCharCode(index);
}

for (let i = 0; i < n; i++) {
    console.log(arr[i].join(' '));
}