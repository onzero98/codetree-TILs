const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let a = input[0].split('');

function solution(a){

    if(a.length === 1){
        return 0;
    }

    let flag = false;
    
    for(let i = 0; i < a.length; i++){
        if(a[i] === '0'){
            a[i] = '1';
            break;
        }

        if(i === a.length - 1)
            flag = true;
    }

    if(flag){
        for(let i = a.length; i > 0; i--){
            if(a[i] === '1'){
                a[i] = '0';
                break;
            }
        }
    }
    
    return parseInt(a.join(''), 2)
}


const answer = solution(a);
console.log(answer)