let depthData = require("./data.json").data;
let i = 0;

const answer = depthData.filter(
        x => {
                i++;
                return x < depthData[i];
        }
)

console.log(answer.length)