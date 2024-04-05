const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [t, a, b] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(lines => lines.split(' ').map((v,i)=> i===1 ? parseInt(v): v));
const map = Array(1001).fill(false);
arr.forEach((v)=>{
    const [c, x] = v;
    map[x] = c;
});

let answer = 0;
for(let i = a; i <= b; i++){
    const si = map.indexOf('S');
    const ni = map.indexOf('N') === -1 ? Number.MAX_SAFE_INTEGER : map.indexOf('N');

    if(i !== a && i === si){
        map[ni] = false;
    }
    if(i === ni){
        map[si] = false;    
    }
    if(Math.abs(si - i) <= Math.abs(ni - i)){
        answer++;
    }
}

console.log(answer);