import "./style.css";
import { gameBoard } from "./gameBoard.js";
import { shipDock } from "./shipDock";

let playField = document.createElement("div");
playField.classList.add("playField");
document.body.appendChild(playField);

shipDock.displayShipDock();
gameBoard.createMap("player");
gameBoard.createMap("computer");
gameBoard.createBoard("player");
gameBoard.createBoard("computer");
let whichShip = "";
function handleDragStart(e) {
  this.style.backgroundColor = "yellow";
  whichShip = this.getAttribute("ship");
}

function handleDragEnd(e) {
  this.style.background = "grey";
  items.forEach(function (item) {
    item.classList.remove("over");
  });
}
function handleDragOver(e) {
    e.preventDefault();
    return false;}

function handleDragEnter(e) {
  this.classList.add("over");
}

function handleDragLeave(e) {
  this.classList.remove("over");
}

function handleDrop(e) {
    e.stopPropagation(); 
    this.classList.remove("over");
    let way = "horizontal";
    let rotateButton = document.querySelector(".rotateButton");
    if (rotateButton.hasAttribute("turned")) { 
      way = "vertical"
    }
    else {way = "horizontal"};
    let startingPosition = this.getAttribute("pos")
    gameBoard.placeShip( startingPosition, way, gameBoard.allShip[whichShip]);
    return false;
  }

let items = document.querySelectorAll(".ship");
items.forEach(function (item) {
  item.addEventListener("dragstart", handleDragStart);
  item.addEventListener("dragend", handleDragEnd);
});


let squares = document.querySelectorAll("#player.map .square");
squares.forEach(function (squa ) {
    squa.addEventListener('dragover', handleDragOver);
    squa.addEventListener('dragenter', handleDragEnter);
    squa.addEventListener('dragleave', handleDragLeave);
    squa.addEventListener('drop', handleDrop);
    squa.addEventListener('drop', isDockEmpty);
})

function setFunctionToSquares() {
let allSquare = document.querySelectorAll("#computer.map .square");
allSquare.forEach(function (square) {
  square.addEventListener("click", function shooting(e) {
    let coordinate = this.getAttribute("pos");
   if (gameBoard.receiveAttack(coordinate, "computer") === true) {
    this.classList.add("hit")
   } else {
    this.classList.add("missed");
   }
   this.removeEventListener('click', shooting);
   gameBoard.enemyShooting();
  })
})
}
function isDockEmpty() {
  let dock = document.querySelector(".shipDock");
  if (dock.childNodes.length === 0) {
    setFunctionToSquares();
    gameBoard.setEnemeyShipsToBoard();
    dock.style.display = "none";
  }
}



//if all ship sunked game finished//
// make a nicer UI//
// take dom function and action functions apart in different JS files, aka clean up//