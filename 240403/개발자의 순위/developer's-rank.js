const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const res = input.slice(1).map(lines => lines.split(' ').map(Number));
let ranks = [];

for(let l = 0; l < k; l++){
    const rank = res[l];
    let filtered = [];
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(l === 0){
                ranks.push([rank[i], rank[j]]);
            } else {
                let check = [rank[i], rank[j]];
                if(ranks.some(e => e.length === check.length && e.every((v, i) => v === check[i]))){
                    filtered.push(check);
                }
            }
        }
    }
    if(l !== 0){
        ranks = filtered.slice();
    }
}

console.log(ranks.length)