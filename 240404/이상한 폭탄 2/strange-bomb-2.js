const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const bombsMap = input.slice(1).map(Number);
const bombsNum = new Set(bombsMap);

let answer = -1;
for(let bombnum of bombsNum){
    let dist = [];
    for(let i = 0; i < n; i++){
        if(bombsMap[i] === bombnum){
            dist.push(i);
        }
    }

    if(dist.length !== 1 && dist.some((v,i)=>dist[i+1]-dist[i] <= k)){
        answer = Math.max(answer, bombnum);
    }
}

console.log(answer);