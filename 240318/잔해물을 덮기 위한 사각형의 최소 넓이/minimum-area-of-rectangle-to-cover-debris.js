const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = Array.from({length:2001}, x=>Array(2001).fill(0));

for(let i = 0; i < 2; i++){
    const [a,b,c,d] = input[i].split(' ').map(Number);
    let [x1, y1, x2, y2] = [a+1000, b+1000, c+1000, d+1000];
    x1 < x2 ? null : [x1, x2] = [x2, x1];
    y1 < y2 ? null : [y1, y2] = [y2, y1];
    
    for(let j = y1; j < y2; j++){
        for(let k = x1; k < x2; k++){
            if(i===0){
                arr[j][k] += 1;
            } else {
                arr[j][k] = 0;
            }
        }
    }
}

const answer = arr.map(x=>x.filter(y=>y>0).length).filter(x=>x!==0);
console.log(Math.max(...answer)*answer.length);