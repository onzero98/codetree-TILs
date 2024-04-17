const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = parseInt(input[0]);
const word = input[1]

function solution(n, word) {
    for(let len = 1; len <= n; len++){ 
        let seen = new Set();
        let isUnique = true;

        for(let i = 0; i <= n - len; i++){
            const substr = word.substring(i, i + len); 
            if (seen.has(substr)) {
                isUnique = false;
                break;
            }
            seen.add(substr);
        }

        if(isUnique){
            return len;
        }
    }

    return n;
}

const answer = solution(n, word);
console.log(answer);