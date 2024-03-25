const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const nums = input.slice(1).map(Number)
let max = -1;

function select(a, b, c){
    let arr = [a, b, c];
    arr = arr.map(x=>x.toString().split('').reverse().map(Number));
    let len = Math.max(...arr.map(x=>x.length));

    for(let i = 0; i < len; i++){
        let sum = 0;
        for(let j = 0; j < 3; j++){
            sum += arr[j][i] || 0;
        }

        if(sum >= 10){
            return false
        }
    }

    return true;
}

for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
        for(let k = j + 1; k < n; k++){
            if(select(nums[i], nums[j], nums[k])){
                let sum = nums[i] + nums[j] + nums[k];
                max = Math.max(max, sum);
            }
        }
    }
}

console.log(max);