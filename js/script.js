let cells = document.querySelectorAll(".cell");
let x_inbox = [];
let circle_inbox = [];
let count = 0;
let x_win = 0;
let circle_win = 0;
let draw = 0;
let win = false;
let continueBtn = document.querySelector(".continue-btn");
let startAgainBtn = document.querySelector(".start-again-btn");

cells.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (
      count % 2 == 0 &&
      !x_inbox.includes(element.id) &&
      !circle_inbox.includes(element.id)
    )
      put_X(element);
    else if (
      count % 2 != 0 &&
      !circle_inbox.includes(element.id) &&
      !x_inbox.includes(element.id)
    )
      put_O(element);

    if (count >= 5) {
      whoIsWinner();
    }
    e.preventDefault();
  });
});

function put_X(element) {
  element.innerHTML = "X";
  element.style.color = "#4C5F5D";
  x_inbox.push(element.id);
  count++;
}

function put_O(element) {
  element.innerHTML = "O";
  element.style.color = "#E3E7D0";
  circle_inbox.push(element.id);
  count++;
}

function whoIsWinner() {
  if (
    (x_inbox.includes("1") && x_inbox.includes("4") && x_inbox.includes("7")) ||
    (x_inbox.includes("2") && x_inbox.includes("5") && x_inbox.includes("8")) ||
    (x_inbox.includes("3") && x_inbox.includes("6") && x_inbox.includes("9")) ||
    (x_inbox.includes("1") && x_inbox.includes("5") && x_inbox.includes("9")) ||
    (x_inbox.includes("3") && x_inbox.includes("5") && x_inbox.includes("7")) ||
    (x_inbox.includes("1") && x_inbox.includes("2") && x_inbox.includes("3")) ||
    (x_inbox.includes("4") && x_inbox.includes("5") && x_inbox.includes("6")) ||
    (x_inbox.includes("7") && x_inbox.includes("8") && x_inbox.includes("9"))
  ) {
    x_win++;
    win = true;
    document.querySelector(".player-1-score").innerHTML = x_win;
    document.querySelector(".winner-name").style.display = "block";
    document.querySelector(".winner-name").src = "../images/xmark.svg";
    document.querySelector(".gameResult").innerHTML = "winner";
    document.querySelector(".result-draw").style.display = "none";
    gameOver();
  } else if (
    (circle_inbox.includes("1") &&
      circle_inbox.includes("4") &&
      circle_inbox.includes("7")) ||
    (circle_inbox.includes("2") &&
      circle_inbox.includes("5") &&
      circle_inbox.includes("8")) ||
    (circle_inbox.includes("3") &&
      circle_inbox.includes("6") &&
      circle_inbox.includes("9")) ||
    (circle_inbox.includes("1") &&
      circle_inbox.includes("5") &&
      circle_inbox.includes("9")) ||
    (circle_inbox.includes("3") &&
      circle_inbox.includes("5") &&
      circle_inbox.includes("7")) ||
    (circle_inbox.includes("1") &&
      circle_inbox.includes("2") &&
      circle_inbox.includes("3")) ||
    (circle_inbox.includes("4") &&
      circle_inbox.includes("5") &&
      circle_inbox.includes("6")) ||
    (circle_inbox.includes("7") &&
      circle_inbox.includes("8") &&
      circle_inbox.includes("9"))
  ) {
    win = true;
    circle_win++;
    document.querySelector(".player-2-score").innerHTML = circle_win;
    document.querySelector(".winner-name").style.display = "block";
    document.querySelector(".winner-name").src = "../images/o-mark.svg";
    document.querySelector(".gameResult").innerHTML = "winner";
    document.querySelector(".result-draw").style.display = "none";
    gameOver();
  }

  if (count == 9 && win == false) {
    draw++;
    document.querySelector(".gameResult").innerHTML = "draw";
    document.querySelector(".draw-score").innerHTML = draw;
    document.querySelector(".result-draw").style.display = "block";
    document.querySelector(".winner-name").style.display = "none";
    gameOver();
  }
}

function gameOver() {
  x_inbox = [];
  circle_inbox = [];
  count = 0;
  win = false;
  for (i of cells) {
    i.innerHTML = "";
  }
  document.querySelector(".modal").classList.add("show");
}

continueBtn.addEventListener("click", (e) => {
  document.querySelector(".modal").classList.remove("show");
  document.querySelector(".gameResult").innerHTML = "";
});

startAgainBtn.addEventListener("click", () => {
  x_win = 0;
  circle_win = 0;
  draw = 0;
  document.querySelector(".player-1-score").innerHTML = 0;
  document.querySelector(".player-2-score").innerHTML = 0;
  document.querySelector(".draw-score").innerHTML = 0;
  document.querySelector(".modal").classList.remove("show");
});
