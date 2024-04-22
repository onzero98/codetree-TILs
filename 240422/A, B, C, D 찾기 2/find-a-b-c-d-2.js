const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[0].split(' ').map(Number);
arr.sort((a, b) => a - b);

const sumABCD = arr[arr.length - 1];

let A, B, C, D;
for (let i = 0; i < arr.length - 3; i++) {
  for (let j = i + 1; j < arr.length - 2; j++) {
    for (let k = j + 1; k < arr.length - 1; k++) {
      A = arr[i];
      B = arr[j];
      C = arr[k];
      D = sumABCD - (A + B + C); // sumABCD에서 A, B, C를 뺀 값이 D
      if (arr.includes(A + B) && arr.includes(B + C) && arr.includes(C + D) && arr.includes(D + A) && arr.includes(A + C) && arr.includes(B + D)) {
        console.log(A, B, C, D);
        return;
      }
    }
  }
}