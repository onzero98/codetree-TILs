const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
let A = Array(n).fill(0).map((x,i)=>x=i+1);
let sample = [];

function solution(cur, A){
    if(cur.length === n){
        sample.push(parseInt(cur.join('')));
    }
    // console.log(cur, arr)
    for(let i = 0; i < A.length; i++){
        let num = A[i];
        let tmp = cur.slice();
        tmp.push(num);
        let arr2 = A.slice();
        delete arr2[i];
        arr2 = arr2.filter(x=>x);

        let flag = true;
        if(tmp.length > 1){
            for(let j = 0; j < tmp.length - 1; j++){
                if(tmp[j] + tmp[j+1] !== arr[j]){
                    flag = false;
                }
            }
        }

        if(flag){
            solution(tmp, arr2);
        }
    }
}

solution([], A);
sample = sample.sort((a,b)=>a-b);
const answer = sample[0];
console.log(answer)