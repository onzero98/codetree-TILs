const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const X = parseInt(input[0]);

let minTime = Infinity;

function dfs(distance, speed, time) {
  if (distance === X && speed === 1) {
    minTime = Math.min(minTime, time);
    return;
  }
  if (distance > X || time >= minTime) {
    return;
  }

  dfs(distance + speed + 1, speed + 1, time + 1);
  dfs(distance + speed, speed, time + 1);

  if (speed > 1) {
    dfs(distance + speed - 1, speed - 1, time + 1);
  }
}

dfs(1, 1, 1);
console.log(minTime);