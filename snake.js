function setup() {
  frameRate(5);
  createCanvas(900,900);
}
var boardSize = 64;
var boardLength = 8;
var j = -1;
var spaces = new Array(boardSize);
var cher = 5;
for (i = 0; i < boardSize; i++){
  if ((i%boardLength) == 0){
    j++;
  }
  spaces[i] = [(100*i)%800, 100*j, 100, 100, 0,];
}
var head = 0;
var headDirection = 1;
var headTime = 3;
var end = false;
function keyPressed() {
  if ((keyCode === UP_ARROW)&&(headDirection != 8)){
    headDirection = -8;
  } else if ((keyCode === RIGHT_ARROW)&&(headDirection != -1)){
    headDirection = 1;
  } else if ((keyCode === DOWN_ARROW)&&(headDirection != -8)){
    headDirection = 8;
  } else if ((keyCode === LEFT_ARROW)&&(headDirection != 1)){
    headDirection = -1;
  }
}
function draw() {


  if (document.getElementById('bot').value == 1){
    if ((head > 0 && head < 8) || (head > 16 && head < 23) || (head > 32 && head < 39) || (head > 48 && head < 55)){
      headDirection = -1;
    } else if ((head > 7 && head < 14) || (head > 23 && head < 30) || (head > 39 && head < 46) || (head > 55 && head < 63)){
      headDirection = 1;
    } else if ((head == 0) || (head == 14) || (head == 16)|| (head == 30) || (head == 32) || (head == 46) || (head == 48)){
      headDirection = 8;
    } else {
        headDirection = -8;
    }
    frameRate(50);
  } else {
    frameRate(5);
  }




  if (((headDirection == 8) && (head > 55)) || ((headDirection == -8) && (head < 8)) || (headDirection == 1 && ((head+1)%8 == 0)) || (headDirection == -1 && ((head+1)%8 == 1))){
    end = true;
  }

  if (!end) {
    head += headDirection;
    if (spaces[head][4] > 0){
      end = true;
    } else{
      spaces[head][4] = headTime;
    }
    if (head == cher){
      headTime++;
      if (headTime == 63){
        for (i = 0; i < boardSize; i++){
          spaces[i][4] = 0;
          headTime = 3;
        }
      } else {
        for (i = 0; i < boardSize; i++){
          if (spaces[i][4] > 0){
            spaces[i][4]++;
          }
        }
      }
      while (spaces[cher][4] > 0) {
        cher = round(random(0,63));
      }
    }
    spaces[cher][4] = -1;
    fill(color(255,255,255));
    for (i = 0; i < boardSize; i++){
      if (spaces[i][4] > 0){
        fill(color(0,255,0));
        spaces[i][4] --;
      } else if (spaces[i][4] == -1){
        fill(color(255,0,0));
      } else {
        fill(color(255,255,255));
      }
      rect(spaces[i][0], spaces[i][1], spaces[i][2], spaces[i][3]);
      fill(color(0,0,0));
      text(str(i), spaces[i][0]+50, spaces[i][1]+50);
    }
  } else {
    for (i = 0; i < boardSize; i++){
      fill(color(255, 0, 0));
      rect(spaces[i][0], spaces[i][1], spaces[i][2], spaces[i][3]);
      fill(color(0,0,0));
      text(str(i), spaces[i][0]+50, spaces[i][1]+50);
    }
    for (i = 0; i < boardSize; i++){
      spaces[i][4] = 0;
      headTime = 3;
    }
  }
}
