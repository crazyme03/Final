let ticTacBoard = [0,0,0,0,0,0,0,0,0];
let toer = 0

function tic(x) {
  if (ticTacBoard[x] == 0) {
    ticTacBoard[x] = 1
    makeCross(x);
  }
}

function tac(x) {
  if (ticTacBoard[x] == 0) {
    ticTacBoard[x] = 2
    makeCirc(x);
  }
}

function toe(x) {
  if (toer%2 == 0) {
    tic(x);
  } else {
    tac(x);
  }
  toer++;
}
function makeCross(x) {
  document.getElementById('a'+x).innerHTML = '<img src="tic.png" alt="tic">';
}
function makeCirc(x) {
  document.getElementById('a'+x).innerHTML = '<img src="tac.png" alt="tac">';
}
