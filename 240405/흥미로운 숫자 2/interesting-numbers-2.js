const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

let count = 0;
for(let i = x; i <= y; i++){
    let nums = i.toString().split('').map(Number);
    let key1 = nums.filter(x=>x===nums[0]);

    if(nums.length - key1.length === 1){
        count++
    } else if(key1.length === 1){
        let key2 = nums.filter(x=>x===nums[1]);
        if(nums.length - key2.length === 1){
            count++;
        }
    }
}

console.log(count);