const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, c, g, h] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(lines => lines.split(' ').map(Number));

let answer = 0;
for(let i = 0; i < n; i++){
    const [ta, tb] = arr[i];
    let score = 0;
    for(let j = 0; j < n; j++){
        const [nta, ntb] = arr[j];
            
        if(nta <= tb && nta >= ta){
            score += g;
        } else if(ntb < ta) {
            score += c;
        } else if(tb < nta){
            score += h;
        }
    }
    
    answer = Math.max(answer, score);
}

console.log(answer)