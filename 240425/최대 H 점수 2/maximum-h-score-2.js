const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const MAX = 100;
const [n, l] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
arr = arr.sort((a,b)=>a-b);

let answer = 0;
for(let i = 0; i <= n - l; i++){
    let tmp = arr.slice();
    
    for(let j = i; j < i + l; j++){
        tmp[j] += 1;
    }

    for(let num = 0; num <= 100; num++){
        const filter = tmp.filter(x=>x>=num).length;
        if(num <= filter){
            answer = Math.max(answer, num);
        }
    }
}

console.log(answer);