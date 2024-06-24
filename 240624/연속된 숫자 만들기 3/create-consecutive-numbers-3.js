const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[0].split(' ').map(Number);
let result = 0;

function solution(array) {
    let [st, nd, rd] = array;
    let count = 0;

    while (st + 1 < nd || nd + 1 < rd) {
        if (st + 1 < nd) {
            st = st + 1;
            count++;
        }
        if (nd + 1 < rd) {
            nd = nd - 1;
            count++;
        }
    }

    result = count;
}

solution(arr);
console.log(result);