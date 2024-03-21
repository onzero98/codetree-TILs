const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const [r, c, d] = input[1].split(' ');

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function check(dir){
    switch(dir){
        case 'U':
            return 0;
        case 'D':
            return 1;
        case 'R':
            return 2;
        case 'L':
            return 3;
    }
}

function solution(n, t, r, c, d){
    let x = parseInt(r) - 1;
    let y = parseInt(c) - 1;
    let way = d;

    for(let i = 1; i <= t; i++){
        let dir = check(way);

        const nx = x + dx[dir];
        const ny = y + dy[dir];
        
        if(nx >= 0 && nx < n && ny >= 0 && ny < n){
            x = nx;
            y = ny;
        } else {
            switch(way){
                case 'U':
                    way = 'D';
                    break;
                case 'D':
                    way = 'L';
                    break;
                case 'D':
                    way = 'U';
                    break;
                case 'L':
                    way = 'R';
                    break;
            }
        }
    }

    return [x+1, y+1];
}

const answer = solution(n, t, r, c, d);
console.log(answer.join(' '));