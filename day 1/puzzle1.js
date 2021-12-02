let depthData = require("./data.json").data;

let answer = 0;



for(let i = 0; i < depthData.length-1; i++){
        let temp = depthData[i];

        if(temp < depthData[i+1]){
                answer++;
        }

        temp = depthData[i+1];
}

console.log(answer);