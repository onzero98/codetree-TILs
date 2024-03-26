const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.map(line => line.split(' ').map(Number));
const n = arr.length;

const dir = [[-1, -1],[-1, 0],[-1, 1],[0, -1],[0, 1],[1, -1],[1, 0],[1, 1]];

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(arr[i][j] !== 0){
            let color = arr[i][j];

            for(let k = 0; k < dir.length; k++){
                let count = [];
                for(let l = 0; l < 5; l++){
                    let nx = j + (dir[k][0] * l)
                    let ny = i + (dir[k][1] * l)

                    if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[ny][nx] === color){
                        count.push([ny, nx]);
                    } else {
                        break;
                    }
                }

                if(count.length === 5){
                    console.log(color);
                    console.log(count[2].map(x=>x+1).join(' '));
                    return
                }
            }
        }
    }
}

console.log(0)