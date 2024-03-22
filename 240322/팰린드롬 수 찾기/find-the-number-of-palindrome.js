const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number); 

let answer = 0;
for(let i = x; i <= y; i++){
    const num = i.toString();
    const index = ~~(num.length/2);

    const right = num.length % 2 === 0 ? num.slice(0,index) : num.slice(0, index+1);
    const left = num.slice(index);

    if(right === left.split('').reverse().join('')){
        answer++;
    }
}

console.log(answer);