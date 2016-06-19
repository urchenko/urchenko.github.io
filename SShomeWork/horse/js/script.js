// YOUR SOLUTION GOES HERE
// board: 2-d array, where
// -1  - wall
//  0  - emptry cell
// 's' - start
// 'f' - finish

// var board = [
//     ['s', -1,  -1,   0,  0  ],
//     [0,    0,  -1,  -1,  0  ],
//     [0,    0,  -1,  -1,  0  ],
//     [0,    0,   0,  -1,  0  ],
//     [0,    0,   0,   0, 'f' ]
// ]

// expected: path array
// return [ [0,0], [1,2], [0,4], [2, 3], [4,4] ]
// if s в точке (0,0), f в точке (2,4)

var n = 1000;
var queue = [];
var elem;
/*board initialisation*/
var board = new Array(n);
var visited = new Array(n);

for (var i = 0; i < n; i++) {
  board[i] = new Array(n);
  visited[i] = new Array(n);
}

for (var row = 0; row < board.length; row++) {
  for (var col = 0; col < board[row].length; col++) {
    visited[row][col] = false;
    board[row][col] = [row,col];
  }
}

var start = board[0][0];
visited[0][0] = true;
var end = board[n-1][n-1];

// queue.push();
// console.log(queue[0]);
// elem = [queue[0][0],queue[0][1]];
// arr = [2,1];
// arr = arr[arr.lengt].push(1);
// console.log(arr);
while ( queue.length ) {
  col = queue[0][0];
  row = queue[0][1];
  elem = queue[0];
  // console.log(queue.push(elem));
  /*progress top-left*/
  if ( (col-1) >= 0 && (col-1) < n && (row-2) >= 0 
    && (row-2) < n && visited[col-1][row-2] == false) {
      queue.push([col-1, row-2]);
      board[col-1][row-2] = queue[0].push([col-1, row-2]);
      visited[col-1][row-2] = true;
  }
    /*progress top-right*/
  if ( (col+1) >= 0 && (col+1) < n && (row-2) >= 0 
    && (row-2) < n && visited[col+1][row-2] == false) {
      queue.push([col+1, row-2]);
      board[col+1][row-2] = queue[0].push([col+1, row-2]);
      visited[col+1][row-2] = true;
  }
  /*progress right-top*/
  if ( (col+2) >= 0 && (col+2) < n && (row-1) >= 0 
    && (row-1) < n && visited[col+2][row-1] == false) {
      queue.push([col+2, row-1]);
      board[col+2][row-1] = queue[0].push([col+2, row-1]);
      visited[col+2][row-1] = true;
  }
  /*progress right-bottom*/
  if ( (col+2) >= 0 && (col+2) < n && (row+1) >= 0 
    && (row+1) < n && visited[col+2][row+1] == false) {
      queue.push([col+2, row+1]);
      board[col+2][row+1] = queue[0].push([col+2, row+1]);
      visited[col+2][row+1] = true;
  }
  /*progress bottom-right*/
  if ( (col+1) >= 0 && (col+1) < n && (row+2) >= 0 
    && (row+2) < n && visited[col+1][row+2] == false) {
      queue.push([col+1, row+2]);
      board[col+1][row+2] = queue[0].push([col+1, row+2]);
      visited[col+1][row+2] = true;
  }
  /*progress bottom-left*/
  if ( (col-1) >= 0 && (col-1) < n && (row+2) >= 0 
    && (row+2) < n && visited[col-1][row+2] == false) {
      queue.push([col-1, row+2]);
      board[col-1][row+2] = queue[0].push([col-1, row+2]);
      visited[col-1][row+2] = true;
  }
  /*progress left-bottom*/
  if ( (col-2) >= 0 && (col-2) < n && (row+1) >= 0 
    && (row+1) < n && visited[col-2][row+1] == false) {
      queue.push([col-2, row+1]);
      board[col-2][row+1] = queue[0].push([col-2, row+1]);
      visited[col-2][row+1] = true;
  }
  /*progress left-top*/
  if ( (col-2) >= 0 && (col-2) < n && (row-1) >= 0 
    && (row-1) < n && visited[col-2][row-1] == false) {
      queue.push([col-2, row-1]);
      board[col-2][row-1] = queue[0].push([col-2, row-1]);
      visited[col-2][row-1] = true;
  }
  queue.splice(0, 1);
}

    // board[row][col] = {
    //   addres: [row,col],
    //   count: 0,
    //   visited: false,
    //   way: []
    // };