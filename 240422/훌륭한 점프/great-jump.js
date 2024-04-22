const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

function solution(n, k, arr) {
    let dp = new Array(n).fill(Infinity); // 최소 최댓값을 저장할 배열, 초기값은 무한대
    dp[0] = arr[0]; // 첫 번째 돌은 시작점이므로 해당 값으로 초기화

    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) {
                dp[i] = Math.min(dp[i], Math.max(dp[i - j], arr[i]));
            }
        }
    }

    return dp[n - 1]; // n번 돌에 도달했을 때의 최소 최댓값 반환
}

const answer = solution(n, k, arr);
console.log(answer);