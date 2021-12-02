let depthData = require("./data.json").data;
let answer = 0;

function puzzle(data, i, prev){

        if(data[i] === undefined){
                return answer;
        }

        if(prev < data[i]){
                answer+=1;
        }

        return puzzle(data, i+1, data[i])

}

console.log(puzzle(depthData,0));