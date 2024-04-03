const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, d, s] = input[0].split(' ').map(Number);
const eatArr = input.slice(1, d+1).map(lines => lines.split(' ').map(Number));
const res = input.slice(d+1).map(lines => lines.split(' ').map(Number));
const sickTimeArr = Array(n).fill(0);

for(let [p, t] of res){
    sickTimeArr[p-1] = t;
}

let answer = 0;

for(let i = 1; i <= m; i++){ // 치즈만큼 반복
    let eatCheeze = [];
    for(let j = 0; j < d; j++){
        const [p, m, t] = eatArr[j];

        if(i === m){
            eatCheeze.push([p, t]);
        }
    }

    let flag = true;
    for(let [p, t] of eatCheeze){
        if(sickTimeArr[p-1] === 0)
            continue;
        
        if(sickTimeArr[p-1] < t){
            flag = false;
            break;
        }
    }

    if(flag){
        let count = new Set();
        for(let [p, t] of eatCheeze){
            count.add(p);
        }
        answer = Math.max(answer, count.size);
    }
}

console.log(answer)