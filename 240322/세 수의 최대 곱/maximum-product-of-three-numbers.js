const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);

function getComb(arr, n){
    if(n===1)
        return arr.map(x=>[x]);
    
    let res = [];
    arr.forEach((fix, idx, ori)=>{
        const rest = ori.slice(idx+1);
        const comb = getComb(rest, n-1);
        const atta = comb.map(x=>[fix, ...x]);
        res.push(...atta);
    });

    return res;
}

const list = getComb(arr, 3);
const answer = list.map(x=>x.reduce((a,c)=>a*c,1))
console.log(Math.max(...answer));