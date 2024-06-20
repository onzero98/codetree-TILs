const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const arr = input.slice(1).map(x=>x.split(' ').map(Number));

let answer = 0;
for(let i = 1; i <= 3; i++){
    const R = i;
    const S = i + 1 > 3 ? (i + 1) % 3 : i + 1;
    const P = i + 2 > 3 ? (i + 2) % 3 : i + 2;

    let wins = 0;
    for(let [dev1, dev2] of arr){

        if((dev1 === R && dev2 === S) || (dev1 === S && dev2 === P) || (dev1 === P && dev2 === R)){
            wins++;
        }
    }

    answer = Math.max(answer, wins);
}

console.log(answer);