const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(line => line.split(' ').map(Number));

let answer = 0;
for(let i = 0; i < n; i++){
    let tmp = arr.slice();
    delete tmp[i];
    const filtered = tmp.filter(x=>x).sort((a,b)=> a[0] - b[0]);
    
    let lastEnd = 0;
    let times = 0;
    for(let j = 0; j < filtered.length; j++){
        const [start, end] = filtered[j];
        times += end - (start < lastEnd ? lastEnd : start);
        lastEnd = end;
    }
    answer = Math.max(answer, times);
}

console.log(answer);