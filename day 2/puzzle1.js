let data = require('./commands.json');
let horizontal = 0, depth = 0;

for(let item in data.commands){
        switch(data.commands[item].command) {
                case "forward":
                        horizontal += Number(data.commands[item].value)
                break;

                case "up":
                        depth -= Number(data.commands[item].value)
                break;

                case "down":
                        depth += Number(data.commands[item].value)
                break;

        }
}

console.log(`Horizontal: ${horizontal} depth: ${depth} multiple: ${horizontal*depth}`)