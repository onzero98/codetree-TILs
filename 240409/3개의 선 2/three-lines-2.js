const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input.slice(1).map(lines => lines.split(' ').map(Number));
const max = 10;
let answer = 0;

for (let i = 0; i <= max; i++) {
    for (let j = 0; j <= max; j++) {
        for (let k = 0; k <= max; k++) {
            let success = true;

            arr.forEach(([x, y]) => {
                if (x === i || x === j || x === k) {
                    return;
                }
                
                success = false;
            });
            if (success) {
                answer = 1;
            }

            success = true;
            arr.forEach(([x, y]) => {
                if (x === i || x === j || y === k) {
                    return;
                }
                
                success = false;
            });
            if (success) {
                answer = 1;
            }
                
            success = true;
            arr.forEach(([x, y]) => {
                if (x === i || y === j || y === k) {
                    return;
                }
                
                success = false;
            });
            if (success) {
                answer = 1;
            }

            success = true;
            arr.forEach(([x, y]) => {
                if (y === i || y === j || y === k) {
                    return;
                }
                
                success = false;
            });

            if (success) {
                answer = 1;
            }
        }
    }
}

console.log(answer);