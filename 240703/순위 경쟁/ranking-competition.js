const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const grid = input.map(line => line.split(''));

console.log(grid);