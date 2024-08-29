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
    myScore++;
    myScoreEle.textContent = `${myScore}`;
    return "You";
  } else {
    botScore++;
    botScoreEle.textContent = `${botScore}`;
    return "Computer";
  }
}
function showRoundWinner(winner) {
  roundWinner.textContent = "";
  if (winner === "You") {
    roundWinner.textContent = "Hurrah! You Win the round";
  } else if (winner === "Computer") {
    roundWinner.textContent = "Oops! Computer Win the round!";
  } else {
    roundWinner.textContent = "Oh, Its Tie!";
  }

  if (myScore == 5) {
    winResult.style.visibility = "visible";
  } else if (botScore == 5) {
    loseResult.style.visibility = "visible";
  }
}
function previousResultShow(hc, cc, w) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${hc}</td><td>${cc}</td><td>${w}</td>`;
  resultTable.appendChild(tr);
}

//checks for click event and perform task
button.forEach(function (button) {
  button.addEventListener("click", function (e) {
    //target element's id gives human choice
    human_choice = e.target.id;
    computer_choice = getComputerChoice();
    console.log(`human : ${human_choice}  com : ${computer_choice}`);
    showInput();
    let winner = findWinner(human_choice, computer_choice);
    console.log(winner);
    console.log(myScore);
    console.log(botScore);
    showRoundWinner(winner);
    previousResultShow(human_choice, computer_choice, winner);
  });
});

playAgain.addEventListener("click", function (e) {
  winResult.style.visibility = "hidden";
  loseResult.style.visibility = "hidden";
  myScore = 0;
  botScore = 0;
  human_choice;
  computer_choice;


});
