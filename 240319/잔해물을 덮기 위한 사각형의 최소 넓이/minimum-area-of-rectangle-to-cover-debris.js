const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

function calc(rect1, rect2) {
    let [x1, y1, x2, y2] = rect1;
    let [x3, y3, x4, y4] = rect2;
    
    // 겹치는 부분의 좌표를 계산
    const overlapX = Math.max(0, Math.min(x2, x4) - Math.max(x1, x3));
    const overlapY = Math.max(0, Math.min(y2, y4) - Math.max(y1, y3));

    const area = (x2 - x1) * (y2 - y1);
    const overlapArea = overlapX * overlapY;

    return area - overlapArea;
}

const answer = calc(rect1, rect2);
console.log(answer);