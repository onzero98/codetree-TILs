const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const X = parseInt(input[0]);

function minTimeToReachX(X) {
    const queue = [[1, 1, 1]];
    
    while (queue.length > 0) {
        const [dist, speed, time] = queue.shift();
        
        if (dist === X && speed === 1) {
            return time;
        }
        
        const nextStates = [
            [dist + speed, speed, time + 1], 
            [dist + speed + 1, speed + 1, time + 1],
            [dist + speed - 1, speed - 1, time + 1] 
        ];
        
        for (const [nextDist, nextSpeed, nextTime] of nextStates) {
            if (nextSpeed > 0) {
                queue.push([nextDist, nextSpeed, nextTime]);
            }
        }
    }
}

console.log(minTimeToReachX(X));