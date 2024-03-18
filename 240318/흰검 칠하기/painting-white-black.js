const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
let visited = {};

let index = 0;
for(let i = 1; i <= n; i++){
    const [x, dir] = input[i].split(' ');
    const nx = parseInt(x);

    if (dir === 'L') {
        for (let j = 0; j < nx; j++) {
            j === 0 ? index : index--;
            visited[index] ? visited[index] += 'W' : visited[index] = 'W';
        }
    } else { // direction === 'R'
        for (let j = 0; j < nx; j++) {
            j === 0 ? index : index++;
            visited[index] ? visited[index] += 'B' : visited[index] = 'B';
        }
    }
}

const answer = Array(3).fill(0); // white, black, grey

function solution(visited){
    const array = Object.values(visited);

    for(let tile of array){
        const w = tile.split('').filter(x=>x==='W').length;
        const b = tile.length - w;

        if(w >= 2 && b >= 2){
            answer[2] += 1;
        } else if(tile[tile.length-1] === 'W') {
            answer[0] += 1;
        } else {
            answer[1] += 1;
        }
    }
}

// console.log(visited)
solution(visited);
console.log(answer.join(' '))