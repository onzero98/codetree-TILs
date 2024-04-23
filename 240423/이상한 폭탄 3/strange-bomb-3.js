const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);

const numbers = new Set(arr);
let answer = [];
for(const num of numbers){
    let index = arr.map((x, i) => x === num ? x = i+1 : x = 0).filter(x=>x!==0);
    let count = 1;
    for(let i = 0; i < index.length; i++){
        if(index[i+1] - index[i] <= k){
            count++;
        }
    }

    answer.push([count, num]);
}

answer = answer.sort((a,b)=> b[0] - a[0]);
console.log(answer[0][1])