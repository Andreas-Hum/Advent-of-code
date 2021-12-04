const fs = require('fs');
const readline = require('readline');


let input = [];
let numbers = [];
let bingoBoard = [];
let bingoSize = 4;


async function puzzle1(){
        const stream = fs.createReadStream("./input.txt");
        const rl = readline.createInterface({
                input: stream,
                crlfDelay: Infinity
        })

        for await (const line of rl){
                input.push(line);
        }

        numbers = pickOrder(input.shift());
        bingoBoard = boardOrder(input);

        console.log(bingoBoard[0])

}

function boardOrder(input){
        let times = 0;

        let rows = [];
        let column = [];
        let board = [];

        for (let i = 0; i < input.length; i++){
                if(input[i].length != 0){
                        rows.push(input[i].replace(/\s+/g, ' ').split(' '));
                        times++;
                }
                if(times == 5) {
                        for(let j = 0; j <5; j++){
                                for(let k = 0; k <5; k++ ){
                                        column.push(rows[k][j]);
                                }

                              rows.push(column.flat());
                              column = [];
                        }

                        board.push(rows);
                        rows = []
                        times = 0;
                }

        }

        return board;
}

function pickOrder(input){
        let arr = [];
        let str =  "";

        for (let i = 0; i < input.length; i++){

                if(input[i] == ","){
                        arr.push(str);
                        str = "";
                } else {
                        str += input[i];
                }

        }


        return arr;

};

puzzle1();

