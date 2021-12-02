let depthData = require("./data.json").data;

let sum = 0;
let sums = [];


let answer = 0;


for(let i = 0; i < depthData.length; i++){
        sum += depthData[i];

        if(i >= 2 ){
                sums.push(sum);
                sum -= depthData[i-2];
        }
}


for(let i = 0; i < sums.length-1; i++){
        let temp = sums[i];

        if(temp < sums[i+1]){
                answer++;
        }

        temp = sums[i+1];
}

console.log(answer);