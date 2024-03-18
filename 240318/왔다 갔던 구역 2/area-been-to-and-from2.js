const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
let visitied = {};

let index = 0;
for(let i = 1; i <= n; i++){
    const [x, dir] = input[i].split(' ');
    const nx = parseInt(x);
    
    if(dir === 'R'){
        for(let j = index; j < index + nx; j++){
            visitied[j] = (visitied[j] || 0) + 1;
        }
        index += nx;
    } else if(dir === 'L'){
        for(let j = index; j > index - nx; j--){
            visitied[j] = (visitied[j] || 0) + 1;
        }
        index -= nx;
    } 
}

const answer = Object.values(visitied).filter(x=>x > 1).length;
console.log(answer);