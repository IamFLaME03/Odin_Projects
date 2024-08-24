function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissor"; 
  }
}
function getHumanChoice() {
  let choice = window.prompt("1.Rock \n2.Paper\n3.Scissor");
  switch (choice) {
    case '1':
      return "Rock";
    case '2':
      return "Paper";
    case '3':
      return "Scissor";
    default:
      alert("Enter valid choice!!!");
      return getHumanChoice();
  }
}
function findWinner(val1, val2){
    // rock > scissors  
    // scissors > paper 
    // paper > rock 
    if(val1 == val2){
        return 'draw'
    }
    else if((val1=="Rock" && val2=="Scissor") || (val1=="Scissor" && val2=="Paper") || (val1=="Paper" && val2=="Rock")){
        return val1
    }
    else{
        return val2
    }
}
function round(){
    let human_choice = getHumanChoice();
    let computer_choice = getComputerChoice();
    console.log(`You - ${human_choice}   v/s    Bot - ${computer_choice}`); 
    
    let winner = findWinner(human_choice, computer_choice);
    if(winner === human_choice){
        console.log("Hurrah! You Win the round");
        return "human"
    }
    else if(winner === computer_choice){
        console.log("Oops! You lose the round!");
        return "bot"
    }
    else{
        console.log("Oh, Its Tie!");
    }
}
function game(){
    const rounds = Number(prompt("How many rounds you want to play"))
    if(!rounds) {
        console.log("Not started")
    } 
    else{
        let human_wins = 0, bot_wins=0;
        for (let i = 0; i < rounds; i++) {
            console.log(`------Round - ${i+1}------`);
            const res = round();
            if(res === "human")
                human_wins++
            else if(res === "bot")
                bot_wins++
            
            console.log(`Your Points : ${human_wins}`);
            console.log(`Opponent Points : ${bot_wins}`);
        }
        if(human_wins>bot_wins){
            console.log(`You are the Winner!!! with the lead of ${human_wins - bot_wins} points.`)
        }
        else if(human_wins==bot_wins){
            console.log(`Its draw`)
        }
        else{
            console.log(`Opponent is the Winner!!! with the lead of ${bot_wins - human_wins} points.`)
        }
    }
}
