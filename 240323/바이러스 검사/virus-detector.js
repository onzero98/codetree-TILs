const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const c = input[1].trim().split(' ').map(Number);
const [leader, member] = input[2].split(' ').map(Number);

let num_leader = 0;
let num_member = 0;

for(let customer of c){
    customer -= leader;
    num_leader++;

    if(customer > 0){
        num_member += Math.ceil(customer/member);
    }
}

const answer = num_leader + num_member;
console.log(answer.toString())