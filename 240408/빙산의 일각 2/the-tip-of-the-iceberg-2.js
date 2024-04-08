const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(Number)

const maxH = Math.max(...arr);
let answer = 0;
for(let i = maxH; i >= 1; i--){
    const bingsan = arr.map(x => {
        if(x > i){
            return 1;
        } else {
            return 0;
        }
    }).join('').split('0').filter(x=>x!=='').length;

    answer = Math.max(answer, bingsan);
}

console.log(answer)