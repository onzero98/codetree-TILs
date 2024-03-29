const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);
let count = 0;
for(let i = 0; i < a.length; i++){
    if(b.includes(a[i])){
        let diff = [];
        for(let j = i + b.length - 1; j > i - 1; j--){
            if(j >= a.length){
                break;
            }
            diff.push(a[j]);
        }
        b.sort();
        diff.sort();
        if(b.every((v,i)=>v===diff[i])){
            count++;
        }
    }
}

console.log(count)