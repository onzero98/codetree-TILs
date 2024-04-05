const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [t, a, b] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(lines => lines.split(' ').map((v,i)=> i===1 ? parseInt(v): v));

const sP = [];
const nP = [];

arr.forEach(([c, x])=>{
    if (c === 'S') {
        sP.push(x);
    } else {
        nP.push(x);
    }
});

sP.sort((a,b)=>a-b);
nP.sort((a,b)=>a-b);

function find(arr, x){
    let minDiff = Number.MAX_SAFE_INTEGER;
    arr.forEach(v => {
        const curDiff = Math.abs(v - x);
        minDiff = Math.min(minDiff, curDiff);
    })

    return minDiff;
}

let answer = 0;
for(let i = a; i <= b; i++){
    const closesP = find(sP, i);
    const closenP = find(nP, i);

    if(closesP <= closenP){
        answer++;
    }
}

console.log(answer);