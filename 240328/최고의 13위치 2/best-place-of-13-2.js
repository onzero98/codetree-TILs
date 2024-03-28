const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(line=>line.split(' ').map(Number));

function solution(arr){
    let counts = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n - 2; j++){
            for(let k = 0; k < n; k++){
                for(let l = 0; l < n - 2; l++){
                    if (i === k && Math.abs(j - l) <= 2) {
                        continue;
                    }
                    let c1 = arr[i][j] + arr[i][j+1] + arr[i][j+2];
                    let c2 = arr[k][l] + arr[k][l+1] + arr[k][l+2];
                    counts = Math.max(counts, c1 + c2);
                }
            }
        }
    }
    return counts;
}

const answer = solution(arr);
console.log(answer);