const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

const arr = Array.from({length:201}, x=>Array(201).fill(0));

for(let i = 1; i <= n; i++){
    const [a,b] = input[i].split(' ').map(Number);
    let [x1, y1, x2, y2] = [a+100, b+100, a+108, b+108];
    x1 < x2 ? null : [x1, x2] = [x2, x1];
    y1 < y2 ? null : [y1, y2] = [y2, y1];
    
    for(let j = y1; j < y2; j++){
        for(let k = x1; k < x2; k++){
            arr[j][k] += 1;
        }
    }
}

const answer = arr.map(x=>x.filter(y=>y>0).length).filter(x=>x!==0).reduce((a,c)=>a+c,0);
console.log(answer);