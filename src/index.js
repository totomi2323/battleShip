import "./style.css";
import { gameBoard } from "./gameBoard.js";
import { shipDock } from "./shipDock";

let playField = document.createElement("div");
playField.classList.add("playField");
document.body.appendChild(playField);

shipDock.displayShipDock();
gameBoard.createMap();
gameBoard.createBoard();

function handleDragStart(e) {
  this.style.backgroundColor = "yellow";
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
  console.log(this);
}

function handleDragLeave(e) {
  this.classList.remove("over");
}

function handleDrop(e) {
    e.stopPropagation(); 
    return false;
  }

let items = document.querySelectorAll(".ship");
items.forEach(function (item) {
  item.addEventListener("dragstart", handleDragStart);
  item.addEventListener("dragend", handleDragEnd);
});


let squares = document.querySelectorAll(".map .square");
squares.forEach(function (squa ) {
    squa.addEventListener('dragover', handleDragOver);
    squa.addEventListener('dragenter', handleDragEnter);
    squa.addEventListener('dragleave', handleDragLeave);
    squa.addEventListener('drop', handleDrop);
})
