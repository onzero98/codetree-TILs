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
            visited[index] = (visited[index] || 0) + 1;
            index--;
        }
    } else { // direction === 'R'
        for (let j = 0; j < nx; j++) {
            index++;
            visited[index] = (visited[index] || 0) + 1;
        }
    }
}

const answer = Object.values(visited).filter(x=>x > 1).length;
console.log(answer);