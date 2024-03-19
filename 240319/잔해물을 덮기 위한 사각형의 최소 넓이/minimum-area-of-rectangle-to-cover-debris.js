const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

function calc(rect1, rect2) {
    let [x1, y1, x2, y2] = rect1;
    let [x3, y3, x4, y4] = rect2;
    let minRect = (x2 - x1) * (y2 - y1);

    if(y3 <= y1 && y2 <= y4){
        if(x3 <= x2 && x2 <= x4){
            minRect = (x3 - x1) * (y2 - y1);
        }

        if(x4 <= x2 && x3 <= x1){
            minRect = (x2 - x4) * (y2 - y1);
        }
        
        if(x3 <= x1 && x2 <= x4){
            minRect = 0;
        }
    }

    if(x3 <= x1 && x2 <= x4){
        if(y3 <= y2 && y2 <= y4){
            minRect = (y3 - y1) * (x2 - x1);
        }

        if(y4 <= y2 && y3 <= y1){
            minRect = (y2 - y4) * (x2 - x1);
        }
        
        if(y3 <= y1 && y2 <= y4){
            minRect = 0;
        }
    }

    return minRect;
}

const answer = calc(rect1, rect2);
console.log(answer);