const fs = require('fs');
const readline = require('readline');


let input = [];
let numbers = [];
let bingoBoard = [];
let answerArray = [];
let win = [];


let sum = 0;

let bingoBongo = false; 

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
        let length = numbers.length;
        let zeroArr = '00000';
        loops();

        function loops(){
                for(let i = 0; i < length+1; i++){
                        answerArray.push(numbers.shift())
                        for(let j = 0; j < bingoBoard.length; j++){
                                for(let k = 0; k < bingoBoard[j].length; k++){
                                        for(let c = 0; c < bingoBoard[j][k].length; c++){
                                                if(bingoBoard[j][k][c] == answerArray[i]){
                                                        bingoBoard[j][k][c] = '0';
                                                        if(bingo()){
                                                                return;
                                                        }
        
                                                }
                                        }
        
                                }
                        }
                }
        }
        

        
        function bingo(){
                for(let j = 0; j < bingoBoard.length; j++){
                        for(let k = 0; k < bingoBoard[j].length; k++){
                                if(bingoBoard[j][k].join("") == '00000' ){
                                        console.log("BINGO")
                                        win = bingoBoard[j];
                                        return true;
                                }

                        }
                }
        }

        let sumArr = win.slice(0,5);

        const summer = (prev,cur) => Number(prev) + Number(cur);

        for(let i = 0; i < sumArr.length; i++){
                sum += sumArr[i].reduce(summer);
        }
        console.log(sum*Number(answerArray.pop()))


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

