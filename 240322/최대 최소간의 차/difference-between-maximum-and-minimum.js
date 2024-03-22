const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
arr.sort((a,b)=>a-b);

let min = arr[0];
let max = arr[arr.length-1];
let answer = Number.MAX_SAFE_INTEGER;

for(let i = min; i <= max-k; i++){
  let start = i;
  let end = i + k;
  let price = 0;

  for(let j = 0; j < arr.length; j++){
    if(arr[j] >= start && arr[j] <= end)
      continue;
    if(arr[j] > end){
      price += arr[j] - end;
    } else if(arr[j] < start){
      price += start - arr[j];
    }
  }

  answer = Math.min(answer, price);
}

console.log(answer);