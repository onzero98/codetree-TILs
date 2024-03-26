const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.map(line => line.split(' ').map(Number));
const n = arr.length;

const visited = Array.from(({length:n}), x=>Array(n).fill(false));
const dir = [[-1, -1],[-1, 0],[-1, 1],[0, -1],[0, 1],[1, -1],[1, 0],[1, 1]];

function countNear(i, j, arr, num){
    let result = [[i,j]];
    let queue = [];
    queue.push([i, j]);
    visited[i][j] = true;

    while(queue.length > 0){
        const [x, y] = queue.shift();

        for(let [dx, dy] of dir){
            let nx = x + dx;
            let ny = y + dy;

            if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === num && !visited[nx][ny]){
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                result.push([nx, ny]);
            }
        }
    }

    return result;
}

let res = 0;
let select = 0;
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(arr[i][j] !== 0 && !visited[i][j]){
            let count = countNear(i, j, arr, arr[i][j]);
            if(count.length === 5){
                res = arr[i][j];
                select = count[2].map(x=>x+1);
            }
        }
    }
}

console.log(res)
if(res > 0){
    console.log(select.join(' '))
}