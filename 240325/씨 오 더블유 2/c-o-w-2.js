const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const word = input[1].split('');
let count = 0;

for(let i = 0; i < n; i++){
    if(word[i] === 'C'){
        for(let j = i + 1; j < n; j++){
            if(word[j] === 'O'){
                for(let k = j + 1; k < n; k++){
                    if(word[k] === 'W'){
                        count++;
                    }
                }
            }
        }
    }
}

console.log(count)