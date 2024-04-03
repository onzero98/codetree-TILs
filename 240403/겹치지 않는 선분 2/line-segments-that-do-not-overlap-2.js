const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(line => line.split(' ').map(Number));
arr.sort((a,b)=>a[0]-b[0]);

const matched = Array(n).fill(false);

for(let i = 0; i < n; i++){
    let [s1, e1] = arr[i];
    for(let j = i + 1; j < n; j++){
        let [s2, e2] = arr[j];
        if(e1 > e2){
            matched[i] = true;
            matched[j] = true;
        }
    }
}

const answer = matched.filter(x=>!x).length;
console.log(answer);