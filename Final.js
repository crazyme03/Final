let ticTacBoard = [0,0,0,0,0,0,0,0,0];
let toer = 0

function tic(x) {
  if (ticTacBoard[x] == 0) {
    ticTacBoard[x] = 1
    makeCross(x);
  }
  if ((ticTacBoard[0] == 1 && ticTacBoard[1] == 1 && ticTacBoard[2] == 1) || (ticTacBoard[3] == 1 && ticTacBoard[4] == 1 && ticTacBoard[5] == 1) || (ticTacBoard[6] == 1 && ticTacBoard[7] == 1 && ticTacBoard[8] == 1) || (ticTacBoard[0] == 1 && ticTacBoard[3] == 1 && ticTacBoard[6] == 1) || (ticTacBoard[1] == 1 && ticTacBoard[4] == 1 && ticTacBoard[7] == 1) || (ticTacBoard[2] == 1 && ticTacBoard[5] == 1 && ticTacBoard[8] == 1) || (ticTacBoard[0] == 1 && ticTacBoard[4] == 1 && ticTacBoard[8] == 1) || (ticTacBoard[2] == 1 && ticTacBoard[4] == 1 && ticTacBoard[6] == 1)) {
    document.getElementById('ticTacBody').innerHTML += "<p>Cross Won!</p>";
  }
}

function tac(x) {
  if (ticTacBoard[x] == 0) {
    ticTacBoard[x] = 2
    makeCirc(x);
  }
  if ((ticTacBoard[0] == 2 && ticTacBoard[1] == 2 && ticTacBoard[2] == 2) || (ticTacBoard[3] == 2 && ticTacBoard[4] == 2 && ticTacBoard[5] == 2) || (ticTacBoard[6] == 2 && ticTacBoard[7] == 2 && ticTacBoard[8] == 2) || (ticTacBoard[0] == 2 && ticTacBoard[3] == 2 && ticTacBoard[6] == 2) || (ticTacBoard[1] == 2 && ticTacBoard[4] == 2 && ticTacBoard[7] == 2) || (ticTacBoard[2] == 2 && ticTacBoard[5] == 2 && ticTacBoard[8] == 2) || (ticTacBoard[0] == 2 && ticTacBoard[4] == 2 && ticTacBoard[8] == 2) || (ticTacBoard[2] == 2 && ticTacBoard[4] == 2 && ticTacBoard[6] == 2)) {
    document.getElementById('ticTacBody').innerHTML += "<p>Circles Won!</p>";
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
