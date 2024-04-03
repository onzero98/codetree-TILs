const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);

let count = 0;
for(let i = 0; i < n; i++){
    let tmp = arr.slice();
    tmp[i] = tmp[i] / 2;
    tmp.sort((a,b)=>a-b);

    let limit = b;
    let human = 0;
    for(let j = 0; j < tmp.length; j++){
        if(limit < tmp[j]){
            break;
        }
        limit -= tmp[j];
        human++;
    }

    count = Math.max(count, human);
}

console.log(count)