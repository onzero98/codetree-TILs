const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const c = input[1].trim().split(' ').map(BigInt);
const [leader, member] = input[2].split(' ').map(BigInt);

let num_leader = 0n;
let num_member = 0n;

for(let customer of c){
    customer -= leader;
    num_leader++;

    while(true){
        if(customer <= 0){
            break;
        }

        customer -= member;
        num_member++;
    }
}

const answer = num_leader + num_member;
console.log(answer.toString())