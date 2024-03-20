const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k, p, t] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(x=>x.trim().split(' ').map(Number));
const sortArr = arr.sort((a,b)=>a[0] - b[0]);

let result = Array(n+1).fill(0);
result[p] = 1;

let limit = Array(n+1).fill(k);

for(let [t, x, y] of sortArr){
    if(limit[x] > 0 && result[x] === 1){
        result[y] = 1;
        limit[x] -= 1;
    } 
    
    if (limit[y] > 0 && result[y] === 1){
        result[x] = 1;
        limit[y] -= 1;
    }
}

console.log(result.slice(1).join(''));