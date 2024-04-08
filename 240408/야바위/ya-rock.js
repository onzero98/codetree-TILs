const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
let answer = 0

for(let i = 0; i < 3; i++){
    let count = 0;
    const cups = Array(3).fill(false);
    cups[i] = true;
    
    for(let j = 1; j <= n; j++){
        const [a, b, c] = input[j].split(' ').map(Number).map(x=>x-1);
        const tmp = cups[b];
        cups[b] = cups[a];
        cups[a] = tmp;

        if(cups[c] === true){
            count++;
        }
    }

    answer = Math.max(answer, count)
}

console.log(answer)