const players = (function(){
    const playerX = {
        name: "Player",
        sign: "X",
        chooseName: function(name) {
            this.name = name;
        } 
    }

    const playerO = {
        name: "Player2",
        sign: "O",
        chooseName: function(name) {
            this.name = name;
        } 
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
        console.log(newGameBoard);
        return newGameBoard;
    }

    function whoWin(){
        if ((newGameBoard[0] === "X" && newGameBoard[1] === "X" && newGameBoard[2] === "X") ||
            (newGameBoard[3] === "X" && newGameBoard[4] === "X" && newGameBoard[5] === "X") ||
            (newGameBoard[6] === "X" && newGameBoard[7] === "X" && newGameBoard[8] === "X") ||
            (newGameBoard[0] === "X" && newGameBoard[3] === "X" && newGameBoard[6] === "X") ||
            (newGameBoard[1] === "X" && newGameBoard[4] === "X" && newGameBoard[7] === "X") ||
            (newGameBoard[2] === "X" && newGameBoard[5] === "X" && newGameBoard[8] === "X") ||
            (newGameBoard[0] === "X" && newGameBoard[4] === "X" && newGameBoard[8] === "X") ||
            (newGameBoard[2] === "X" && newGameBoard[4] === "X" && newGameBoard[6] === "X")
        ){
            console.log("PLAYER X WIN")
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
            console.log("PLAYER O WIN")
        }
        else {
            console.log("NOBODY WIN")
        }
    }

    return {makeMove, whoWin, newGameBoard};
})()