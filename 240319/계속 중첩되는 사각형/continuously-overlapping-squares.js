const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = Array.from(({length:201}), x => Array(201).fill(''));

for(let i = 1; i <= n; i++){
    const [a, b, c, d] = input[i].split(' ').map(Number);
    const [x1, y1, x2, y2] = [a+100, b+100, c+100, d+100];

    for(let j = y1; j < y2; j++){
        for(let k = x1; k < x2; k++){
            let c = i % 2 === 0 ? 'B' : 'R';
            arr[j][k] += c;
        }
    }
}

const results = arr.map(x=> x.filter(x => x !== '')).filter(x => x.length > 0);

let answer = 0;
for(let items of results){
    for(let i = 0; i < items.length; i++){
        if(items[i][items[i].length-1] === 'B'){
            answer++;
        }
    }
}

console.log(answer);