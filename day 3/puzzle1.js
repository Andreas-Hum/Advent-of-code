const data = require("./data.json").inputs;

const bit = data[0].length;


let gamma = "";
let epsilon = "";

for(let i = 0; i < bit; i++){

        if(data.map(x => x[i]).filter(x => x == "0").length/data.length < 0.5){
                gamma += "1";
                epsilon += "0";
        } else {
                gamma += "0";
                epsilon += "1";
        }

}

console.log(`Gamma: ${gamma}: decimal ${parseInt(gamma,2)} , Epsilon: ${epsilon}: decimal ${parseInt(epsilon,2)}, Answer: ${parseInt(gamma,2)*parseInt(epsilon,2)}`);

