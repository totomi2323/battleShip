import {shipCreator as shipCreator} from "./ship.js"
const gameBoard = (() => {
  let allShip = {};
  let missedShots = [];
  let sunkedShips = 0;
  function createMap() {
    let shipMap = document.createElement("div");
    shipMap.classList.add("map");
    document.querySelector(".playField").appendChild(shipMap);
  }
  function createBoard()  {
      for (let i= 1; i <= 100; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.id = "pos"+i;
        square.setAttribute("pos", i);
        document.querySelector(".map").appendChild(square);
      }
  }
  const placeShip = (shipPositionStart, direction, whichShip) => {
    let i;
    shipPositionStart = parseInt(shipPositionStart);
    if (direction === "horizontal") {
      for (i = 0; i < whichShip.shipLength; i++) {
        whichShip.shipPositions.push(shipPositionStart + i);
      }
      setShipHorizontaly(whichShip.shipName, shipPositionStart);
    } else if (direction === "vertical") {
      for (i = 0; i < whichShip.shipLength; i++) {
        whichShip.shipPositions.push(shipPositionStart + i * 10);
      }
      console.log(whichShip.shipPositions)
      setShipVerticaly(whichShip.shipName, whichShip.shipPositions);
    }
    
      document.querySelector("#"+whichShip.shipName).setAttribute("draggable", false);
      removeMapElements(whichShip.shipPositions);
      setShipPositions(whichShip.shipName, whichShip.shipPositions);

    return whichShip.shipPositions;
  };
  const receiveAttack = (coordinate) => {
    let shipHit = false ;
    for (const checkShip in allShip) {
      for (let i = 0; i < allShip[checkShip].shipPositions.length; i++) {
        if (allShip[checkShip].shipPositions[i] === coordinate) {
          shipHit = true;
         allShip[checkShip].hit(coordinate);
        } 
      }
    }
    if (shipHit === false) {missedShots.push(coordinate)}
    return shipHit;
  };
  const isAllShipSunked = () => {
    let all  = false;
    let allShipLength = Object.keys(allShip).length;
    for (const checkShip in allShip) {
      allShip[checkShip].isSunk();
      if (allShip[checkShip].sunk === true) {
        sunkedShips += 1 ;
      }
    }
    if (sunkedShips === allShipLength) {
      all = true;
    }
    return all;
  }
  function removeMapElements(elements) {
    for (let i=0; i < (elements.length); i++) {
      let map = document.querySelector(".map");
      let removableElement = document.querySelector("#pos"+elements[i]);
      map.removeChild(removableElement);
    }
  }
  function setShipPositions(name , positions) {
    let i = 0;
    let allSquaresOfShip = document.querySelectorAll("#"+name+" .square");
    allSquaresOfShip.forEach((square ) => {
      square.id = "pos"+ positions[i];
      i++;
    })
  }
  function setShipVerticaly(name , positions) {
    let i = 0;

    let map = document.querySelector(".map");
    let start = document.querySelector("#pos"+positions[0]);
    let thisShip = document.querySelector("#"+name);
      map.insertBefore(thisShip, start);
    let allSquaresOfShip = document.querySelectorAll("#"+name+" .square");
    allSquaresOfShip.forEach((square ) => {
      let pos = positions[i] +1;
  
      let verticalSquarePosition = document.querySelector("#pos"+pos+".square")
      map.insertBefore(square, verticalSquarePosition);
      square.classList.add("ship");
      square.setAttribute("ship", name);
      square.id= name;
      i++;
    })
  }
  function setShipHorizontaly(name, positionsStart) {
    let start = document.querySelector("#pos"+positionsStart);
    let map = document.querySelector(".map");
    let thisShip = document.querySelector("#"+name);
      map.insertBefore(thisShip, start);
      let allSquaresOfShip = document.querySelectorAll("#"+name+" .square");
    allSquaresOfShip.forEach((square ) => {
      square.classList.add("ship");
      square.setAttribute("ship", name);
      square.id= name;
    })
  }

  return { createMap, createBoard,  placeShip, receiveAttack, isAllShipSunked,  allShip, missedShots };
})();

export { gameBoard as gameBoard };
