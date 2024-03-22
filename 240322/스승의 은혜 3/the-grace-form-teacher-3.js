const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);
const list = input.slice(1).map(x=>x.split(' ').map(Number));

function solution(n, b, list){
    let count = 0;

    for(let i = 0; i < n; i++){
        let budget = b - (list[i][0] / 2 + list[i][1]);
        let students = 1;
        let prices = [];

        for (let j = 0; j < n; j++) {
            if (i !== j) { // 쿠폰 사용 학생 제외
                prices.push(list[j][0] + list[j][1]);
            }
        }

        prices.sort((a, b) => a - b);

        for (let price of prices) {
            if (budget >= price) {
                budget -= price;
                students++;
            } else {
                break;
            }
        }

        count = Math.max(count, students);
    }

    return count
}

const answer = solution(n, b, list);
console.log(answer);