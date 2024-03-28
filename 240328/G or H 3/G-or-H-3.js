const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(line=>line.split(' '));
arr.forEach(x=> x[0] = parseInt(x[0]));
arr.sort((a,b)=> a[0] - b[0])

let max = 0;

for(let i = 0; i < n; i++){
    let start = arr[i][0];
    let end = arr[i][0] + k;
    let count = 0;

    for(let j = start; j <= end; j++){
        let res = arr.find(e => e[0] === j);
        if(res){
            if(res[1] === 'G'){
                count += 1;
            } else {
                count += 2;
            }
        }
    }
    max = Math.max(max, count);
}

console.log(max)