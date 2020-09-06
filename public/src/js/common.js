// Design the board
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// Detect if a player wins
function gameOver(state, player) {
  if (
    (state[0] == player && state[1] == player && state[2] == player) ||
    (state[3] == player && state[4] == player && state[5] == player) ||
    (state[6] == player && state[7] == player && state[8] == player) ||
    (state[0] == player && state[3] == player && state[6] == player) ||
    (state[1] == player && state[4] == player && state[7] == player) ||
    (state[2] == player && state[5] == player && state[8] == player) ||
    (state[0] == player && state[4] == player && state[8] == player) ||
    (state[6] == player && state[4] == player && state[2] == player)
  )
    return true;
  else return false;
}

// Test whether the human or computer wins
function gameOverAll(state, player1, player2) {
  return gameOver(state, player1) || gameOver(state, player2);
}

// Find the number of empty cells
function emptyCells(state) {
  var cells = [];
  for (var x = 0; x < 9; x++) {
    if (state[x] == 0) cells.push(x);
  }

  return cells;
}

// Check if a move is valid or not
function validMove(x) {
  if (board[x] == 0) {
    return true;
  } else {
    return false;
  }
}

// Set the move is the position is valid
function setMove(x, player) {
  if (validMove(x)) {
    board[x] = player;
    return true;
  } else {
    return false;
  }
}
