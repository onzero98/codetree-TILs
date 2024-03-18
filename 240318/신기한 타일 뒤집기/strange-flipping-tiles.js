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
            visited[index] = 'W';
        }
    } else { // direction === 'R'
        for (let j = 0; j < nx; j++) {
            j === 0 ? index : index++;
            visited[index] = 'B';
        }
    }
}

const white = Object.values(visited).filter(x=>x==='W').length;
const black = Object.values(visited).filter(x=>x==='B').length;


console.log(white, black)