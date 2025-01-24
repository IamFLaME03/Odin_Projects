function Game(){
    const boxes = document.querySelectorAll('.box')
    const msgBox = document.querySelector('.msg-container')
    const restartBtn = document.querySelector('.restart')
    const newGameBtn = document.querySelector('.newGame')
    const endGameBtn = document.querySelector('.endGame')
    const player1Score = document.querySelector('.player1>.score')
    const player2Score = document.querySelector('.player2>.score')
    const player1Name = document.querySelector('.player1>.playername')
    const player2Name = document.querySelector('.player2>.playername')
    
    //Player1 = X & Player2 = O
    let turnPlayer1 = true;
    player1Name.style.textDecoration = 'underline'
    let points = [0, 0];
    let roundOver = false;
    let gameOver = false;
    let remainBox = 9;
    const winPatten = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    const showMsg = function (msg){
        msgBox.innerText = msg
    }
    const updatePoints = function (){
        player1Score.innerText = points[0];
        player2Score.innerText = points[1];        
    }
    const showCombination = function (combination){
        for(let box of combination){
            box.style.color = 'var(--dark-blue)';
            box.style.background = '#90adc6ab';
        }
    }
    const checkWinner = function (){
        winPatten.forEach((p) => {
            let val1 = boxes[p[0]].innerText;
            let val2 = boxes[p[1]].innerText;
            let val3 = boxes[p[2]].innerText;

            if(val1 != '' && val2 != '' && val3 != ''){
                if(val1 === val2 && val2 === val3){
                    let combination = [boxes[p[0]], boxes[p[1]], boxes[p[2]]]
                    showCombination(combination);
                    if(val1 === 'X'){
                        showMsg(`Round Winner is Red...`)
                        points[0]++;
                    }
                    else{
                        showMsg(`Round Winner is Blue...`)
                        points[1]++
                    }
                    updatePoints();
                    roundOver = true;
                }
            }
        })
    }
    const markBox = function (e){
        if(roundOver){
            restart();
            return;
        }
        if(e.target.innerText === ''){
            if(turnPlayer1){
                e.target.innerText = 'X';
                turnPlayer1 = false;
                player2Name.style.border = 'underline'
                player1Name.style.textDecoration = 'none'
            }
            else{
                e.target.innerText = 'O';
                turnPlayer1 = true;
                player1Name.style.textDecoration = 'underline'
                player2Name.style.textDecoration = 'none'
            }
            checkWinner();
            if(--remainBox == 0 && roundOver==false){
                showMsg('This round is Draw');
                roundOver = true;
            }
        }
        else{
            console.log('invalid input');
        }
    }

    const restart = function (){
        for(let box of boxes){
            box.innerText = '';
            box.style.color = 'var(--yellow)';
            box.style.background = 'var(--blue-gray)';
        }
        turnPlayer1 = true;
        remainBox = 9;
        roundOver=false;
        showMsg('');
    }
    const newGame = function (){
        points= [0, 0]
        updatePoints();
        restart();
    }
    const endGame =function (){
        if(points[0] > points[1]){
            showMsg('....Red Wins....')
        }
        else if(points[0] == points[1]){
            showMsg('....Game Draws....')
        }
        else{
            showMsg('....Blue Wins....')
        }
        gameOver= true;
    }

    boxes.forEach((b) => {
        b.addEventListener('click', markBox);
    })
    restartBtn.addEventListener('click', restart);
    endGameBtn.addEventListener('click', endGame);
    newGameBtn.addEventListener('click', ()=>{
        if((points[0] != 0 || points[1] != 0) && gameOver==false){
            if(confirm('Are you sure to end current game and start again?') ){
                newGame();
            }
        }
        else{
            newGame();
        }
    });

    return {
        restart,
        newGame,
        endGame
    }
}
let g = new Game();












//Gameboard : obj 
    //gameboard
    //render func
        //change html
    //check input
        //valid - mark
        //invalid - error
    //mark fucn 
        //update gameboard 
        //render func
        //checkGameOver

    //checkGameOver
        //true - declare winner, incrementScore
        //show restart, endResult

    //error func - on wrong input
        //wrong input error
    
    //restartGame func    

    //endGame func


//Player
    //red-blue
    //score
    //changeName
    //changeColor
    //incrementScore
