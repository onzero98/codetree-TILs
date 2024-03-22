const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let a = input[0].split('');
for(let i = 1; i < a.length; i++){
    if(a[i] === '0'){
        a[i] = '1';
        break;
    }
}

const answer = parseInt(a.join(''), 2)

console.log(answer)