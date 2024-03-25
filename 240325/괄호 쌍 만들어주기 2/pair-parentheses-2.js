const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = input[0];
let count = 0;

for(let i = 0; i < A.length; i++){
    let word = A.slice(i);
    let ni = word.indexOf('((');

    if(ni < 0)
        break;
    
    for(let j = 0; j < word.length; j++){
        let nword = word.slice(j);
        if(nword.indexOf('))') >= 0){
            j += nword.indexOf('))');
            count++
        }
    }

    i += ni;
}

console.log(count)