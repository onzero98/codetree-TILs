const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(lines => lines.split(' ').map(Number));
const xarr = Array(11).fill(0);
const yarr = Array(11).fill(0);

for(let i = 0; i < n; i++){
    const [x, y] = arr[i];
    xarr[x] += 1;
    yarr[y] += 1;
}

if(xarr.filter(x=>x!==0).length <= 3 || xarr.filter(y=>y!==0).length <= 3){
    console.log(1)
} else if(xarr.filter(x=>x===Math.max(...xarr)).length + yarr.filter(y=>y===Math.max(...yarr)).length === 3){
    console.log(1)
} else {
    console.log(0)
}