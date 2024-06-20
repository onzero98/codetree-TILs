const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const arr = input.slice(1).map(x => x.split(' ').map(Number));

const mappings = [
    {1: '가위', 2: '바위', 3: '보'},
    {1: '가위', 2: '보', 3: '바위'},
    {1: '바위', 2: '가위', 3: '보'},
    {1: '바위', 2: '보', 3: '가위'},
    {1: '보', 2: '가위', 3: '바위'},
    {1: '보', 2: '바위', 3: '가위'}
];

const winConditions = {
    '가위': '보',
    '바위': '가위',
    '보': '바위'
};

let maxWins = 0;

for (const mapping of mappings) {
    let currentWins = 0;

    for (const [dev1, dev2] of arr) {
        const dev1Choice = mapping[dev1];
        const dev2Choice = mapping[dev2];

        if (winConditions[dev1Choice] === dev2Choice) {
            currentWins++;
        }
    }

    maxWins = Math.max(maxWins, currentWins)
}

console.log(maxWins);