const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

function getComb(arr, n){
    if(n === 1)
        return arr.map(x=> [x]);
    
    let res = [];
    arr.forEach((fix, idx, origin)=>{
        const rest = origin.slice(idx+1);
        const comb = getComb(rest, n-1);
        const atta = comb.map(x=>[fix, ...x]);
        res.push(...atta);
    });

    return res;
}

const makes = getComb(arr, n-2);
const answer = makes.map(x=> Math.abs(x.reduce((a,c)=>a+c,0) - s));
console.log(Math.min(...answer));