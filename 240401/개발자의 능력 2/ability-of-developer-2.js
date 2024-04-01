const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[0].split(' ').map(Number);

function getTeams(arr) {
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const firstTeam = [arr[i], arr[j]];
      
      // 두 번째 팀
      for (let k = 0; k < arr.length; k++) {
        for (let l = k + 1; l < arr.length; l++) {
          if (!firstTeam.includes(arr[k]) && !firstTeam.includes(arr[l])) {
            const secondTeam = [arr[k], arr[l]];
            
            // 세 번째 팀
            const remaining = arr.filter(x => !firstTeam.includes(x) && !secondTeam.includes(x));
            if (remaining.length === 2) {
              const thirdTeam = remaining.reduce((a,c)=>a+c,0);
              results.push([arr[i]+arr[j], arr[k]+arr[l], thirdTeam]);
            }
          }
        }
      }
    }
  }
  
  return results;
}

let teamsDiff = getTeams(arr).map(x=>{
    const max = Math.max(...x);
    const min = Math.min(...x);
    return max - min;
});

console.log(Math.min(...teamsDiff));