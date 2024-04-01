const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[0].split(' ').map(Number);

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

let answer = Number.MAX_SAFE_INTEGER;
let combinations = getComb(arr, 3);
combinations.forEach((v)=>{
    let arr1 = v;
    let arr2 = arr.slice();
    
    arr1.forEach(item => {
        const index = arr2.indexOf(item);
        if (index > -1) {
            arr2.splice(index, 1);
        }
    });

    let res1 = arr1.reduce((a,c)=>a+c,0);
    let res2 = arr2.reduce((a,c)=>a+c,0);
    let res = Math.abs(res1 - res2);
    answer = Math.min(answer, res);
});

console.log(answer);