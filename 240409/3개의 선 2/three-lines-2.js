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

function canCover(arr) {

    let linesNeeded = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            linesNeeded++;
        }
    }
    return linesNeeded <= 3;
}

if (canCover(xarr) || canCover(yarr)) {
    console.log(1);
} else {
    console.log(0);
}