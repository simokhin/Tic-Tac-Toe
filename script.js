const players = (function(){
    const playerX = {
        name: "Player",
        sign: "X",
    }

    const playerO = {
        name: "Player2",
        sign: "O",
    }

    return {playerX, playerO};    
})()

const gameBoard = (function() {
    const gameBoardArray = [
        "", "", "",
        "", "", "",
        "", "", "",
    ];

    return {gameBoardArray};
})()

const game = (function() {
    let newGameBoard = gameBoard.gameBoardArray;
     
    function makeMove(player, number){
        
        if (player.sign === "X"){
            newGameBoard[number] = "X"
        }
        else {
            newGameBoard[number] = "O";
        }

        return newGameBoard;
    }

    function check(){
        let status;
        if ((newGameBoard[0] === "X" && newGameBoard[1] === "X" && newGameBoard[2] === "X") ||
            (newGameBoard[3] === "X" && newGameBoard[4] === "X" && newGameBoard[5] === "X") ||
            (newGameBoard[6] === "X" && newGameBoard[7] === "X" && newGameBoard[8] === "X") ||
            (newGameBoard[0] === "X" && newGameBoard[3] === "X" && newGameBoard[6] === "X") ||
            (newGameBoard[1] === "X" && newGameBoard[4] === "X" && newGameBoard[7] === "X") ||
            (newGameBoard[2] === "X" && newGameBoard[5] === "X" && newGameBoard[8] === "X") ||
            (newGameBoard[0] === "X" && newGameBoard[4] === "X" && newGameBoard[8] === "X") ||
            (newGameBoard[2] === "X" && newGameBoard[4] === "X" && newGameBoard[6] === "X")
        ){
            status = "X";
        }
        else if ((newGameBoard[0] === "O" && newGameBoard[1] === "O" && newGameBoard[2] === "O") ||
        (newGameBoard[3] === "O" && newGameBoard[4] === "O" && newGameBoard[5] === "O") ||
        (newGameBoard[6] === "O" && newGameBoard[7] === "O" && newGameBoard[8] === "O") ||
        (newGameBoard[0] === "O" && newGameBoard[3] === "O" && newGameBoard[6] === "O") ||
        (newGameBoard[1] === "O" && newGameBoard[4] === "O" && newGameBoard[7] === "O") ||
        (newGameBoard[2] === "O" && newGameBoard[5] === "O" && newGameBoard[8] === "O") ||
        (newGameBoard[0] === "O" && newGameBoard[4] === "O" && newGameBoard[8] === "O") ||
        (newGameBoard[2] === "O" && newGameBoard[4] === "O" && newGameBoard[6] === "O")
        ){
            status = "O";
        }
        else if (
            newGameBoard[0] !== "" &&
            newGameBoard[1] !== "" &&
            newGameBoard[2] !== "" &&
            newGameBoard[3] !== "" &&
            newGameBoard[4] !== "" &&
            newGameBoard[5] !== "" &&
            newGameBoard[6] !== "" &&
            newGameBoard[7] !== "" &&
            newGameBoard[9] !== ""
        ){
            status = "Draw";
        }
        else {
            status = "Next";
        }
        return status;
    }

    return {makeMove, check, newGameBoard};
})()

const dom = (function() {
    const status = document.querySelector(".status");
    const area = document.querySelectorAll(".area");
    
    const newArea = function(){
        area.forEach(function(element, index){
            element.textContent = `${game.newGameBoard[index]}`;
        })
    }
    newArea();

    let score = 2;

    area.forEach((element, key) => {
        element.addEventListener("click", () => {
            if ((score % 2) === 0){
                game.makeMove(players.playerX, key);
                newArea();
            }
            else {
                game.makeMove(players.playerO, key);
                newArea();
            }

            score++;

            if (game.check() === "X"){
                status.textContent = `${players.playerX.name} win!`
                
            }
            else if (game.check() === "O"){
                status.textContent = `${players.playerO.name} win!`
            }
            else if (game.check() === "Draw"){
                status.textContent = `Draw`
            }
            element.disabled = true;
        })
    })

    const player1name = document.querySelector("#name1")
    const player2name = document.querySelector("#name2")
    const startButton = document.querySelector("#start")

    startButton.addEventListener('click', (event) => {
        event.preventDefault();
        players.playerX.name = player1name.value;
        players.playerO.name = player2name.value;
    })

    return {newArea, area, status};
})()