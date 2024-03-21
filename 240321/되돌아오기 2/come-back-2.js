const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const order = input[0].split('');
const position = [0, 0]

const dx = [1, 0, -1, 0]
const dy = [0, 1, 0, -1];

let dir = 0;
let time = 0;

function setDir(dir, w){
    if(w === 'L'){
        return dir <= 0 ? 3 : dir - 1;
    } else if(w === 'R'){
        return dir >= 3 ? 0 : dir + 1;
    }
}

function solution(order){
    for(let i = 0; i < order.length; i++){
        if(order[i] === 'F'){
            position[0] += dx[dir];
            position[1] += dy[dir];
        } else {
            dir = setDir(dir, order[i]);
        }
        time++;
        if(position[0] === 0 && position[1] === 0){
            return time;
        }
    }
    return -1;
}

const answer = solution(order);
console.log(answer);