const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let a = input[0].split('');

function solution(a){
    for(let i = 0; i < a.length; i++){
        if(a.length === 1){
            return 0;
        }
        if(a[i] === '0'){
            a[i] = '1';
            break;
        }
    }
    return parseInt(a.join(''), 2)
}


const answer = solution(a);
console.log(answer)