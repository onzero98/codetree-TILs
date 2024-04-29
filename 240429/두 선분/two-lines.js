const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [x1, x2, x3, x4] = input[0].split(' ').map(Number);

if (Math.max(x1, x3) <= Math.min(x2, x4)) {
    console.log("intersecting");
} else {
    console.log("nonintersecting");
}