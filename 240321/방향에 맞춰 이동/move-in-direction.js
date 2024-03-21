const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map((x)=>x.split(' '));
let map = Array(2001).fill(0);

const dx = [1, 0, 0, -1];
const dy = [0, 1, -1, 0];
const dir = ['W', 'S', 'N', 'E'];
let sp = [1000, 1000];

for(let [d, m] of arr){
    const way = dir.indexOf(d);
    sp[0] = sp[0] + m * dx[way];
    sp[1] = sp[1] + m * dy[way];
}

let x = (sp[0]-1000) !== 0 ? -(sp[0]-1000) : 0;
let y = (sp[1]-1000) !== 0 ? -(sp[1]-1000) : 0;

console.log(x, y)