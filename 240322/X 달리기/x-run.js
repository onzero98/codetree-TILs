const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

const use = [0, 1, -1];
const run = [];

function make(cur, arr){
    let sum = arr.reduce((a,c)=>a+c,0);

    if(cur < 1 || sum > n){
        return
    }

    if(sum === n && arr[arr.length-1] === 1){
        run.push(arr);
    }

    for(let speed of use){
        const newArr = arr.slice();
        newArr.push(cur+speed);
        make(cur+speed, newArr)
    }
}

if(n < 4){
    console.log(n);
} else {
    make(1, [1]);
    const answer = run.map(x=>x.length);
    console.log(Math.min(...answer));
}