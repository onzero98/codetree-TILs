const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const a = new Array(n).fill(0);

for(let i = 1; i <= n; i++){
    a[0] = i;

    for(let j = 1; j < n; j++){
        a[j] = arr[j-1] - a[j-1];
    }

    let flag = true;
    const exist = new Array(1001).fill(false);
    for(let k = 0; k < n; k++){
        if(a[k] <= 0 || a[k] > n){
            flag = false;
        } else {
            if(exist[a[k]]){
                flag = false;
            } 
            exist[a[k]] = true;
        }
    }

    if(flag){
        console.log(a.join(' '));
        return
    }
}