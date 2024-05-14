let userCount = 0;
let compCount = 0;
let result = true; //user wins

let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
console.log(userScore, compScore);
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");

compChoice = () => {
  const choiceType = ["Rock", "Paper", "Scissors"];
  let compClick = choiceType[Math.floor(Math.random() * 3)];
  return compClick;
};

printDraw = () => {
  msg.innerText = "Game is Draw";
  msg.style.backgroundColor = "#3c486b";
};

printWinner = (userClick, compClick, result) => {
  if (result) {
    userCount++;
    userScore.innerText = userCount;
    msg.innerText = `${userClick} beats ${compClick}. User Wins`;
    msg.style.backgroundColor = "#00DFA2";
  } else {
    compCount++;
    compScore.innerText = compCount;
    msg.innerText = `${userClick} is beaten by ${compClick}. Comp Wins`;
    msg.style.backgroundColor = "#FF0060";
  }
};

compareWhoWins = (userClick, compClick) => {
  if (userClick === compClick) {
    printDraw();
  } else if (userClick === "Rock") {
    result = compClick === "Paper" ? false : true;
    printWinner(userClick, compClick, result);
  } else if (userClick === "Paper") {
    result = compClick === "Scissors" ? false : true;
    printWinner(userClick, compClick, result);
  } else {
    result = compClick === "Rock" ? false : true;
    printWinner(userClick, compClick, result);
  }
};

choices.forEach((choice) => {
  //   console.log(choice.getAttribute("id"));
  choice.addEventListener("click", () => {
    let userClick = choice.getAttribute("id");

    //generate comp choice
    let compClick = compChoice();
    console.log(userClick);
    console.log(compClick);

    //compare who whins
    compareWhoWins(userClick, compClick);
  });
});
