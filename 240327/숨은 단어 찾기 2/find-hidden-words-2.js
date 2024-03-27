const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(line=>line.split(''));
const dir = [[-1, -1],[-1, 0],[-1, 1],[0, -1],[0, 1],[1, -1],[1, 0],[1, 1]];

function find(y, x, d){
    for(let i = 1; i <= 2; i++){
        let nx = x + d[1] * i;
        let ny = y + d[0] * i;

        if(nx < 0 || nx >= m || ny < 0 || ny >= n){
            return false
        }

        if(arr[ny][nx] !== 'E'){
            return false;
        }
    }
    return true;
}

let count = 0;
for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        if(arr[i][j] === 'L'){
            for(let k = 0; k < dir.length; k++){
                if(find(i, j, dir[k])){
                    count++;
                }
            }
        }
    }
}

console.log(count);