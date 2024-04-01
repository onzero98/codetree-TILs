const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const [a1, b1, c1] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

function checkInRange(x, y){
    const distance = Math.min(Math.abs(x - y), n - Math.abs(x - y));
    return distance <= 2;
};

let count = 0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
            if ((checkInRange(i, a1) && checkInRange(j, b1) && checkInRange(k, c1)) || 
                (checkInRange(i, a2) && checkInRange(j, b2) && checkInRange(k, c2))) {
                count++;
            }
        }
    }
}

console.log(count);