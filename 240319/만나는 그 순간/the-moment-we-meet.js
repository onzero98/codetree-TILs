const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const A = input.slice(1,n+1);
const B = input.slice(n+1, n+m+1);

function timeStamp(arr){
    let time = 1;
    let position = 0;
    const history = {};

    for(let stamp of arr){
        const [d, t] = stamp.split(' ');
        for(let i = 0; i < parseInt(t); i++){
            history[time] = d === 'L' ? position -= 1 : position += 1;
            time++; 
        }
    }

    return history;
}

const A_history = timeStamp(A);
const B_history = timeStamp(B);
const time = Object.keys(A_history).length;

for(let i = 0; i < time; i++){
    const Akey = Object.keys(A_history)[i];
    const Bkey = Object.keys(B_history)[i];
    const AVal = Object.values(A_history)[i];
    const BVal = Object.values(B_history)[i];
    
    if(Akey === Bkey && AVal === BVal){
        console.log(i+1);
        break;
    } else if(i === time - 1){
        console.log(-1);
    }
}