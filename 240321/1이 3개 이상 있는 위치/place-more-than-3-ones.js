const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(x=>x.split(' ').map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

function checkNear(x, y, arr){
    let count = 0;
    
    for(let i = 0; i < 4; i++){
        const nx = x + dx[i];
        const ny = y + dy[i];

        if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[ny][nx] === 1){
            count++;
        }
    }

    return count;
}

let result = 0;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(checkNear(i, j, arr) >= 3){
            result++;
        }
    }
}

console.log(result);