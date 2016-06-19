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
// (function () {
  var queue = [];
  var coord= [];
  /*board initialisation*/
  var n = 1000;
  var board = new Array(n);
  var way = new Array(n);

  for (var i = 0; i < board.length; i++) {
    board[i] = new Array(n);
    way[i] = new Array(n);
  }

  for (var row = 0; row < board.length; row++) {
  for (var col = 0; col < board[row].length; col++) {
    board[row][col] = 0;
    way[row][col] = [];
  }
  }
  /*start*/
  board[0][0] = 's';
  /*finish*/
  board[n-1][n-1] = 'f';

  // for (row = 0; row < board.length; row++) {
  //   for (col = 0; col < board[row].length; col++) {
  //     document.write(board[row][col]+'&nbsp;&nbsp;&nbsp;');
  //   }
  //   document.write('</br>');
  // }
  var x;
  var y;
  var stepX;
  var stepY;
  var stepXY = [ [-1,-2], [1,-2], [2,-1], [2,1], [1,2], [-1,2], [-2,1], [-2,-1] ];
  // for (i=0; i<stepxy.length; i++) {
  //   console.log(i+': '+stepxy[i][0]+','+stepxy[i][1]);
  // }
  var parent;
  queue.push([0,0]);
  way[0][0] = [0,0];
  // console.log(queue[0]);
  while ( queue.length ) {
  // debugger;
  x = queue[0][0];
  y = queue[0][1];
  // way[x][y] = way
  // way[x][y].push([x,y]);

  for(i = 0; i < stepXY.length; i++) {
    stepX = x + stepXY[i][0];
    stepY = y + stepXY[i][1];
    // if(  stepX < n && stepX >= 0 && stepY < n 
    //     && stepY >= 0 && board[stepX][stepY] == 'f' ) {
    //   console.log('congratulations!');
    //   console.log(way[x][y]);
    // } else {
      if ( stepX < n && stepX >= 0 && stepY < n 
        && stepY >= 0 && board[stepX][stepY] != 's') {
          if( board[stepX][stepY] == 0) {
            board[stepX][stepY] = 1;
            queue.push([stepX,stepY]);
            // for (row = 0; row < board.length; row++) {
            //   for (col = 0; col < board[row].length; col++) {
            //     way[stepX][stepY].push(way[row][col]);
            //   }
            // }
            // way[stepX][stepY].push([x,y]);
            // way[stepX][stepY].push(way[x][y]);
            // console.log(way[stepX][stepY]);
            // way[stepX][stepY].push([stepX,stepY]);
            way[stepX][stepY] = [x,y];
            // way[stepX][stepY].unshift([x,y]);
            // way[stepX][stepY] = way[x][y].slice(0);
            // way[stepX][stepY] = way[x][y].slice(0);
            // console.log(way[stepX][stepY]);
            // way[stepX][stepY].push([stepX,stepY]);
            // console.log(way[stepX][stepY]);
          } else if ( board[stepX][stepY] == 'f' ) {
            way[stepX][stepY] = [x,y];
            // way[stepX][stepY] = (way[x][y]).slice(0);
            // way[stepX][stepY].push([stepX,stepY]);
            // way[stepX][stepY] = way[x][y].slice();
            // way[stepX][stepY].push([x,y]);
              // console.log(x,y);
              // way[stepX][stepY] = way[x][y];
              // way[stepX][stepY] = way[x][y].slice(0);
              // way[stepX][stepY].push([stepX,stepY]);
              // console.log('Finish');
              // console.log(stepX,stepY);
              // console.log(wayCord(stepX,stepY));
              wayCord(stepX,stepY);
              queue = [];
          }
      }
  }
    // console.log(queue[0]);
  queue.shift();
  }
function wayCord(x,y) {
  // for (i = 0; i < way.length; i++) {
  //   for (j =0; j < way[i].length; j++) {
    // debugger;
    var elem;
      do {
        coord.push([x,y]);
        elem = way[x][y];
        // console.log(elem);
        x = elem[0];
        y = elem[1];
      }
      while ( x !== 0 || y !== 0);
      coord.push([x,y]);
      // coord.reverse();
      return coord;
  //   }
  // }
}
  // for (row = 0; row < board.length; row++) {
  //   for (col = 0; col < board[row].length; col++) {
  //     document.write(board[row][col]+'&nbsp;&nbsp;&nbsp;');
  //   }
  //   document.write('</br>');
  // }

  // for (row = 0; row < way.length; row++) {
  //   for (col = 0; col < way[row].length; col++) {
  //     document.write(way[row][col]+'&nbsp;&nbsp;&nbsp;');
  //   }
  //   document.write('</br>');
  // }

// })();