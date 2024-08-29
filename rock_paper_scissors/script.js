const myScoreEle = document.querySelector(".myScore");
const botScoreEle = document.querySelector(".botScore");
const button = document.querySelectorAll(".button");
const myChoiceText = document.querySelector(".myChoiceText");
const botChoiceText = document.querySelector(".botChoiceText");
const myChoiceImg = document.querySelector(".myChoiceImg");
const botChoiceImg = document.querySelector(".botChoiceImg");
const roundWinner = document.querySelector(".roundWinner");
const resultTable = document.querySelector(".resultTable");
const winResult = document.querySelector(".winResult");
const loseResult = document.querySelector(".loseResult");
const playAgain = document.querySelector(".playAgain");

let myScore = 0;
let botScore = 0;
let human_choice;
let computer_choice;

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
// botChoiceText.innerHTML = ;

function showInput() {
  myChoiceText.innerHTML = "";
  botChoiceText.innerHTML = "";

  const p1 = document.createElement("p");
  p1.appendChild(document.createTextNode(`You Played ${human_choice}`));
  myChoiceText.appendChild(p1);

  const p2 = document.createElement("p");
  p2.appendChild(document.createTextNode(`Computer Played ${computer_choice}`));
  botChoiceText.appendChild(p2);

  const i1 = document.createElement("img");
  i1.setAttribute("src", `img/${human_choice}.png`);
  myChoiceImg.replaceChildren(i1);

  const i2 = document.createElement("img");
  i2.setAttribute("src", `img/${computer_choice}.png`);
  botChoiceImg.replaceChildren(i2);
}
function findWinner(val1, val2) {
    // rock > scissors
    // scissors > paper
    // paper > rock
    if (val1 == val2) {
      return "draw";
    } else if (
      (val1 == "Rock" && val2 == "Scissor") ||
      (val1 == "Scissor" && val2 == "Paper") ||
      (val1 == "Paper" && val2 == "Rock")
    ) {
      return val1;
    } else {
      return val2;
    }
}
function showRoundWinner(winner){
    if (winner === human_choice) {

        console.log("Hurrah! You Win the round");
        return "human";
    } 
    else if (winner === computer_choice) {
        console.log("Oops! Computer the round!");
        return "bot";
    } 
    else {
        console.log("Oh, Its Tie!");
    }
}

//checks for click event and perform task
button.forEach(function (button) {
  button.addEventListener("click", function (e) {
    //target element's id gives human choice
    human_choice = e.target.id;
    computer_choice = getComputerChoice();
    console.log(`human : ${human_choice}  com : ${computer_choice}`);
    showInput();
    let winner = findWinner(human_choice,computer_choice);
    console.log(winner)
    showRoundWinner(winner);

  });
});



function round() {
  let human_choice = getHumanChoice();

  let winner = findWinner(human_choice, computer_choice);
  
}
function game() {
  const rounds = Number(prompt("How many rounds you want to play"));
  if (!rounds) {
    console.log("Not started");
  } else {
    let human_wins = 0,
      bot_wins = 0;
    for (let i = 0; i < rounds; i++) {
      console.log(`------Round - ${i + 1}------`);
      const res = round();
      if (res === "human") human_wins++;
      else if (res === "bot") bot_wins++;

      console.log(`Your Points : ${human_wins}`);
      console.log(`Opponent Points : ${bot_wins}`);
    }
    if (human_wins > bot_wins) {
      console.log(
        `You are the Winner!!! with the lead of ${
          human_wins - bot_wins
        } points.`
      );
    } else if (human_wins == bot_wins) {
      console.log(`Its draw`);
    } else {
      console.log(
        `Opponent is the Winner!!! with the lead of ${
          bot_wins - human_wins
        } points.`
      );
    }
  }
}
