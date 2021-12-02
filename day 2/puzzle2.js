let data = require('./commands.json');
let horizontal = 0, depth = 0, aim = 0;

for(let item in data.commands){
        switch(data.commands[item].command) {
                case "forward":
                        horizontal += Number(data.commands[item].value)
                        depth += Number(data.commands[item].value)*aim
                break;

                case "up":
                       aim -= Number(data.commands[item].value)
                break;

                case "down":
                        aim += Number(data.commands[item].value)
                break;

        }
}

console.log(`Horizontal: ${horizontal} depth: ${depth} multiple: ${horizontal*depth}`)