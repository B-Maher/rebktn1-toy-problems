/*
Robot Paths

A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. 
The robot can move either up, down, left, or right, but cannot visit the same spot twice. 
How many possible unique paths are there to the bottom right corner?

Make your solution work for a grid of any size.

Parameters:

n (required) - amount of rows/columns (max 6)

Example: 

robotPaths(1) // 1
robotPaths(2) // 2
robotPaths(3) // 12

*/

// Helpers

function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
}

function robotPaths(n, rowIndex = 0, columnIndex = 0, board, nbrOfPath = 0) {
  board = board || makeBoard(n);
  if (rowIndex < 0 || rowIndex >= n || columnIndex < 0 || columnIndex >= n) return 0;
  if (board.hasBeenVisited(rowIndex, columnIndex)) return 0;
  if (columnIndex === n - 1 && rowIndex === n - 1) return 1;

  board.togglePiece(rowIndex, columnIndex);
  nbrOfPath +=
    robotPaths(n, rowIndex, columnIndex + 1, board, nbrOfPath) +
    robotPaths(n, rowIndex + 1, columnIndex, board, nbrOfPath) +
    robotPaths(n, rowIndex, columnIndex - 1, board, nbrOfPath) +
    robotPaths(n, rowIndex - 1, columnIndex, board, nbrOfPath);

  board.togglePiece(rowIndex, columnIndex);

  return nbrOfPath;
}
