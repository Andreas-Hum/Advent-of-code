const data = require("./data.json").inputs;


function ox(i, data){

        if(data.length == 1){
                return parseInt(data,2);
        }

        if(data.map(x => x[i]).filter(x => x == "0").length/data.length <= 0.5){
                return ox(i+1, data.filter(x => x[i] == "1"))
        } else {
                return ox(i+1, data.filter(x => x[i] == "0"))
        }

}

function co(i, data){

        if(data.length == 1){
                return parseInt(data,2);
        }


        if(data.map(x => x[i]).filter(x => x == "0").length/data.length <= 0.5){
                return co(i+1, data.filter(x => x[i] == "0"))
        } else {
                return co(i+1, data.filter(x => x[i] == "1"))
        }

}

console.log(`${ox(0,data)*co(0,data)}`);

