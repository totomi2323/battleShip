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
        square.id = i;
        document.querySelector(".map").appendChild(square);
      }
  }
  const placeShip = (shipPositionStart, direction, whichShip) => {
    let i;
    if (direction === "horizontal") {
      for (i = 0; i < whichShip.shipLength; i++) {
        whichShip.shipPositions.push(shipPositionStart + i);
      }
    } else if (direction === "vertical") {
      for (i = 0; i < whichShip.shipLength; i++) {
        whichShip.shipPositions.push(shipPositionStart + i * 10);
      }
    }

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
    let sunkedShips = 0;
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

  return { createMap, createBoard,  placeShip, receiveAttack, isAllShipSunked,  allShip, missedShots };
})();

export { gameBoard as gameBoard };
