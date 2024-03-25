const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = input[0];

let index = 0;
let count = 0;

while(index < A.length){
    let word = A.slice(index);
    let newIndex = word.indexOf('((');
    
    if(newIndex < 0){
        break;
    } 

    while(word.indexOf('))') > 0){
        word = word.slice(word.indexOf('))')+1);
        count++;
    }

    if(newIndex === 0){
        index++;
    } else {
        index = newIndex+1;
    }
}

console.log(count)