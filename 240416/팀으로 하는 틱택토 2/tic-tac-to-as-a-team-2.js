const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.map(lines => lines.split('').map(Number));

let dir = [[-1, 1], [0, 1], [1, 1], [1, 0]];
const numsArr = [];

let answer = 0;
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        for(let [y, x] of dir){
            let num = '';
            const nx = j + 2 * x;
            const ny = i + 2 * y;

            if(nx < 0 || nx >= 3 || ny < 0 || ny >= 3){
                continue;
            }

            num += arr[i][j];
            num += arr[i+y][j+x];
            num += arr[i+2*y][j+2*x];

            numsArr.push(num);
        }
    }
}

const filtered = new Set(numsArr);
for(let num of filtered){
    const nums = num.split('').map(Number);
    const setNums = new Set(nums);
    if(setNums.size === 2){
        answer++;
    }
}

console.log(answer)