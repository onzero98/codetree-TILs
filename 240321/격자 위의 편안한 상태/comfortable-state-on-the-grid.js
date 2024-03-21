const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = Array.from(({length:n}), x=>Array(n).fill(0));

const dx = [1, -1, 0, 0]
const dy = [0, 0, -1, 1];

function solution(arr){
    let res = [];

    for(let i = 1; i <= m; i++){
        const [x, y] = input[i].split(' ').map(Number);
        arr[x-1][y-1] = 1;

        let count = 0;
        for(let j = 0; j < 4; j++){
            let nx = x - 1 + dx[j];
            let ny = y - 1 + dy[j];

            if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] === 1){
                count++;
            }
        }

        if(count === 3){
            res.push(1);
        } else {
            res.push(0);
        }
    }

    return res;
}

const answer = solution(arr).join('\n');
console.log(answer);