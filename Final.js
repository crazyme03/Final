let ticTacBoard = [0,0,0,0,0,0,0,0,0];
let toer = 0

function tic(x) {
  if (ticTacBoard[x] == 0) {
    ticTacBoard[x] = 1
    document.getElementById("a"+x).style.backgroundColor = red;
  }
}

function tac(x) {
  if (ticTacBoard[x] == 0) {
    ticTacBoard[x] = 2
    document.getElementById("a"+x).style.backgroundColor = black;
  }
}

function toe(x) {
  if (toer%2 == 0) {
    tic(x);
  } else {
    tac(x);
  }
}
