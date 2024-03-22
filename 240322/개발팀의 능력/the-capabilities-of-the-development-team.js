const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[0].split(' ').map(Number);

function calculateMinDifference(abilities) {

    abilities.sort((a, b) => a - b);
    let minDiff = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < abilities.length; i++) {
        for (let j = i + 1; j < abilities.length; j++) {
            
            for (let k = 0; k < abilities.length; k++) {
                for (let l = k + 1; l < abilities.length; l++) {
                    // 중복 체크
                    if (new Set([i, j, k, l]).size !== 4) continue;

                    // 남은 한 명
                    const remaining = [0, 1, 2, 3, 4].filter(x => ![i, j, k, l].includes(x));

                    const team1 = abilities[i] + abilities[j];
                    const team2 = abilities[k] + abilities[l];
                    const team3 = abilities[remaining[0]];

                    const teamAbilities = [team1, team2, team3].sort((a, b) => a - b);

                    if (new Set(teamAbilities).size !== 3) continue;

                    const difference = teamAbilities[2] - teamAbilities[0];
                    minDiff = Math.min(minDiff, difference);
                }
            }
        }
    }

    return minDiff === Number.MAX_SAFE_INTEGER ? -1 : minDiff;
}

console.log(calculateMinDifference(arr));