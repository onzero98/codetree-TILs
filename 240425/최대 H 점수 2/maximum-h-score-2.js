const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, l] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
arr = arr.sort((a,b)=>a-b);

for(let i = 0; i < l; i++){
    arr[i] += 1;
}

let answer = 0;
for(let item of arr){
    const filtered = arr.filter((v)=> v >= item).length;
    if(filtered >= item){
        answer = Math.max(answer, item);
    }
}

console.log(answer);