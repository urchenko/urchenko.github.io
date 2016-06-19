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
/*board initialisation*/
var board = new Array(n);
var way = new Array(n);

for (var i = n; i--;) {
  board[i] = new Array(n);
  way[i] = new Array(n);
}

for (i = n; i--;) {
  for (var j = n; j--;) {
    board[i][j] = 0;
  }
}
/*start*/
board[0][0] = 's';
way[0][0] = [0,0];
/*finish*/
board[n-1][n-1] = 'f';
var coord= [];


var x;
var y;
var stepX;
var stepY;
var stepXY = [ [-1,-2], [1,-2], [2,-1], [2,1], [1,2], [-1,2], [-2,1], [-2,-1] ];
var stLen = stepXY.length;

var queue = [];
queue.push([0,0]);

for (; queue.length !== 0;) {

  x = queue[0][0];
  y = queue[0][1];

  for (i = stLen; i--;) {
    stepX = x + stepXY[i][0];
    stepY = y + stepXY[i][1];

    if ( stepX < n && stepX >= 0 && stepY < n && stepY >= 0 ) {

      if ( board[stepX][stepY] == 0) {

          board[stepX][stepY] = 1;
          queue.push([stepX,stepY]);
          way[stepX][stepY] = [x,y];

      } else if ( board[stepX][stepY] == 'f' ) {

          way[stepX][stepY] = [x,y];
          console.log(wayCord(stepX,stepY));
          queue = [];

      }
    }
  }
  queue.shift();
}
function wayCord(x,y) {
  var elem;
  do {
    coord.push([x,y]);
    elem = way[x][y];
    x = elem[0];
    y = elem[1];
  } while ( x != 0 || y != 0);
  coord.push([x,y]);
  coord.reverse();
  return coord;
}