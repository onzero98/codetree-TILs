const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const space = input.slice(1).map(lines => lines.split(' ').map(Number));

let [min, max] = space[0];

for(let i = min; i <= max; i++){
    let curNum = i;
    let flag = true;

    for(let j = 0; j < n; j++){
        const [mmin, mmax] = space[j];
        curNum = curNum * 2;
        if(curNum < mmin || curNum > mmax){
            flag = false;
            break;
        }
    }

    if(flag){
        console.log(i);
        break;
    }
}