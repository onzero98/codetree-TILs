const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const lines = input.slice(1).map(lines => lines.split(' ').map(Number));

let count = 0;
for(let i = 0; i < n; i++){
    for(let j = i + 1; j < n; j++){
        for(let k = j + 1; k < n; k++){
            let tmp = lines.slice();
            delete tmp[i];
            delete tmp[j];
            delete tmp[k];
            const remain = tmp.filter(x=>x).sort((a,b)=>a[0]-b[0]);
            
            if(remain.length !== 1){
                let flag = true;
                for(let l = 0; l < remain.length - 1; l++){
                    const [s1, e1] = remain[l];
                    const [s2, e2] = remain[l+1];

                    if(e1 >= s2){
                        flag = false;
                        break;
                    }
                }
                if(flag){
                    count++;
                }
            } else {
                count++;
            }
        }
    }
}

console.log(count)