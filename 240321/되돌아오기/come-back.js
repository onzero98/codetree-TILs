const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = Array.from(({length:1001}), x=>Array(1001).fill(0));

const dx = [1, -1, 0, 0]
const dy = [0, 0, -1, 1];
const direction = ['N', 'S', 'W', 'E'];
let x = 0, y = 0;
let time = 0;

function solution(x, y, time){
    for(let i = 1; i <= n; i++){
        const [d, m] = input[i].split(' ');
        const mov = parseInt(m);
        const dir = direction.indexOf(d);

        for(let j = 0; j < mov; j++){
            x += dx[dir];
            y += dy[dir];
            time++;
            
            if(x === 0 && y === 0){
                return time;    
            }
        }
    }
    return -1;
}

const answer = solution(x, y, time);
console.log(answer);