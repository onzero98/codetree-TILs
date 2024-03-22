const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const sum = [];
for(let i = 0; i < n; i++){
    let point = arr[i];
    let hap = point;
    for(let j = 0; j < m-1; j++){
        hap += arr[point-1]
        point = arr[point-1];
    }

    sum.push(hap);
}

console.log(Math.max(...sum))