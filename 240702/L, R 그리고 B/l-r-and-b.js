const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const grid = input.map(line => line.split(''));
const directions = [
  [-1, 0], [1, 0], [0, -1], [0, 1]
];

let start, end, block;

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (grid[i][j] === 'L') {
      start = [i, j];
    } else if (grid[i][j] === 'R') {
      block = [i, j];
    } else if (grid[i][j] === 'B') {
      end = [i, j];
    }
  }
}

function bfs() {
  const queue = [];
  const visited = Array.from({ length: 10 }, () => Array(10).fill(false));
  queue.push([...start, 0]);
  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const [row, col, dist] = queue.shift();

    if (row === end[0] && col === end[1]) {
      return dist;
    }

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (newRow >= 0 && newRow < 10 && newCol >= 0 && newCol < 10 &&
          !visited[newRow][newCol] && grid[newRow][newCol] !== 'R') {
        visited[newRow][newCol] = true;
        queue.push([newRow, newCol, dist + 1]);
      }
    }
  }

  return -1;
}

const result = bfs();
console.log(result);