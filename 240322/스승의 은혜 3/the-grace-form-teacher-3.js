const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(x=>x.split(' ').map(Number));

const list = arr.sort((a,b)=>(b[0] + b[1]) - (a[0] + a[1]));

function solution(list){
    for(let i = 0; i < n; i++){
        let use = list.slice(i);
        let sum = 0;
        let p = 0;
        
        for(let j = 0; j < use.length; j++){
            if(sum <= b){
                if(j===0){
                    sum += use[0][0] / 2;
                    sum += use[0][1];
                    p++;
                } else {
                    sum += use[j][0] / 2;
                    sum += use[j][1];
                    p++;
                }
            } else {
                p = 0;
                break;
            }
        }

        if(p !== 0){
            return p;
        }
    }
}

const answer = solution(list);
console.log(answer);