function Player(name, markType) {
  this.name = name;
  this.mark = markType;
}

var player1 = new Player('loewy', 'x')
var player2 = new Player('brendon', 'o')

function Space(xCoordinate, yCoordinate, markType) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.marked = false;
  this.mark = markType;
}

function Board(x, y) {
  this.space =
}

// these would be generated objects or preset objects?
var board11 = new Board(1, 1);
var board12 = new Board(1, 2);
var board13 = new Board(1, 3);
var board21 = new Board(2, 1);
var board22 = new Board(2, 2);
var board23 = new Board(2, 3);
var board31 = new Board(3, 1);
var board32 = new Board(3, 2);
var board33 = new Board(3, 3);

Board.prototype.find(x, y) {
  this.xCoordinate = x;
  this.yCoordinate = y;
  return space11 = new Space(1, 1);
}