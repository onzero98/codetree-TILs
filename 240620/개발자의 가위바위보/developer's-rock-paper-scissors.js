const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const CASE = [0, 0, 0];
for(let i = 1; i < input.length; i++){
    const [dev1, dev2] = input[i].split(' ').map(Number);
    
    if((dev1 === 1 && dev2 === 2) || (dev1 === 2 && dev2 === 1)){
        dev1 < dev2 ? CASE[0] += 1 : CASE[0] -= 1;
    }

    if((dev1 === 1 && dev2 === 3) || (dev1 === 3 && dev2 === 1)){
        dev1 < dev2 ? CASE[1] += 1 : CASE[1] -= 1;
    }
    
    if((dev1 === 2 && dev2 === 3) || (dev1 === 3 && dev2 === 2)){
        dev1 < dev2 ? CASE[2] += 1 : CASE[2] -= 1;
    }
}

CASE.sort().reverse();

console.log(CASE[0]+CASE[1]);