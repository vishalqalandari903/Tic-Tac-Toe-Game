let tap = new Audio("tap.wav");
let gameOver = false;
var hello;
let TurnNumber = 0;
let turn = "X";
// if (TurnNumber == 0) {
//   turn = "X";
//   TurnNumber = 1;
// } else {
//   turn = "O";
//   TurnNumber = 0;
// }
function changeTurn() {
  return turn === "X" ? "O" : "X";
}

var boxes = document.querySelectorAll(".box");
var activePlayer = document.querySelector(".active-player span");
// Main things

// function ChangeHoverMark() {
var board = document.querySelector(".game");
board.addEventListener("click", function () {
  board.classList.remove("at-first");
  var boxes = document.querySelectorAll(".box");
  board.classList.toggle("hover-mark-x");
  board.classList.toggle("hover-mark-o");
  Array.from(boxes).forEach((element) => {
    let boxTextBox = element.querySelector(".box-text");
    if (boxTextBox.innerHTML == "") {
      boxTextBox.classList.add("empty");
    } else {
      boxTextBox.parentElement.addEventListener("click", function () {});
      boxTextBox.classList.remove("empty");
      element.style.cursor = "not-allowed";
      element.setAttribute("title", "Value is already assigned");
      element.setAttribute("disabled", "");
    }
  });
});

Array.from(boxes).forEach((element) => {
  element.addEventListener("click", function () {
    var boxText = element.querySelector(".box-text");
    if (boxText.innerHTML == "X" || boxText.innerHTML == "O") {
      console.log("already assigned");
    } else {
      element.querySelector(".box-text").innerHTML = turn;
      turn = changeTurn();
      activePlayer.innerHTML = turn;
      tap.play();
      winCheck();
      // gameOver
      if (gameOver == false) {
      } else {
        Array.from(boxes).forEach((innerElement) => {
          innerElement.style.pointerEvents = "none";
        });
      }
      // gameOver
    }
  });
});
// Winning person
function winCheck() {
  var boxText = document.getElementsByClassName("box-text");
  win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  if (
    (boxText[0].innerHTML == "X" || boxText[0].innerHTML == "O") &&
    (boxText[1].innerHTML == "X" || boxText[1].innerHTML == "O") &&
    (boxText[2].innerHTML == "X" || boxText[2].innerHTML == "O") &&
    (boxText[3].innerHTML == "X" || boxText[3].innerHTML == "O") &&
    (boxText[4].innerHTML == "X" || boxText[4].innerHTML == "O") &&
    (boxText[5].innerHTML == "X" || boxText[5].innerHTML == "O") &&
    (boxText[6].innerHTML == "X" || boxText[6].innerHTML == "O") &&
    (boxText[7].innerHTML == "X" || boxText[7].innerHTML == "O") &&
    (boxText[8].innerHTML == "X" || boxText[8].innerHTML == "O")
  ) {
    let playerWon = document.getElementById("player-won");
    playerWon.innerHTML = "Tie 😔";
    var activePlayer = document.querySelector(".active-player span");
    activePlayer.innerHTML = "!";
  }
  // console.log(Array.from(boxText));
  win.forEach((e) => {
    if (
      boxText[e[0]].innerHTML == boxText[e[1]].innerHTML &&
      boxText[e[1]].innerHTML == boxText[e[2]].innerHTML &&
      boxText[e[2]].innerHTML !== ""
    ) {
      let winLine = document.getElementById("win-line");
      console.log(boxText[e[0]].innerHTML + " WON");
      if (win[0] == e) {
        winLine.classList.add("horizontal-line1");
      }
      gameOver = true;

      var activePlayer = document.querySelector(".active-player span");
      activePlayer.innerHTML = "!";

      let playerWon = document.getElementById("player-won");
      if (turn == "X") {
        playerWon.innerHTML = "Player O" + " Won 😃 <br> Player X Lose 😥";
      } else {
        playerWon.innerHTML = "Player X" + " Won 😃 <br> Player O Lose 😔";
      }
    }
  });
}
// Reset btn
function reset() {
  let boxes = document.getElementsByClassName("box");
  let playerWon = document.getElementById("player-won");
  Array.from(boxes).forEach((element) => {
    gameOver = false;
    element.style.pointerEvents = "all";
    var boxText = element.querySelector(".box-text");
    boxText.innerHTML = "";
    turn = "X";
    document.querySelector("#active-player span").innerHTML = "X";
    element.style.cursor = "pointer";
    element.removeAttribute("title");
  });
  playerWon.innerHTML = "Play To Win";
  var board = document.querySelector(".game");
  board.classList.add("at-first");
  board.classList.add("hover-mark-x");
  board.classList.remove("hover-mark-o");
}

// Array.from(boxes).forEach((element) => {
//   var boxText = element.querySelector(".box-text");
//   if (boxText.innerHTML != "") {
//     element.addEventListener("click", function () {
//       board.classList.toggle("hover-mark-x");
//       board.classList.toggle("hover-mark-o");
//     });
//   }
// });
